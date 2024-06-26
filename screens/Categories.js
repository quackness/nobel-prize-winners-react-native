import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem} from '@rneui/themed';

const Categories = ({ navigation }) => {

 
const categories = ['Chemistry', 'Literature', 'Peace', 'Physics', 'Physiology or Medicine', 'Economics'];
    return (
        <ScrollView>
        {categories.map((category, index) => {
        return (
        <ListItem key={index} onPress={() => {
            navigation.navigate('Card Years List', {
                category: category
              });
          }}>               
            <ListItem.Content>
              <ListItem.Title>{category}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )})}
        </ScrollView>
    )
};

export default Categories;