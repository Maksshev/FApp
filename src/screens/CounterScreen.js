import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterScreen = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    };
    return (
        <View>
            <Button onPress={increaseCounter} title="Increase"/>
            <Button onPress={decreaseCounter} title="Decrease"/>
            <Text>
                Counter: {counter}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;
