import React, { useState } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import FormInput from "@/components/form/FormInput";
import CustomerButton from "@/components/UI/CustomerButton";
import {validateEmail, validateFirstname, validateLastname, validatePassword} from "@/components/Helpers/Helpers";
import {router} from "expo-router";
import FieldPassword from "@/components/form/FieldPassword";

interface FormErrors {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
}

const LoginForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handleRegister = () => {
        let newErrors: FormErrors = {};


        const firstnameValidation = validateFirstname(firstname);
        if (!firstnameValidation.isValid) {
            newErrors.firstname = firstnameValidation.error;
        }

        const lastnameValidation = validateLastname(lastname);
        if (!lastnameValidation.isValid) {
            newErrors.lastname = lastnameValidation.error;
        }

        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            newErrors.email = emailValidation.error;
        }

        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            newErrors.password = passwordValidation.error;
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setPasswordError(newErrors.password || null);
            return;
        }

        console.log('Form submitted', {firstname, lastname, email, password });

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
                label="Firstname"
                value={firstname}
                onChange={setFirstname}
                placeholder="Votre Nom"
                error={errors.firstname}
            />
            <FormInput
                label="Lastname"
                value={lastname}
                onChange={setLastName}
                placeholder="Votre Prénom"
                error={errors.lastname}
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
            <CustomerButton style={styles.button} title="S'inscrire" onPress={handleRegister} />
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
