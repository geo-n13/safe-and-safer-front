import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Définir les paramètres pour chaque écran
export type RootStackParamList = {
    ChatList: undefined;
    ChatContent: { messagesId: string };
    LoginForm: undefined;  // Ajout de l'écran LoginForm
    GameChooser: undefined;  // Ajout de l'écran GameChooser
    Main: undefined;
};

// Types pour la navigation et les routes
export type ChatListNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ChatList'
>;

export type ChatContentNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ChatContent'
>;

export type ChatContentRouteProp = RouteProp<RootStackParamList, 'ChatContent'>;

// Types pour la navigation entre LoginForm et GameChooser
export type LoginFormNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LoginForm'
>;

export type GameChooserNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'GameChooser'
>;
