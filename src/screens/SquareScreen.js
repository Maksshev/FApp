import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import ColorAdjuster from '../components/ColorAdjuster';

const SquareScreen = (props) => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [rateOfChange, setRateOfChange] = useState(10);

    const checkRange = (colorValue, setColor) => {
        if (colorValue > 256) return;
        if (colorValue < 0) return;
        return setColor(colorValue);
    };

    const increaseRed = () => checkRange(red + rateOfChange, setRed);
    const increaseGreen = () => checkRange(green + rateOfChange, setGreen);
    const increaseBlue = () => checkRange(blue + rateOfChange, setBlue);

    const decreaseRed = () => checkRange(red - rateOfChange, setRed);
    const decreaseGreen = () => checkRange(green - rateOfChange, setGreen);
    const decreaseBlue = () => checkRange(blue - rateOfChange, setBlue);

    const generateColorString = () => `Red: ${red}\nGreen: ${green}\nBlue: ${blue}`;

    const handleRateOfChange = value => setRateOfChange(value);

    return (
        <View>
            <NumericInput
                onChange={handleRateOfChange}
                value={rateOfChange}
                minValue={1}
                maxValue={256}
            />
            <Text>
                {generateColorString()}
            </Text>
            <ColorAdjuster
                color="red"
                increaseColor={increaseRed}
                decreaseColor={decreaseRed}
            />
            <ColorAdjuster
                color="green"
                increaseColor={increaseGreen}
                decreaseColor={decreaseGreen}
            />
            <ColorAdjuster
                color="blue"
                increaseColor={increaseBlue}
                decreaseColor={decreaseBlue}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;
