import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import OnboardingContent from "@/components/Onboarding/OnboardingContent";
import {Stack} from "expo-router";
const onboarding = () => {
    return (
        <>
            <View style={styles.container}>
                <Stack.Screen  options={{ headerShown: false }} />
                <Image
                    source={require('@/assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <OnboardingContent />
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#D9D9D9',
    },
    logo: {
        width: 150,
        height: 150,
    },
});

export default onboarding;
