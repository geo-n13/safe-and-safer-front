import {Image, StyleSheet, View} from 'react-native';
import CustomerButton from "@/components/UI/CustomerButton";
import React from "react";
import {router} from "expo-router";



export default function HomeScreen() {
    const handleRegister = () => {
        router.push('/login' as any);
    };

    return (
      <View style={styles.form}>
          <div>
              <Image
                  source={require('@/assets/logo.png')}
                  style={styles.logo}
                  resizeMode="contain"
              />

          </div>

          <div style={styles.CustomerButton}>
              <CustomerButton style={styles.button} title="S'inscrire" onPress={handleRegister}
                              imageSource={require('@/assets/arrow-right.png')}
              />

          </div>
      </View>
  );
}

const styles = StyleSheet.create({
    form: {
        padding: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        display: "flex",
        margin: "auto"
    },
    logo:{
        width: 120,
        height: 120,
        margin: "auto"
    },
    button:{
        backgroundColor: '#AE3C3C',
        justifyContent: "center",
        margin: "auto"
    },
    CustomerButton:{
        display:"flex",
        alignItems: "center"
    },
    buttonImage:{
        width:30,
        height: 30,
    }
});
