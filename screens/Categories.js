import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem} from '@rneui/themed';

const Categories = () => {
    return (
        <ScrollView>
               <ListItem>
            <ListItem.Content>
              <ListItem.Title>Test</ListItem.Title>
              <ListItem.Subtitle>test 1</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
    )

}

export default Categories;