import {Text, View, ScrollView, Card, ListItem} from '@rneui/themed';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet} from 'react-native';

const SingleLaurate = ({ navigation, route }) => {
    console.log("test", route.params.id);

    const currentUrl = `https://api.nobelprize.org/2.1/laureate/${route.params.id}`;

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
        <ListItem.Title>{`Category: ${item.category.en} in ${item.awardYear}`}</ListItem.Title>
        <ListItem.Subtitle style={styles.spacing}>{`Motivation: ${item.motivation.en}`}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ));
}

    function sortPersonFromOrganization() {
      if (laurate.hasOwnProperty('knownName')) {
        return (
        <>
        <Card.Title style={styles.centeredText}>{laurate.knownName.en}</Card.Title>
        <Card.Divider />
        <Text style={styles.centeredText}>Birth date: {laurate?.birth?.date || 'Unkown'}</Text>
        <Text style={[styles.centeredText, styles.spacing]}>Location: {laurate?.birth?.place?.city ? laurate?.birth?.place?.city?.en + ", " + laurate?.birth?.place?.country?.en : 'Unkown'}</Text>
        <Card.Divider />
        <Card.Title>Nobel Award(s)</Card.Title>
        {award.length > 0 ? loopAwards() : <Text>No awards available</Text>}
        </>
        )
      } else if (laurate.hasOwnProperty('orgName')) {
        console.log('The orgname key exists in the the object.');
        return (
          <>
        <Card.Title style={styles.centeredText}>{laurate.orgName.en}</Card.Title>
        <Card.Divider />
        <Text style={styles.centeredText}>Funded: {laurate?.founded?.date || 'Unkown'}</Text>
        <Text style={[styles.centeredText, styles.spacing]}>Location: {laurate?.founded?.place ? laurate?.founded?.place.city?.en + ", " + laurate?.founded?.place?.country?.en : 'Unkown'}</Text>
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

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
  },
  spacing: {
    marginTop: 15,
    marginBottom: 15, // Adjust the value as needed
  },
});




export default SingleLaurate;



