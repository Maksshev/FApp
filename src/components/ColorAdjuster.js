import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorAdjuster = ({color, increaseColor, decreaseColor}) => {
    return (
        <View>
            <Text>
                {color}
            </Text>
            <Button
                title={`Increase ${color}`}
                onPress={increaseColor}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={decreaseColor}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
