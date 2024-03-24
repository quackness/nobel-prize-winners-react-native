import React from'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import {  Text, ListItem, Card } from '@rneui/themed';
import { useEffect , useState} from 'react';

const PrizeDetails = ({ navigation, route}) => {
    const [laureates, setLaurates] = useState([]);
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState(0);
    const [orgName, setOrgName] = useState("");
    const [topMotivation, setTopMotivation] = useState("");
    console.log(route.params.category);
    console.log(route.params.year);
    const category = route.params.category
    const catCode = category.slice(0,3).toLowerCase();

//docs https://app.swaggerhub.com/apis/NobelMedia/NobelMasterData/2.1
  

    const baseUrl = `https://api.nobelprize.org/2.1/nobelPrize/${catCode}/${route.params.year}`;


    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async() => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            console.log(data[0])
            setLaurates(data[0].laureates);
            setDate(data[0].dateAwarded);
            setAmount(data[0].prizeAmount);
            setOrgName(data[0].orgname)
            setTopMotivation(data[0].topMotivation)
        } catch(error) {
            console.error('Error:', error);
        }
   
    }

 
    console.log(topMotivation);
    return (
   <ScrollView>
         <View style={styles.container}>
        <Card>
          <Card.Title>{route.params.category}</Card.Title>
          <Card.Title>{route.params.year}</Card.Title>
          <Card.Divider />
          <Text>{date? `Awarded on: ${date}` : ""}</Text>
          <Text>{topMotivation? " " : `Price awarded: ${amount} SEK`}</Text>
          <Card.Title>{laureates? "Laurate(s):" : "No prize was awarded." + topMotivation.en}</Card.Title>
        {laureates?.map((laureate, index) => (
            <ListItem key={index}>
                <ListItem.Content>
                    <ListItem.Title style={styles.bold}>{laureate?.knownName ? laureate.knownName.en : `Organization: ${laureate.orgName.en}`}</ListItem.Title>
                    <ListItem.Subtitle>Motivation: {laureate.motivation.en}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        ))}
        </Card>
      </View>

   </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    bold: {
        fontWeight: 'bold',
      },
    
  });

  
export default PrizeDetails;