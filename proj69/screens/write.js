import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import styles from '../styles.js';

export default class WritingScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <Input 
              editable
              multiline = 'true'
              textAlignVertical = 'top'
            />
            <TouchableOpacity
              style = {styles.button}
              onPress = {
                console.log('pressed')
              }
            >
              <Text style = {styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const Input = (props) => {
  const [value, onChangeText] = React.useState('WRITE YOUR OWN STORY!');

  return (
    <TextInput
      {...props}
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}