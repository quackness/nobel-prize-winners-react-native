import React from 'react';
import { ScrollView } from 'react-native';
import CardYearsList from './CardYearsList';
import {  Text, ListItem } from '@rneui/themed';
import { useEffect , useState} from 'react';

const Laurates = ({ navigation }) => {

    const [laurates, setLaurates] = useState([]);

    const baseUrl = "https://api.nobelprize.org/2.1/laureates";

    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async() => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log("data", data.laureates);
        // console.log(data.laureates[0])
        setLaurates(data.laureates)
    }

   console.log(laurates);


    return (
        <ScrollView>
        {laurates.map((laurate, index) => {
        return (
        <ListItem key={index}>               
            <ListItem.Content>
              <ListItem.Title>{laurate.knownName.en}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )})}
        </ScrollView>
    )
};

export default Laurates;