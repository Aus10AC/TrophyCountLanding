import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NumberBox extends Component {

    render() {
        <View style={styles.container} >
            <Text style={styles.numberText}>{this.props.numberValue}</Text>
            <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borerColor: 'white',
        borderRadius: 10
    },
    numberText: {
        fontSize: 30,
        color: 'white'
    },
    titleText: {
        fontSize: 30,
        color: 'white'
    }
})

export default NumberBox;
