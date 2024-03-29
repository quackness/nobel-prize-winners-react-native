// import React from 'react';
// import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native';
// import CardYearsList from './CardYearsList';
// import {  Text, ListItem } from '@rneui/themed';
// import { useEffect , useState} from 'react';
// import { StatusBar } from 'expo-status-bar';

// const Laurates = ({ navigation }) => {

//     const [laurates, setLaurates] = useState([]);
//     const [isLoading, setLoading] = useState(false);
//     const [page, setPage] = useState(1); // Current page
//     const perPage = 25; // Number of items per page


//     // const baseUrl = "https://api.nobelprize.org/2.1/laureates";
//     // const baseUrl = `https://api.nobelprize.org/2.1/laureates?offset=${page}&limit=${perPage}`;
//     const baseUrl = `https://api.nobelprize.org/2.1/laureates?offset=${(page - 1) * perPage}&limit=${perPage}`;



//     const fetchLaurates = async() => {
//         setLoading(true)
//         const response = await fetch(baseUrl);
//         const data = await response.json();
//         console.log("data", data.laureates);
//         // console.log(data.laureates[0])
//         // setLaurates(data.laureates);
//         setLaurates((prevLaurates) => [...prevLaurates, ...data.laureates]);
//         // setLaurates([...laurates, ...data.laureates]);

//         setPage(page + 1);
//         setLoading(false);
//     }

//     useEffect(() => {
//         fetchLaurates();
//     }, []);

//    console.log(laurates);

//    const renderFooter = () => {
//     return (
//       <View style={{ padding: 10 }}>
//       </View>
//     );
//   };


//     return (
//         <SafeAreaView style={StyleSheet.cointainer}>
//         <FlatList 
//         data={laurates}
//         keyExtractor={(item, index) => item.id + index}
//         renderItem={({item}) => {
//             return(
//                 <ListItem>
//                 <ListItem.Content>
//                 <ListItem.Title>{item?.knownName?.en}</ListItem.Title>
//                 </ListItem.Content>
//             </ListItem>
//             )
//         }}
//        ListFooterComponent={renderFooter}
//         onEndReached={fetchLaurates}
//         onEndReachedThreshold={0.5}
//         />
//             {isLoading && <ActivityIndicator size="large" marginVertical={8}/>}
//         </SafeAreaView>

//     )
// };

// const styles  = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0 
//     }
//   });

// export default Laurates;


import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native';
import { Text, ListItem } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const Laurates = ({ navigation }) => {
    const [laurates, setLaurates] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 25;

    useEffect(() => {
        fetchLaurates();
    }, []);

    const fetchLaurates = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.nobelprize.org/2.1/laureates?offset=${(page - 1) * perPage}&limit=${perPage}`
            );
            const data = await response.json();
            setLaurates((prevLaurates) => [...prevLaurates, ...data.laureates]);
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching laureates:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderFooter = () => {
        return <View style={{ padding: 10 }}>{isLoading && <ActivityIndicator size="large" />}</View>;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={laurates}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => (
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.knownName?.en || 'Unknown'}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                )}
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
