import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { messages } from '../data';
import { ChatContentRouteProp } from '../../types/NavigationsTypes'; // Ajustez le chemin d'importation selon votre structure
import Ionicons from 'react-native-vector-icons/Ionicons'; // Pour les icônes

const ChatContent: React.FC = () => {
    const route = useRoute<ChatContentRouteProp>();
    const { messagesId } = route.params as { messagesId: '1' | '2' | '3' };
    const currentMessages = messages[messagesId];

    const [selectedMessages, setSelectedMessages] = useState<string[]>([]);

    const handleLongPress = (messageId: string) => {
        // Si le message est déjà sélectionné, le retirer, sinon l'ajouter
        setSelectedMessages((prevSelectedMessages) =>
            prevSelectedMessages.includes(messageId)
                ? prevSelectedMessages.filter((id) => id !== messageId)  // Retire si déjà sélectionné
                : [...prevSelectedMessages, messageId]                   // Ajoute si pas encore sélectionné
        );
    };

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.container}>
                {currentMessages.map((msg) => (
                    <TouchableOpacity
                        key={msg.id}
                        onLongPress={() => handleLongPress(msg.id)}
                        style={[
                            styles.messageContainer,
                            msg.sender === 'Moi' ? styles.myMessageContainer : styles.otherMessageContainer,
                            selectedMessages.includes(msg.id) ? styles.selectedMessage : null // Applique le style orange si sélectionné
                        ]}
                    >
                        <Text style={styles.sender}>{msg.sender}:</Text>
                        <Text style={styles.message}>{msg.text}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Barre d'entrée de texte avec boutons en bas */}
            <View style={styles.inputBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="pin" size={24} color="#666" />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tapez un message..."
                    editable={false}  // Désactiver l'édition pour rendre non fonctionnel
                />
                <TouchableOpacity style={styles.checkButton}>
                    <Ionicons name="checkmark" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between', // Permet de placer la barre d'entrée en bas
        backgroundColor: '#f9f9f9',      // Fond de l'écran
    },
    container: {
        flex: 1,
        padding: 20,
    },
    messageContainer: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#007aff',
    },
    message: {
        fontSize: 16,
        color: '#333',
    },
    myMessageContainer: {
        backgroundColor: '#e1ffc7',  // Fond vert clair pour mes messages
        alignSelf: 'flex-end',
    },
    otherMessageContainer: {
        backgroundColor: '#ffffff',  // Fond blanc pour les messages des autres
        alignSelf: 'flex-start',
    },
    selectedMessage: {
        backgroundColor: 'orange',   // Fond orange pour les messages sélectionnés
    },
    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    textInput: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
    },
    iconButton: {
        paddingHorizontal: 10,
    },
    checkButton: {
        backgroundColor: 'green',    // Bouton vert pour la validation
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007aff',  // Bouton bleu pour l'envoi
        padding: 10,
        borderRadius: 50,
    },
});

export default ChatContent;
