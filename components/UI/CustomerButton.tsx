import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: object;
    imageSource?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, imageSource }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.buttonText}>{title}</Text>
                {imageSource && (
                    <Image
                        source={imageSource}
                        style={styles.buttonImage}
                        resizeMode="contain"
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AE3C3C',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    buttonImage: {
        width: 20,
        height: 20,
    },
});

export default CustomButton;