import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Discussions = () => {

    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});

export default Discussions;
