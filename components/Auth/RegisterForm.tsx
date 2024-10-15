import React, { useState } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import FormInput from "@/components/form/FormInput";
import CustomerButton from "@/components/UI/CustomerButton";

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

    const handleRegister = () => {
        let newErrors: FormErrors = {};

        if (!firstname) {
            newErrors.firstname = 'Firstname est requis';
        }
        if (!lastname) {
            newErrors.lastname = 'Lastname est requis';
        }
        if (!email) {
            newErrors.email = 'Email est requis';
        }
        if (!password) {
            newErrors.password = 'Mot de passe est requis';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Logique de soumission du formulaire
        console.log('Form submitted', {firstname, lastname, email, password });
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
            <FormInput
                label="Mot de passe"
                value={password}
                onChange={setPassword}
                placeholder="Votre Password"
                error={errors.password}
                secureTextEntry={true}
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
