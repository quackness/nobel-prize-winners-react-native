import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator} from 'react-native';
import { Text, ListItem } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; 
import SingleLaurate from './SingleLaurate';

const Laurates = ({ navigation }) => {
    const [laurates, setLaurates] = useState([]);
    const [isLoading, setLoading] = useState(false);
    //offset in the docs has minmum 1 so hve to use it 
    const [page, setPage] = useState(1);
    const perPage = 50;


    const fetchLaurates = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.nobelprize.org/2.1/laureates?offset=50&limit=25`
            );
            const data = await response.json();
            //alt using prev: setLaurates((prevLaurates) => [...prevLaurates, ...data.laureates]);
            setLaurates([...laurates, ...data.laureates]);
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching laureates:', error);
        }
    };

    useEffect(() => {
        fetchLaurates();
    }, []);
console.log(laurates);

    const renderFooter = () => {
        return <View style={{ padding: 10 }}>{isLoading && <ActivityIndicator size="large" />}</View>;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={laurates}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => {
                    return (
                        <ListItem onPress={()=> {
                            navigation.navigate('Single Laurate', {
                                id: item.id})
                        }}>
                        <ListItem.Content>
                            <ListItem.Title>{item.knownName?.en || 'Unknown'}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    )
                }}
                ListFooterComponent={renderFooter}
                onEndReached={fetchLaurates}
                onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default Laurates;
