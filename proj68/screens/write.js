import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';

export default class WritingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WRITE YOUR OWN STORY</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});