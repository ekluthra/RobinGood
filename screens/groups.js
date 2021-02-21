import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';

export default function Groups({ navigation }) {
    
    const [groups, setGroups] = useState([
        {name: 'HighRisk Investors', budget: '$6695', key: '1'},
        {name: 'LowRisk Investors', budget: '$3420', key: '2'},
        {name: 'Calculated Investors', budget: '$34900', key: '3'},
    ]);
    
    return (
    <View style={styles.container}>

        <FlatList
            data={groups}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Specific_Group', item)}>
                    <Card>
                        <Text>{ item.name }</Text>
                    </Card>
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
