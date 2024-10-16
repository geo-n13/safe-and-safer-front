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
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderWidth: 0,
        outlineStyle: 'none',
        outline: 'none',
        underlineColorAndroid: 'transparent',
        backgroundColor: 'transparent',
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
