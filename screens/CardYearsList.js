import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon, Avatar, Text } from '@rneui/themed';

const CardYearsList = ({ navigation }) => {

const currentYear = new Date().getFullYear();
const startYear = 1901;
const amountOfYears = currentYear - startYear;
let loop= [];
for (let i = currentYear; i >= startYear; i--) {
    loop.push(
        <Card key={i}>
        <Card.Title  subtitle="Card Subtitle">{i}</Card.Title>
        {i ===  new Date().getFullYear() && <Text style={styles.checkBack}>Laurates not announced yet</Text>}
        <Card.Divider />
</Card>

    )
    console.log(loop)
}

    return (
        <ScrollView>
        <View>
         {loop}
        </View>
      </ScrollView>
    )
};

const styles = StyleSheet.create({
    checkBack: {
        color: 'blue',
        textAlign: 'center'
    }
});

export default CardYearsList;