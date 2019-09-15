import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

const ListScreen = () => {
    const data = [
        {name: 'Friend 1'},
        {name: 'Friend 2'},
        {name: 'Friend 3'},
        {name: 'Friend 4'},
        {name: 'Friend 5'},
        {name: 'Friend 6'},
        {name: 'Friend 7'},
        {name: 'Friend 8'},
    ];

    return (
        <FlatList
            data={data}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
            keyExtractor={(friend) => {
                return friend.name.split(' ')[1]
            }}
        />
    )
};

export default ListScreen;
