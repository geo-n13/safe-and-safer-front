import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FormInput from "@/components/form/FormInput";
import CustomerButton from "@/components/UI/CustomerButton";
import { router } from "expo-router";
import FieldPassword from "@/components/form/FieldPassword";
import {validatePassword} from "@/components/Helpers/Helpers";

interface FormErrors {
    email?: string;
    password?: string;
}

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [passwordError, setPasswordError] = useState<string | null>(null);


    const handleRegister = () => {
        let newErrors: FormErrors = {};
        if (!email) {
            newErrors.email = 'Email est requis';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email invalide';
        }

        const passwordValidation = validatePassword(password);
        if (!password) {
            newErrors.password = 'Mot de passe est requis';
        } else if (!passwordValidation.isValid) {
            newErrors.password = passwordValidation.error;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setPasswordError(newErrors.password || null);
            return;
        }

        router.push('/onboarding');
    };

    return (
        <View style={styles.form}>
            <Image
                source={require('@/assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <FormInput
                label="Email"
                value={email}
                onChange={setEmail}
                placeholder="Votre email"
                error={errors.email}
            />
            <FieldPassword
                label="Mot de passe"
                value={password}
                onChange={setPassword}
                placeholder="Votre mot de passe"
                errors={passwordError}
            />
            <CustomerButton
                style={styles.button}
                title="S'inscrire"
                onPress={handleRegister}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        display: "flex",
        margin: "auto"
    },
    button: {
        backgroundColor: '#AE3C3C',
        justifyContent: "center",
        margin: "auto"
    },
    logo: {
        width: 120,
        height: 120,
        margin: "auto"
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});

export default LoginForm;
