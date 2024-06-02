/*import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, Text, View, StyleSheet, FlatList } from 'react-native';
import vocacional from '../image/vocacional.jpg';
import aprendizaje from '../image/aprendizaje.jpg';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://10.180.28.71:4000/api/users')
    .then(response => response.json())
    .then(data => {
      console.log('Datos recibidos:', data);
      setUsuarios(data);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}, []);
/////////////////////////////////
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.areaInteres}</Text>
      <Text style={styles.cell}>{item.nivelEducativo}</Text>
    </View>
  );
//////////////////////////////////////////
  const handleTestLearn = () => {
    navigation.navigate('Learningstyles'); // Asegúrate de que el nombre coincide con el nombre de la pantalla en tu navegación
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Prueba vocacional</Text>
            <Text style={styles.sectionText}>
              Realiza la mejor prueba vocacional, que ha ayudado a muchos profesionistas y estudiantes de todo tipo a encontrar sus mejores oportunidades:
            </Text>
            <Text>• Autoconocimiento</Text>
            <Text>• Aumenta tu satisfacción y rendimiento</Text>
            <Text>• Motivación y compromiso</Text>
            <Image style={styles.image} source={vocacional} />
            <Button title="Iniciar" color="#006400" />

            <Text style={styles.sectionTitle}>Prueba de estilos de aprendizaje</Text>
            <Text style={styles.sectionText}>
              Realiza la mejor prueba de estilos de aprendizaje, que ha ayudado a muchos profesionistas y estudiantes de todo tipo a encontrar su forma de aprendizaje apropiada:
            </Text>
            <Text>• Desarrollo de habilidades de aprendizaje autónomo</Text>
            <Text>• Mejora en la comunicación y la relación entre las personas</Text>
            <Text>• Autoconocimiento</Text>
            <Text>• Reducción del estrés y la ansiedad</Text>
            <Image style={styles.image} source={aprendizaje} />
            <Button title="Iniciar" color="#006400" onPress={() => handleTestLearn()}/>
          </View>


          <View style={styles.tableContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Área de Interés</Text>
        <Text style={styles.headerCell}>Nivel Educativo</Text>
      </View>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>



          <SafeAreaView style={styles.footerbody}>
            <Footer/>
          </SafeAreaView>
        </ScrollView>
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
    height: 160, // Adjust the height as needed
    width: '100%', // Take full width
    alignSelf: 'center',
    marginVertical: 16,
  },

  footerbody:{
    backgroundColor: '#E6F5E6'
},

tableContainer: {
  marginTop: 20,
},
headerRow: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#000',
  paddingBottom: 5,
  marginBottom: 5,
},
headerCell: {
  flex: 1,
  fontWeight: 'bold',
},
row: {
  flexDirection: 'row',
  paddingVertical: 5,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
cell: {
  flex: 1,
},
});

export default Home;
*/

import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, Text, View, FlatList, StyleSheet } from 'react-native';
import vocacional from '../image/vocacional.jpg';
import aprendizaje from '../image/aprendizaje.jpg';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://192.168.100.16:4000/api/users') // Reemplaza con la IP de tu máquina
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nombre}</Text>
      <Text style={styles.cardText}>Edad: {item.edad}</Text>
      <Text style={styles.cardText}>Género: {item.genero}</Text>
      <Text style={styles.cardText}>Ciudad: {item.ciudad}</Text>
      <Text style={styles.cardText}>Área de Interés: {item.areaInteres}</Text>
      <Text style={styles.cardText}>Nivel Educativo: {item.nivelEducativo}</Text>
      <Text style={styles.cardText}>Tipo de Trabajo: {item.tipoTrabajo}</Text>
    </View>
  );

  const handleTestLearn = () => {
    navigation.navigate('Learningstyles');
  };

  const handleTestVoca = () => {
    navigation.navigate('VocationalTest');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        ListHeaderComponent={
          <View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Prueba vocacional</Text>
              <Text style={styles.sectionText}>
                Realiza la mejor prueba vocacional, que ha ayudado a muchos profesionistas y estudiantes de todo tipo a encontrar sus mejores oportunidades:
              </Text>
              <Text>• Autoconocimiento</Text>
              <Text>• Aumenta tu satisfacción y rendimiento</Text>
              <Text>• Motivación y compromiso</Text>
              <Image style={styles.image} source={vocacional} />
              <Button title="Iniciar" color="#006400" onPress={handleTestVoca}/>

              <Text style={styles.sectionTitle}>Prueba de estilos de aprendizaje</Text>
              <Text style={styles.sectionText}>
                Realiza la mejor prueba de estilos de aprendizaje, que ha ayudado a muchos profesionistas y estudiantes de todo tipo a encontrar su forma de aprendizaje apropiada:
              </Text>
              <Text>• Desarrollo de habilidades de aprendizaje autónomo</Text>
              <Text>• Mejora en la comunicación y la relación entre las personas</Text>
              <Text>• Autoconocimiento</Text>
              <Text>• Reducción del estrés y la ansiedad</Text>
              <Image style={styles.image} source={aprendizaje} />
              <Button title="Iniciar" color="#006400" onPress={handleTestLearn} />
            </View>
            <View style={styles.titleComments}>
              <Text style={styles.sectionTitle}>Se parte de nuestra comunidad de personas que han logrado un cambio</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <SafeAreaView style={styles.footerbody}>
            <Footer />
          </SafeAreaView>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E6F5E6',
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
    marginBottom: 10,
  },
  image: {
    height: 160,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 16,
  },
  footerbody: {
    backgroundColor: '#E6F5E6',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
  },
  titleComments: {
    marginTop:5,
    marginBottom:13,
  },

  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
});

export default Home;
