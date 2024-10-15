import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FieldPasswordProps {
    label: string;
    value: string;
    onChange: (text: string) => void;
    errors?: string | null;
    errorPrefix?: string;
    placeholder?: string;
    placeholderTextColor?: string;
}

const FieldPassword: React.FC<FieldPasswordProps> = ({
                                                         label,
                                                         value,
                                                         onChange,
                                                         errors,
                                                         errorPrefix = '',
                                                         placeholder = '',
                                                         placeholderTextColor = '#888',
                                                         ...rest
                                                     }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const errorMessage = errors ? `${errorPrefix} ${errors}` : undefined;

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, errors ? styles.inputError : null]}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!isPasswordVisible}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    {...rest}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
};

// const validatePassword = (password: string) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
//
//     if (!passwordRegex.test(password)) {
//         return 'Le mot de passe doit contenir au moins 12 caractères, avec au moins une majuscule, une minuscule, un chiffre et un caractère spécial.';
//     }
//
//     return null;
// };

// const PasswordForm = () => {
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState<string | null>(null);
//
//     const handlePasswordChange = (newPassword: string) => {
//         setPassword(newPassword);
//         const error = validatePassword(newPassword);
//         setPasswordError(error);
//     };
//
//     return (
//         <View style={styles.container}>
//             <FieldPassword
//                 label="Mot de passe"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 errors={passwordError}
//                 errorPrefix=""
//                 placeholder="Entrez votre mot de passe"
//             />
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#AE3C3C',
    },
    input: {
        borderWidth: 1,
        borderColor: '#AE3C3C',
        padding: 10,
        borderRadius: 20,
        fontSize: 16,
        backgroundColor: '#AE3C3C',
    },
    inputFocused: {
        borderColor: 'white'
    },
    inputError: {
        borderColor: 'red',
    },


    eyeIcon: {
        padding: 10,
    },
    errorText: {
        marginTop: 5,
        color: 'red',
        fontSize: 14,
    },
});

export default FieldPassword;