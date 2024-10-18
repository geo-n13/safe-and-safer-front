import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationsTypes';  // Vérifie que le chemin et le type sont corrects

type GameChooserNavigationProp = StackNavigationProp<RootStackParamList, 'GameChooser'>;

const GameChooser: React.FC = () => {
    const navigation = useNavigation<GameChooserNavigationProp>();

    const handleStartGame = () => {
        // Naviguer vers Discussions ou démarrer un jeu
        navigation.navigate('Main');  // Ou vers la page de ton choix
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choisissez votre action</Text>
            <Button title="Commencer une nouvelle partie" onPress={handleStartGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default GameChooser;
