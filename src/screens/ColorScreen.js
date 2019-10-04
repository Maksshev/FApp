import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const ColorScreen = (props) => {

    const [colors, setColors] = useState([]);

    const addColor = () => {
        setColors([...colors, randomRgb()]);
    };

    const renderColor = color => (
        <View style={{
            width: 100,
            height: 100,
            backgroundColor: color
        }}/>
    );

    return (
        <View>
            <Button onPress={addColor} title="Add a color"/>
            <FlatList
                data={colors}
                renderItem={({item}) => renderColor(item)}
                keyExtractor={item => item}
            />
        </View>
    )
};

const randomRgb = () => {
    const red = generateRandomNumber(256);
    const green = generateRandomNumber(256);
    const blue = generateRandomNumber(256);
    return `rgb(${red}, ${green}, ${blue})`;
};

const generateRandomNumber = upperThreshold => {
    return Math.floor(Math.random() * upperThreshold);
};

const styles = StyleSheet.create({});

export default ColorScreen;
