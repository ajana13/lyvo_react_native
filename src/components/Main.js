import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Is this working?</Text> */}
                <View style={styles.header}>
                    <Text>BioHack 2020</Text>
                </View>
                <View style={styles.body}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: 'yellow',
        width: '100%',
        height: '20%',
    },
    body: {
        backgroundColor: 'blue',
        width: '100%',
        height: '60%',
    },
    footer: {
        backgroundColor: 'brown',
        width: '100%',
        height: '20%',
    },
});
