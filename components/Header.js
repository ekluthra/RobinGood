import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = (props) => {
    return (
        <View style = {headerstyles.header}>
            <Text style = {headerstyles.title}>
                { props.title }
            </Text>
        </View>
    );
} 
const headerstyles = StyleSheet.create({
    header: {
        height:70,
        backgroundColor: '#121212',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'#b8cff5',
        fontSize:40,
        fontWeight:'bold',
    }
});

export default Header;