import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FormInput from "@/components/form/FormInput";
import CustomerButton from "@/components/UI/CustomerButton";
import {router} from "expo-router";
import FieldPassword from "@/components/form/FieldPassword";

interface FormErrors {
    email?: string;
    password?: string;
}

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const handleRegister = () => {
        let newErrors: FormErrors = {};

        if (!email) {
            newErrors.email = 'Email est requis';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email invalide';
        }
        if (!password) {
            newErrors.password = 'Mot de passe est requis';
        } else if (password.length < 6) {
            newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log('Form submitted', { email, password });
        router.push('/OnboardingContent' as any);
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
                placeholder="Votre Password"
                errors={errors.password}
            />

            <CustomerButton style={styles.button} title="S'inscrire"
                            onPress={handleRegister}></CustomerButton>
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
    button:{
        backgroundColor: '#AE3C3C',
        justifyContent: "center",
        margin: "auto"
    },
    logo:{
        width: 120,
        height: 120,
        margin: "auto"
    }

});

export default LoginForm;