import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import { router } from 'expo-router';
import {ThemedView} from "@/components/ThemedView";

const defaultCategories = [
    { id: '1', name: 'Harcèlement' },
    { id: '2', name: 'Arnaque' },
    { id: '3', name: 'Discrimination' },
];

const Onboarding = () => {
    const handleCategoryPress = (id: string) => {
        router.push({ pathname: '/feed', params: { categoryId: id } });
    };

    const renderItem = ({ item }: { item: { id: string; name: string } }) => (
        <Pressable
            style={styles.item}
            onPress={() => handleCategoryPress(item.id)}
        >
            <Text style={styles.itemText}>{item.name}</Text>
        </Pressable>
    );

    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>Choisissez vos catégories préférées</Text>
            <FlatList
                data={defaultCategories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    backgroundColor: '#D9D9D9',
        borderRadius: 20,
        margin: "auto",


    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        display:"flex",
        justifyContent: "center"
    },
    item: {
        backgroundColor: '#AE3C3C',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 12,
        marginHorizontal: 20,
        borderRadius: 35,
    },
    itemText: {
        fontSize: 14,
        color: "white"
    },
});

export default Onboarding;