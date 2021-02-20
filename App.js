import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        onPress={() => alert('Hello!')}
        style = {{backgroundColor: 'blue'}}
      >
        <Text style={{fontSize:20, color:'white'}}>
          Press mi!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2FA781',
    
  },
  textstyle: {
    color: 'black',
    fontSize: 18,
  },
});
