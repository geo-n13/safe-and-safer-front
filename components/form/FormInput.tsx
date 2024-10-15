import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface FormInputProps {
    label: string;
    value: string;
    onChange: (text: string) => void;
    error?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
}

const FormInput: React.FC<FormInputProps> = ({
                                                 label,
                                                 value,
                                                 onChange,
                                                 error,
                                                 placeholder = '',
                                                 secureTextEntry = false,
                                                 placeholderTextColor = '#888',
                                                 ...rest
                                             }) => {
    return (<View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                {...rest}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>);
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    }, label: {
        fontSize: 16, marginBottom: 5,
    },
    input: {
        borderWidth: 0, padding: 10, borderRadius: 20, fontSize: 16, backgroundColor: '#AE3C3C',
    },
    inputFocused: {
        borderWidth: 1,
        borderColor: 'white',
    },

    inputError: {
        borderColor: 'red',
    }, errorText: {
        marginTop: 5, color: 'red', fontSize: 14,
    },
});

export default FormInput;