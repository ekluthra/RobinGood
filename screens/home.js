import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="RobinGood"/>
      <Formik 
        initialValues={{side:'', symbol:'', qty:'', order_type:'', limit_price:'', stop_price:'', trailing_percent:''}}
        onSubmit={(values) => {
          console.log(values);
          alert('submitted!');
        }}>
        {(props) => (
          <View>
            <Text style={styles.textstyle}>Buy or Sell (lowercase)</Text>
            <TextInput
              style={styles.input}
              value={props.values.side}
              onChangeText={props.handleChange('side')}/>
            <Text style={styles.textstyle}>Ticker Symbol (uppercase)</Text>
            <TextInput
              style={styles.input}
              value={props.values.symbol}
              onChangeText={props.handleChange('symbol')}/>
            <Text style={styles.textstyle}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={props.values.qty}
              onChangeText={props.handleChange('qty')}/>
            <Text style={styles.textstyle}>Order Type (market, limit, stop, stop_limit, or trailing_stop)</Text>
            <TextInput
              style={styles.input}
              value={props.values.order_type}
              onChangeText={props.handleChange('order_type')}/>
            <Text style={styles.textstyle}>Limit Price (if applicable)</Text>
            <TextInput
              style={styles.input}
              value={props.values.limit_price}
              onChangeText={props.handleChange('limit_price')}/>
            <Text style={styles.textstyle}>Stop Price (if applicable)</Text>
            <TextInput
              style={styles.input}
              value={props.values.stop_price}
              onChangeText={props.handleChange('stop_price')}/>
            <Text style={styles.textstyle}>Trailing Percentage (if applicable)</Text>
            <TextInput
              style={styles.input}
              value={props.values.trailing_percent}
              onChangeText={props.handleChange('trailing_percent')}/>
            <Button onPress={props.handleSubmit} title="Submit"/>
          </View>
        )}
      </Formik>
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
    fontSize: 15,
    marginLeft: 15
  },
  circle:{
    width: 500,
    height:500,
    borderRadius:250,
    backgroundColor:'#4c8cf5',
    position:'absolute',
    left:100,
    bottom:-176,
  },
  input: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5
  }
});