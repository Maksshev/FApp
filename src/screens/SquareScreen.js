import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import ColorAdjuster from '../components/ColorAdjuster';

const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_GREEN';
const CHANGE_BLUE = 'CHANGE_BLUE';
const CHANGE_RATE = 'CHANGE_RATE';


const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_RED:
            return {...state, red: action.payload};
        case CHANGE_GREEN:
            return {...state, green: action.payload};
        case CHANGE_BLUE:
            return {...state, blue: action.payload};
        case CHANGE_RATE:
            return {...state, rateOfChange: action.payload};
        default:
            return state
    }
};

const SquareScreen = (props) => {

    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
        rateOfChange: 10
    });

    const {red, green, blue, rateOfChange} = state;

    const changeStateValue = (type, payload) => {
        if (payload > 256) payload = 256;
        if (payload < 0) payload = 0;
        dispatch({type, payload});
    };

    const increaseRed = () => changeStateValue(CHANGE_RED, red + rateOfChange);
    const decreaseRed = () => changeStateValue(CHANGE_RED, red - rateOfChange);
    const increaseGreen = () => changeStateValue(CHANGE_GREEN, green + rateOfChange);
    const decreaseGreen = () => changeStateValue(CHANGE_GREEN, green - rateOfChange);
    const increaseBlue = () => changeStateValue(CHANGE_BLUE, blue + rateOfChange);
    const decreaseBlue = () => changeStateValue(CHANGE_BLUE, blue - rateOfChange);
    const handleRateOfChange = value => dispatch({type: CHANGE_RATE, payload: value});

    const generateColorString = () => `Red: ${red}\nGreen: ${green}\nBlue: ${blue}`;

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
