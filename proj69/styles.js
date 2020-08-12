import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    button: {
      marginTop:10,
      borderRadius:10,
      width:'100',
      height:'30',
      borderWidth:'4',
      borderColor:'grey',
      backgroundColor:'pink'
    },
    buttonText: {
      textAlign:'center',
      fontWeight:'bold'
    },
    input: {
      height: 200, 
      borderColor: 'gray', 
      borderWidth: 1,
      width:300, 
      marginTop:150 
    }
});

export default styles