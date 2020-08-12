import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import styles from '../styles.js';

export default class ReadingScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>READ A STORY</Text>
          </View>
        );
    }
}