import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text } from '@rneui/themed';


const CardYearsList = ({ navigation, route}) => {


const currentYear = new Date().getFullYear();
const startYear = 1901;
const amountOfYears = currentYear - startYear;
let loop= [];
console.log(route.params.category);


for (let i = currentYear; i >= startYear; i--) {
    loop.push(
        <Card key={i}>
        <Card.Title  subtitle="Card Subtitle"
        onPress={()=> {
            navigation.navigate('PrizeDetails', {
                year: i,
                category: route.params.category
              });
        }}
        >{i}</Card.Title>
        {i ===  new Date().getFullYear() && <Text style={styles.checkBack}>Laurates not announced yet</Text>}
        <Card.Divider />
</Card>

    )
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
        textAlign: 'center',
    }
});

export default CardYearsList;