import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../shared/card';

export default function Specific_Group({ navigation }) {

    const [stocks, setStocks] = useState([
        {name: 'Tesla', key: '1'},
        {name: 'Apple', key: '2'},
    ]);

    return (
    <View style={styles.container}>
        <Card>
            <Text>Group Name: { navigation.getParam('name') }</Text>
            <Text>Budget: { navigation.getParam('budget') }</Text>
            { stocks.map((item) => {
                return (
                    <View style={styles.stock}>
                        <Text>{item.name}</Text>
                        <Button title="Vote Yes"/>
                        <Button title="Vote No"/>
                    </View>
                )
            })}
        </Card>
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
  stock: {
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
  }
});
