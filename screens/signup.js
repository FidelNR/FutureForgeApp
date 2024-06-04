import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';
import ip from '../Ip'

const Signup = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmcontrasena, setConfirmcontrasena] = useState('');

  const handleHome = () => {
    if (usuario !== '' && contrasena !== '' && nombre !== '' && confirmcontrasena !== '') {
      if (contrasena === confirmcontrasena) {
        const data = {
          usuario,
          nombre,
          contrasena,
        };

        fetch(`http://${ip}:4000/api/worker`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Error al registrar');
          })
          .then(data => {
            console.log('Server response:', data); // Imprimir la respuesta del servidor
            Alert.alert("Registro exitoso");
            navigation.navigate('Home');
          })
          .catch(error => {
            console.error('Error al registrar:', error);
            Alert.alert('Error al registrar:', error.message || "Inténtelo de nuevo");
          });
      } else {
        Alert.alert("Las contraseñas no coinciden");
      }
    } else {
      Alert.alert("Por favor, complete todos los campos");
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.titulo}>Registrate</Text>
          </View>

          <Text style={styles.texto}>Usuario</Text>
          <TextInput
            style={styles.caja}
            placeholder="pepito123"
            onChangeText={u => setUsuario(u)}
            value={usuario}
          />

          <Text style={styles.texto}>Nombre</Text>
          <TextInput
            style={styles.caja}
            placeholder="Ramon Vargas"
            onChangeText={p => setNombre(p)}
            value={nombre}
          />

          <Text style={styles.texto}>Contraseña</Text>
          <TextInput
            style={styles.caja}
            placeholder="54321"
            secureTextEntry={true}
            onChangeText={p => setContrasena(p)}
            value={contrasena}
          />

          <Text style={styles.texto}>Confirmar Contraseña</Text>
          <TextInput
            style={styles.caja}
            placeholder="54321"
            secureTextEntry={true}
            onChangeText={p => setConfirmcontrasena(p)}
            value={confirmcontrasena}
          />

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
    backgroundColor: '#E6F5E6',
  },
});

export default Signup;
