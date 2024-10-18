import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Discussions from './Discussions';
import Parametres from './Parametres';

const Tab = createBottomTabNavigator();

const Layout = () => {
    return (
        <Tab.Navigator
            initialRouteName="Discussions"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Discussions') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    } else if (route.name === 'Paramètres') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // Retourne l'icône Ionicons avec les propriétés appropriées
                    return <Ionicons name={iconName || ''} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Discussions"
                component={Discussions}
                options={{
                    headerShown: true,  // Active l'affichage de l'en-tête
                    headerTitle: "[v0.0.1] SAFE & SAFER",  // Définir le titre de l'en-tête
                    headerStyle: {
                        backgroundColor: '#f3f4f6',  // Couleur de fond de l'en-tête
                    },
                    headerTintColor: '#333',  // Couleur des éléments de l'en-tête (titre, boutons)
                    headerTitleStyle: {
                        fontWeight: 'bold',  // Style du titre
                    }
                }}
            />
            <Tab.Screen
                name="Paramètres"
                component={Parametres}
                options={{ headerShown: false }}  // Masque l'en-tête si tu veux un écran plein
            />
        </Tab.Navigator>
    );
};

export default Layout;
