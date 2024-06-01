import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../image/logo.png';
import vocacion from '../image/vocacion.png';
import conocimiento from '../image/conocimiento.png';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';


const Index = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LoginStack'); // Asegúrate de que el nombre coincide con el nombre de la pantalla en tu navegación
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
            </View>

            <Text style={styles.subtitle}>La mejor opción para tu futuro profesional</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Prueba de orientación vocacional</Text>
                <Text style={styles.sectionText}>
                Responde la mejor prueba vocacional que existe hasta el momento y descubre los grandes resultados que pueden cambiar el rumbo de tu vida profesional.
                </Text>
                <Image style={styles.image} source={vocacion} />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Test de tipos de conocimientos</Text>
                <Text style={styles.sectionText}>
                Conoce la forma en la que aprendes y poténciala para solucionar cualquier obstáculo con el test mejor evaluado por el público.
                </Text>
                <Image style={styles.image} source={conocimiento} />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>
            <Footer/>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E6F5E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 24,
    color: '#006400',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006400',
  },
  sectionText: {
    fontSize: 14,
    color: '#333',
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#006400',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Index;