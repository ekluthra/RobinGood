import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Specific_Group({ navigation }) {

    const [stocks, setStocks] = useState([
        {name: 'Tesla', key: '1'},
        {name: 'Apple', key: '2'},
    ]);

    return (
    <View style={styles.container}>
        <Text>{ navigation.getParam('name') }</Text>
        <Text>{ navigation.getParam('budget') }</Text>
        { stocks.map((item) => {
            return (
                <View>
                    <Text>{item.name}</Text>
                    <Button title="Vote Yes"/>
                    <Button title="Vote No"/>
                </View>
            )
        })}

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
