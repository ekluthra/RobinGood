import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Groups({ navigation }) {
    
    const [groups, setGroups] = useState([
        {name: 'HighRisk Investors', key: '1'},
        {name: 'LowRisk Investors', key: '2'},
        {name: 'Calculated Investors', key: '3'},
    ])
    
    return (
    <View style={styles.container}>

        <FlatList
            data={groups}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Specific_Group', item)}>
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
