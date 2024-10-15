import { Tabs } from 'expo-router';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 60,
                },
            }}
        >
            <Tabs.Screen
                name="register"
                options={{
                    title: 'Inscription',
                    tabBarIcon: () => null,
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('@/assets/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: 'Connexion',
                    tabBarLabel: 'Connexion',
                    tabBarIcon: () => null,
                }}
            />

        </Tabs>
    );
}
const styles = StyleSheet.create({
    logo:{
        width: 120,
        height: 120,
    }

});