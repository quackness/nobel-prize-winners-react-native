import React from'react';
import { View} from 'react-native';
import {  Text } from '@rneui/themed';
import { useEffect , useState} from 'react';

const PrizeDetails = ({ navigation }) => {
    const [laureates, setLaurates] = useState([]);

    const baseUrl = 'https://api.nobelprize.org/2.1/laureates?_ga=2.190918061.602221117.1710982068-1902647732.1710982068';
    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async() => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            setLaurates(data.laureates);
        } catch {
            console.error('Error:', error);
        }
   
    }
    return (
        <View>
            {laureates.map((laureate, index) => {
            return <Text key={index}>{laureate.knownName.en}</Text>
})}
        </View>
    )
};
export default PrizeDetails;