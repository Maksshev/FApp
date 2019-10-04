import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    const navigate = navigation.navigate;
    return (
        <View>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to the list"
                onPress={() => void navigate('List')}
            />
            <Button
                title="Go to components"
                onPress={() => void navigate('Components')}
            />
          <Button
              title="Go to images"
              onPress={() => void navigate('Images')}
          />
          <Button
              title="Go to counter"
              onPress={() => void navigate('Counter')}
          />
          <Button
              title="Go to colors"
              onPress={() => void navigate('Color')}
          />
          <Button
              title="Go to square screen"
              onPress={() => void navigate('Square')}
          />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
