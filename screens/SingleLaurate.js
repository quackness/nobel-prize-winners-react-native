import {Text, View, ScrollView, Card, StyleSheet} from '@rneui/themed';
import React from 'react';
import { useState, useEffect } from 'react';

const SingleLaurate = ({ navigation, route }) => {
    console.log("test", route.params.id);

    const currentUrl = `http://api.nobelprize.org/2.1/laureate/${route.params.id}`;

    const [laurate, setLaurate] = useState({});

    useEffect(() => {
      fetchLaurate();
    }, []);

    const fetchLaurate = async () => {
      const response = await fetch(currentUrl);
      const data = await response.json();
      console.log(data);
      setLaurate(data[0]);
    }

    console.log(laurate);
    console.log(typeof laurate);

    function test() {
      if (laurate.hasOwnProperty('knownName')) {
        return (
        <>
        
        <Card.Title>{laurate.knownName.en}</Card.Title>
        <Card.Divider />
        <Text>{laurate.birth.date}</Text>
        <Text>{laurate.birth.place.city.en + ", " + laurate.birth.place.country.en}</Text>
        <Card.Divider />
        <Card.Title>Nobel Award(s)</Card.Title>
        </>

        )
      } else if (laurate.hasOwnProperty('orgName')) {
        // console.log('The orgname key exists in the the object.');
        return (
        
        <Text>Organization</Text>

        )
      }

    }
    
    
    
    return (
    
      <Card>
          {test()}
      </Card>

    )
};


export default SingleLaurate;



