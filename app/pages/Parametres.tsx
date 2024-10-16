import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Parametres = () => {
    // États individuels pour chaque switch
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);
    const [isAutoUpdateEnabled, setIsAutoUpdateEnabled] = React.useState(false);

    // Fonctions toggle pour chaque switch
    const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
    const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);
    const toggleAutoUpdate = () => setIsAutoUpdateEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres</Text>

            <View style={styles.setting}>
                <Text style={styles.settingText}>Notifications</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleNotifications}
                    value={isNotificationsEnabled}
                />
            </View>

            <View style={styles.setting}>
                <Text style={styles.settingText}>Mode sombre</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleDarkMode}
                    value={isDarkModeEnabled}
                />
            </View>

            <View style={styles.setting}>
                <Text style={styles.settingText}>Mises à jour automatiques</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isAutoUpdateEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleAutoUpdate}
                    value={isAutoUpdateEnabled}
                />
            </View>

            {/* Section de Copyright */}
            <View style={styles.copyrightContainer}>
                <Text style={styles.copyrightText}>© 2024 Safe & Safer. Tous droits réservés.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    settingText: {
        fontSize: 18,
    },
    copyrightContainer: {
        marginTop: 50,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eaeaea',
        paddingTop: 20,
    },
    copyrightText: {
        fontSize: 14,
        color: '#888',
    },
});

export default Parametres;
