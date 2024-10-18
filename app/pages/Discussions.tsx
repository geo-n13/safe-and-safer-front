import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { discussions } from '../data';
import { ChatListNavigationProp } from '../../types/NavigationsTypes';  // Vérifie que le chemin et le type sont corrects

const Discussions: React.FC = () => {
    const navigation = useNavigation<ChatListNavigationProp>();

    const handlePress = (discussionId: string) => {
        // Naviguer vers ChatContent avec l'ID du message en tant que paramètre
        navigation.navigate('ChatContent', { messagesId: discussionId });
    };

    const renderItem = ({ item }: { item: { id: string; title: string } }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => handlePress(item.id)}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={discussions}  // Assurez-vous que 'discussions' est correctement importé et typé
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            {/* Ajouter le bouton vert "Terminer la partie" */}
            <TouchableOpacity style={styles.endGameButton}>
                <Text style={styles.buttonText}>Terminer la partie</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f0f4f8', // Fond légèrement bleuté pour toute la page
    },
    listItem: {
        padding: 20, // Plus d'espace pour rendre les éléments plus aérés
        marginVertical: 10, // Espacement vertical plus grand entre les éléments
        backgroundColor: '#fff',
        borderRadius: 15, // Bords encore plus arrondis pour un look plus "app mobile"
        shadowColor: '#000', // Ombre subtile pour ajouter de la profondeur
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Ombre pour Android
        flexDirection: 'row', // Pour aligner éventuellement du texte avec des icônes
        alignItems: 'center', // Centrer le contenu verticalement
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        flex: 1, // Laisser le texte prendre tout l'espace restant
    },
    endGameButton: {
        backgroundColor: '#28a745',  // Vert plus doux et plus attrayant
        padding: 15,
        borderRadius: 25, // Bords bien arrondis pour un bouton moderne
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        position: 'absolute',  // Positionner en bas de l'écran
        bottom: 30,
        left: 20,
        right: 20,
        shadowColor: '#000', // Ajouter une ombre au bouton pour le rendre plus "cliquable"
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6, // Ombre pour Android
    },
    buttonText: {
        color: '#fff',  // Texte en blanc
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default Discussions;
