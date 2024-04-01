import {Text, View, ScrollView, Card, StyleSheet, ListItem} from '@rneui/themed';
import React from 'react';
import { useState, useEffect } from 'react';

const SingleLaurate = ({ navigation, route }) => {
    console.log("test", route.params.id);

    const currentUrl = `http://api.nobelprize.org/2.1/laureate/${route.params.id}`;

    const [laurate, setLaurate] = useState([]);
    const [award, setAward] = useState([]);


    useEffect(() => {
      fetchLaurate();
    }, []);

    const fetchLaurate = async () => {
      const response = await fetch(currentUrl);
      const data = await response.json();
      console.log(data);
      setLaurate(data[0]);
      setAward(data[0].nobelPrizes);
    }
    console.log(laurate);
console.log("award", award)
function loopAwards() {
  return award.map(item => (
    <ListItem key={item.awardYear}>
      <ListItem.Content>
        <ListItem.Title>{`${item.category.en} in ${item.awardYear}`}</ListItem.Title>
        <ListItem.Subtitle>{`Motivation: ${item.motivation.en}`}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ));
}

    function sortPersonFromOrganization() {
      if (laurate.hasOwnProperty('knownName')) {
        return (
        <>
        <Card.Title>{laurate.knownName.en}</Card.Title>
        <Card.Divider />
        <Text>Birth date: {laurate?.birth?.date || 'Unkown'}</Text>
        <Text>Location: {laurate?.birth?.place?.city ? laurate?.birth?.place?.city?.en + ", " + laurate?.birth?.place?.country?.en : 'Unkown'}</Text>
        <Card.Divider />
        <Card.Title>Nobel Award(s)</Card.Title>
        {award.length > 0 ? loopAwards() : <Text>No awards available</Text>}
        </>
        )
      } else if (laurate.hasOwnProperty('orgName')) {
        console.log('The orgname key exists in the the object.');
        return (
          <>
        <Card.Title>{laurate.orgName.en}</Card.Title>
        <Card.Divider />
        <Text>Funded: {laurate?.founded?.date || 'Unkown'}</Text>
        {award.length > 0 ? loopAwards() : <Text>No awards available</Text>}
          </>
        )
      }
    }
    
    return (
      <Card>
          {sortPersonFromOrganization()}
      </Card>
    )
};

export default SingleLaurate;



