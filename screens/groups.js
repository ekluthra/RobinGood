import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function Groups({ navigation }) {
    
    const [groups, setGroups] = useState([
        {name: 'HighRisk Investors', key: '1'},
        {name: 'LowRisk Investors', key: '2'},
        {name: 'Calculated Investors', key: '3'},
    ])
    
    return (
    <View style={styles.container}>

        {/*This one line below is a temporary code to show the onPress works for buttons*/}
        <Button title='go to message board' onPress={() => navigation.navigate('Message')} />

        <FlatList
            data={groups}
            renderItem={({ item }) => (
                <TouchableOpacity OnPress={() => navigation.navigate('Message')}>
                    <Text>{ item.name }</Text>
                </TouchableOpacity>
            )}
        />
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
