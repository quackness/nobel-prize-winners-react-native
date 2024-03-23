import React from'react';
import { View} from 'react-native';
import {  Text } from '@rneui/themed';
import { useEffect , useState} from 'react';

const PrizeDetails = ({ navigation, route}) => {
    const [laureates, setLaurates] = useState([]);
    console.log(route.params.category);
    console.log(route.params.year);

  

    const baseUrl = `http://api.nobelprize.org/v1/prize.json`;
    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async() => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            console.log(data.prizes)
            setLaurates(data.prizes);
        } catch {
            console.error('Error:', error);
        }
   
    }
    return (
        <View>
            {/* {laureates.map((laureate, index) => {
            return <Text key={index}>{laureate.awardYear}</Text>
})} */}
<Text>{route.params.category}</Text>
        </View>
    )
};
export default PrizeDetails;