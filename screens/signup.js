import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';

const Signup = () => {
  const navigation = useNavigation();
  const [usuario,setUsuario] = useState('');
  const [nombre,setNombre] = useState('');
  const [contrasena,setContrasena] = useState('');
  const [confirmcontrasena,setConfirmcontrasena] = useState('');
  
  const handleHome = () => {
    if(usuario!= "" && contrasena!="" && nombre!="" && confirmcontrasena!=""){
      if(contrasena == confirmcontrasena){
        navigation.navigate('Home');
      }
      else{
       Alert.alert("Las contraseñas no coinciden");
      }
    }
  }

  return (
    <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.header}>
                <Text style={styles.titulo}>Registrate</Text>
            </View>

            <Text style={styles.texto}>Usuario</Text>
            <TextInput style={styles.caja} placeholder="pepito123" onChangeText={u => setUsuario(u)}/>

            <Text style={styles.texto}>Nombre</Text>
            <TextInput style={styles.caja} placeholder="Ramon Vargas" onChangeText={p => setNombre(p)}/>

            <Text style={styles.texto}>Contraseña</Text>
            <TextInput style={styles.caja} placeholder="54321" secureTextEntry={true} onChangeText={p => setContrasena(p)}/>

            <Text style={styles.texto}>Confirmar Contraseña</Text>
            <TextInput style={styles.caja} placeholder="54321" secureTextEntry={true} onChangeText={p => setConfirmcontrasena(p)}/>

            <Button title="Ingresar" color="#006400" onPress={handleHome}/>
          </ScrollView>
        </SafeAreaView>
            
        <SafeAreaView style={styles.footerbody}>
          <Footer/>
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

  footerbody:{
    backgroundColor: '#E6F5E6'
}
});

export default Signup;
