import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Specific_Group({ navigation }) {

    
    return (
    <View style={styles.container}>
        <Text>{ navigation.getParam('name') }</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
