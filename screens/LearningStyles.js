/*import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import questions from '../data/questions.json';

const LearningStyles = () =>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
  
    const handleAnswer = (answer) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = { questionId: questions[currentQuestionIndex].id, answer };
      setSelectedAnswers(updatedAnswers);
  
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log('Cuestionario completado', updatedAnswers);
        // Aquí puedes redirigir a una pantalla de resultados o hacer algo con los resultados
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };

    return(
        <>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                        title="Sí"
                        onPress={() => handleAnswer('Sí')}
                        color={selectedAnswers[currentQuestionIndex]?.answer === 'Sí' ? 'blue' : 'gray'}
                        />
                        <Button
                        title="No"
                        onPress={() => handleAnswer('No')}
                        color={selectedAnswers[currentQuestionIndex]?.answer === 'No' ? 'blue' : 'gray'}
                        />
                    </View>

                    <View style={styles.navigationButtons}>
                        <Button title="Anterior" onPress={handlePrevious} disabled={currentQuestionIndex === 0} />
                        <Button title="Siguiente" onPress={() => handleAnswer(selectedAnswers[currentQuestionIndex]?.answer || 'No')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    question: {
      fontSize: 18,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    navigationButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default LearningStyles*/

// LearningStyles.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import questions from '../data/questions.json';
import Footer from '../components/footer';
import ResultsLearning from './ResultsLearning';

const LearningStyles = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = { questionId: questions[currentQuestionIndex].id, answer };
    setSelectedAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    console.log('Respuestas listas',selectedAnswers)
    setIsCompleted(true);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Test de Estilos de Aprendizaje</Text>
            <Text style={styles.sectionText}>
              Realiza la prueba de estilos de aprendizaje para encontrar tu forma de aprendizaje adecuada:
            </Text>
            {!isCompleted ? (
              <>
                <View style={styles.questionContainer}>
                  <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.answerButton,
                      selectedAnswers[currentQuestionIndex]?.answer === 'Sí' && styles.selectedButton
                    ]}
                    onPress={() => handleAnswer('Sí')}
                  >
                    <Text style={styles.answerText}>Sí</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.answerButton,
                      selectedAnswers[currentQuestionIndex]?.answer === 'No' && styles.selectedButton
                    ]}
                    onPress={() => handleAnswer('No')}
                  >
                    <Text style={styles.answerText}>No</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.navigationButtons}>
                  <Button title="Anterior" onPress={handlePrevious} disabled={currentQuestionIndex === 0} />
                  <Button
                    title={currentQuestionIndex < questions.length - 1 ? "Siguiente" : "Finalizar"}
                    onPress={currentQuestionIndex < questions.length - 1 ? () => handleAnswer(selectedAnswers[currentQuestionIndex]?.answer || 'No') : handleFinish}
                  />
                </View>
              </>
            ) : (
              <ResultsLearning answers={selectedAnswers} />
            )}
          </View>
          <SafeAreaView style={styles.footerbody}>
            <Footer />
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
  questionContainer: {
    minHeight: 100, // Ajusta esto según la altura máxima esperada de la pregunta
    justifyContent: 'center',
  },
  question: {
    fontSize: 16,
    color: '#333',
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  answerButton: {
    padding: 12,
    backgroundColor: '#006400',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  answerText: {
    color: '#fff',
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  footerbody: {
    backgroundColor: '#E6F5E6',
  },
});

export default LearningStyles;

