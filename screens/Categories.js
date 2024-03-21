import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem} from '@rneui/themed';

const Categories = ({ navigation }) => {


    return (
        <ScrollView>
               <ListItem>
            <ListItem.Content>
              <ListItem.Title>Chemistry</ListItem.Title>
              <ListItem.Title>Literature</ListItem.Title>
              <ListItem.Title>Peace</ListItem.Title>
              <ListItem.Title>Physics</ListItem.Title>
              <ListItem.Title>Physiology or Medicine</ListItem.Title>
              <ListItem.Title>Economics</ListItem.Title>
              {/* <ListItem.Subtitle>test 1</ListItem.Subtitle> */}
            </ListItem.Content>
          </ListItem>
        </ScrollView>
    )

}

export default Categories;