import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';

const Login = () => {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };

    const handleHome = () => {
        if (usuario !== "" && contrasena !== "") {
            fetch('http://192.168.100.16:4000/api/recuworker', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al recuperar usuarios');
                    }
                    return response.json();
                })
                .then(data => {
                    const user = data.find(user => user.usuario === usuario && user.contrasena === contrasena);
                    if (user) {
                        navigation.navigate('Home');
                    } else {
                        Alert.alert("Error", "Usuario no existe o contraseña incorrecta");
                        // Aquí podrías mostrar un mensaje de error al usuario
                    }
                })
                .catch(error => {
                    console.error('Error al iniciar sesión:', error.message);
                    // Aquí podrías mostrar un mensaje de error al usuario
                });
        }
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Iniciar sesión</Text>
                    </View>

                    <Text style={styles.texto}>Nombre de usuario</Text>
                    <TextInput style={styles.caja} placeholder="pepito123" onChangeText={u => setUsuario(u)} />

                    <Text style={styles.texto}>Contraseña</Text>
                    <TextInput style={styles.caja} placeholder="54321" secureTextEntry={true} onChangeText={p => setContrasena(p)} />

                    <TouchableOpacity onPress={() => handleSignUp()}>
                        <Text style={styles.link}>¿No te has registrado? <Text style={styles.linkText}>Presiona aquí</Text></Text>
                    </TouchableOpacity>

                    <Button title="Ingresar" color="#006400" onPress={handleHome} />
                </ScrollView>
            </SafeAreaView>

            <SafeAreaView style={styles.footerbody}>
                <Footer />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E6F5E6',
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#006400',
    },
    texto: {
        fontSize: 19,
        marginBottom: 8,
        color: '#333333',
    },
    caja: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },

    footerbody: {
        backgroundColor: '#E6F5E6'
    },

    link: {
        fontSize: 16,
        color: '#006400',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    linkText: {
        textDecorationLine: 'underline',
    },
});

export default Login;
