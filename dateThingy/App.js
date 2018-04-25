import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const date = new Date();
export default class App extends React.Component {
  
  
  render() {
    
    return (
      <View style={styles.container}>
      
        <Text  style={styles.red}> {date.toString} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red'
  }
});
