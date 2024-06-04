/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsLearning = ({ answers }) => {
    let activo = [3,5,7,9,13,20,26,27,35,37,41,43,46,48,51,61,67,74,75,77];
    let reflexivo = [10,16,18,19,28,31,32,34,36,39,42,44,49,55,58,63,65,69,70,79];
    let teorico = [2,4,6,11,15,17,21,23,25,29,33,45,50,54,60,64,66,71,78,80];
    let pragmatico = [1,8,12,14,22,24,30,38,40,47,52,53,56,57,59,62,68,72,73,76];
    let a = 0;
    let r = 0;
    let t = 0;
    let p = 0;

    answers.forEach(answer => {
        // Verificar si la respuesta no es null antes de acceder a la propiedad questionId
        if (answer && answer.answer === 'Sí') {
            if (activo.includes(answer.questionId)) {
                a++;
            } else if (reflexivo.includes(answer.questionId)) {
                r++;
            } else if (teorico.includes(answer.questionId)) {
                t++;
            } else if (pragmatico.includes(answer.questionId)) {
                p++;
            }
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultados del Cuestionario</Text>

            <View style={styles.answer}>
                <Text>Activo: {a}</Text>
            </View>
            <View style={styles.answer}>
                <Text>Reflexivo: {r}</Text>
            </View>
            <View style={styles.answer}>
                <Text>Teórico: {t}</Text>
            </View>
            <View style={styles.answer}>
                <Text>Pragmático: {p}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#E6F5E6',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006400',
    },
    answer: {
        marginVertical: 8,
    },
});

export default ResultsLearning;*/

import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ResultsLearning = ({ answers }) => {
    let activo = [3,5,7,9,13,20,26,27,35,37,41,43,46,48,51,61,67,74,75,77];
    let reflexivo = [10,16,18,19,28,31,32,34,36,39,42,44,49,55,58,63,65,69,70,79];
    let teorico = [2,4,6,11,15,17,21,23,25,29,33,45,50,54,60,64,66,71,78,80];
    let pragmatico = [1,8,12,14,22,24,30,38,40,47,52,53,56,57,59,62,68,72,73,76];
    let a = 0;
    let r = 0;
    let t = 0;
    let p = 0;

    answers.forEach(answer => {
        if (answer && answer.answer === 'Sí') {
            if (activo.includes(answer.questionId)) {
                a++;
            } else if (reflexivo.includes(answer.questionId)) {
                r++;
            } else if (teorico.includes(answer.questionId)) {
                t++;
            } else if (pragmatico.includes(answer.questionId)) {
                p++;
            }
        }
    });

    // Determinación del tipo con la cantidad más alta
    let highestType = 'Activo';
    let highestCount = a;
    if (r > highestCount) {
        highestType = 'Reflexivo';
        highestCount = r;
    }
    if (t > highestCount) {
        highestType = 'Teorico';
        highestCount = t;
    }
    if (p > highestCount) {
        highestType = 'Pragmatico';
        highestCount = p;
    }

    // Información sobre el tipo con la cantidad más alta
    const typeInfo = {
        Activo: {
            description: 'Las personas con un estilo de aprendizaje activo prefieren aprender a través de la acción y la práctica. Son experimentadores activos y disfrutan de actividades prácticas, como juegos de rol, debates y experimentos.',
            characteristics: ['Aprenden mejor haciendo', 'Les gusta la interacción y la participación activa', 'Suelen tener buena memoria muscular'],
            activities: ['Participar en debates y discusiones', 'Realizar experimentos y proyectos prácticos', 'Practicar habilidades en situaciones reales'],
        },
        Reflexivo: {
            description: 'Las personas con un estilo de aprendizaje reflexivo prefieren observar y reflexionar sobre la información antes de actuar. Les gusta analizar situaciones desde diferentes perspectivas y tienden a ser observadores cuidadosos.',
            characteristics: ['Reflexionan sobre sus experiencias', 'Prefieren la observación a la acción directa', 'Son buenos para analizar información y buscar patrones'],
            activities: ['Llevar a cabo investigaciones y estudios en profundidad', 'Meditar y reflexionar sobre experiencias pasadas', 'Tomar notas detalladas y organizar la información'],
        },
        Teorico: {
            description: 'Las personas con un estilo de aprendizaje teórico prefieren aprender a través de modelos y conceptos abstractos. Les gusta comprender las teorías subyacentes y buscan comprender los principios fundamentales detrás de los conceptos.',
            characteristics: ['Les gusta comprender los principios subyacentes', 'Prefieren la lógica y la razón', 'Son buenos para organizar información en estructuras lógicas'],
            activities: ['Leer y estudiar textos teóricos', 'Analizar y discutir ideas abstractas', 'Crear modelos y diagramas para representar conceptos'],
        },
        Pragmatico: {
            description: 'Las personas con un estilo de aprendizaje pragmático prefieren aprender a través de la práctica y la aplicación directa. Les gusta ver la relevancia práctica de lo que están aprendiendo y se centran en obtener resultados concretos.',
            characteristics: ['Se centran en la aplicabilidad práctica', 'Prefieren aprender habilidades prácticas', 'Les gusta resolver problemas del mundo real'],
            activities: ['Participar en proyectos prácticos y aplicados', 'Realizar actividades de resolución de problemas', 'Aplicar conocimientos en situaciones reales'],
        },
    };

    // Información sobre el tipo con la cantidad más alta
    const highestTypeInfo = typeInfo[highestType];

    const data = {
        labels: ["Activo", "Reflexivo", "Teorico", "Pragmatico"],
        datasets: [
          {
            data: [a, r, t, p]
          }
        ]
      };

      const screenWidth = Dimensions.get('window').width;
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Resultados del Cuestionario</Text>
        <View style={styles.grafica}>
      <BarChart
        style={styles.bar}
        data={data}
        width={screenWidth - 40}
        height={220}
        yAxisLabel=""
        chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#E6F5E6',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 100, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}
        verticalLabelRotation={0}
      />
</View>
            
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Tipo de aprendizaje predominante: {highestType}</Text>
                <Text style={styles.resultDescription}>{highestTypeInfo.description}</Text>
                <Text style={styles.resultSubtitle}>Características:</Text>
                <View style={styles.resultList}>
                    {highestTypeInfo.characteristics.map((characteristic, index) => (
                        <Text key={index} style={styles.resultListItem}>- {characteristic}</Text>
                    ))}
                </View>
                <Text style={styles.resultSubtitle}>Actividades recomendadas:</Text>
                <View style={styles.resultList}>
                    {highestTypeInfo.activities.map((activity, index) => (
                        <Text key={index} style={styles.resultListItem}>- {activity}</Text>
                    ))}
                </View>
            </View>
        </View>
        </>
    );
    
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#E6F5E6',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#006400',
        },
        resultContainer: {
            backgroundColor: '#FFFFFF',
            padding: 20,
            borderRadius: 10,
            elevation: 3,
        },
        resultText: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        resultDescription: {
            marginBottom: 10,
        },
        resultSubtitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 5,
        },
        resultList: {
            marginLeft: 20,
        },
        resultListItem: {
            fontSize: 14,
            marginBottom: 5,
        },
        bar: {
            marginVertical: 16,
            borderRadius: 16,
        },
        grafica: {
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        },
    });

export default ResultsLearning;


