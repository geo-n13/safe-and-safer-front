import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const FeedContent = () => {
    const { categoryId } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Feed</Text>
            <Text style={styles.categoryId}>Catégorie ID: {categoryId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    categoryId: {
        fontSize: 18,
    },
});

export default FeedContent;