import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout from '../app/pages/Layout';  // Chemin correct vers ton Layout
import ChatContent from '../app/pages/ChatContent';
import LoginForm from '../app/pages/LoginForm';  // Import de la page de connexion
import GameChooser from '../app/pages/GameChooser';  // Import de la page de choix du jeu

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (

        <Stack.Navigator initialRouteName="LoginForm">
            <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false }} />
            <Stack.Screen name="GameChooser" component={GameChooser} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={Layout} options={{ headerShown: false }} />
            <Stack.Screen name="ChatContent" component={ChatContent} options={{ title: 'Retour' }} />
        </Stack.Navigator>

    );
}

export default AppNavigator;
