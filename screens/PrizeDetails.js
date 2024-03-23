import React from'react';
import { View} from 'react-native';
import {  Text, ListItem } from '@rneui/themed';
import { useEffect , useState} from 'react';

const PrizeDetails = ({ navigation, route}) => {
    const [laureates, setLaurates] = useState([]);
    console.log(route.params.category);
    console.log(route.params.year);
    const category = route.params.category
    const catCode = category.slice(0,3).toLowerCase();
    console.log(catCode);

  

    const baseUrl = `https://api.nobelprize.org/2.1/nobelPrize/${catCode}/${route.params.year}`;


    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async() => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
   
            setLaurates(data[0].laureates);
        } catch(error) {
            console.error('Error:', error);
        }
   
    }

    console.log(laureates);
    return (
        <View>
        <Text>{route.params.category}</Text>
        <Text>{route.params.year}</Text>
        <Text>Laurates</Text>
        {laureates.map((laureate, index) => (
            <ListItem key={index}>
                <ListItem.Content>
                    <ListItem.Title>{laureate.knownName.en}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))}
    </View>
    )
};
export default PrizeDetails;