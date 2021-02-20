import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './components/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}/>
      <Header title="RobinGood"/>
      <Text style={styles.textstyle}>
        This is the home page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b8cff5',
    
  },
  textstyle: {
    color: 'black',
    fontSize: 18,
  },
  circle:{
    width: 500,
    height:500,
    borderRadius:250,
    backgroundColor:'#4c8cf5',
    position:'absolute',
    left:100,
    bottom:-176,
  }
});
