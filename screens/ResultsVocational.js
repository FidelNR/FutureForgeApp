import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsLearning = ({ answers }) => {
    let c = [1, 12, 20, 53, 64, 71, 78, 85, 91, 98];
    let h = [9, 25, 34, 41, 56, 67, 74, 80, 89, 95];
    let a = [3, 11, 21, 28, 36, 45, 50, 57, 81, 96];
    let s = [8, 16, 23, 33, 44, 52, 62, 70, 87, 92];
    let i = [6, 19, 27, 38, 47, 54, 60, 75, 83, 97];
    let d = [5, 14, 24, 31, 37, 48, 58, 65, 73, 84];
    let e = [17, 32, 35, 42, 49, 61, 68, 77, 88, 93];
    
    let c_apt= [2,15,46,51];
    let h_apt = [30,63,72,86];
    let a_apt = [22,39,76,82];
    let s_apt = [4,29,40,69];
    let i_apt = [10,26,59,90];
    let d_apt = [13,18,43,66];
    let e_apt = [7,55,79,94];

    let c_v = 0;
    let h_v = 0;
    let a_v = 0;
    let s_v = 0;
    let i_v = 0;
    let d_v = 0;
    let e_v = 0;

    let c_va = 0;
    let h_va = 0;
    let a_va = 0;
    let s_va = 0;
    let i_va = 0;
    let d_va = 0;
    let e_va = 0;

    answers.forEach(answer => {
        if (answer && answer.answer === 'Sí') {
            if (c.includes(answer.questionId)) {
                c_v++;
            } else if (h.includes(answer.questionId)) {
                h_v++;
            } else if (a.includes(answer.questionId)) {
                a_v++;
            } else if (s.includes(answer.questionId)) {
                s_v++;
            } else if (i.includes(answer.questionId)) {
                i_v++;
            } else if (d.includes(answer.questionId)) {
                d_v++;
            } else if (e.includes(answer.questionId)) {
                e_v++;
            }
            
            else if (c_apt.includes(answer.questionId)) {
                c_va++;
            } else if (h_apt.includes(answer.questionId)) {
                h_va++;
            } else if (a_apt.includes(answer.questionId)) {
                a_va++;
            } else if (s_apt.includes(answer.questionId)) {
                s_va++;
            } else if (i_apt.includes(answer.questionId)) {
                i_va++;
            } else if (d_apt.includes(answer.questionId)) {
                d_va++;
            } else if (e_apt.includes(answer.questionId)) {
                e_va++;
            }
        }
    });

    // Determinación del tipo con la cantidad más alta
    let highestType = 'Administrativa';
    let highestCount = c_v;
    let text = 'Area Administrativa'
    if (h_v > highestCount) {
        highestType = 'Humanidades';
        highestCount = h_v;
        let text = 'Area de Humanidades y Ciencias Sociales y Juridicas'
    }
    if (a_v > highestCount) {
        highestType = 'Artistica';
        highestCount = a_v;
        let text = 'Area Artistica'
    }
    if (s_v > highestCount) {
        highestType = 'Salud';
        highestCount = s_v;
        let text = 'Area de Ciencias de la Salud'
    }
    if (d_v > highestCount) {
        highestType = 'Seguridad';
        highestCount = d_v;
        let text = 'Area de Defensa y Seguridad'
    }
    if (i_v > highestCount) {
        highestType = 'Enseñanzas';
        highestCount = i_v;
        let text = 'Area de Enseñanzas Tecnicas'
    }
    if (e_v > highestCount) {
        highestType = 'Experimentales';
        highestCount = e_v;
        let text = 'Area de Ciencias Experimentales'
    }
///////////////////////////////////////////////////////////////////
    let highestType_A = 'Administrativa';
    let highestCount_A = c_va;
    if (h_va > highestCount_A) {
        highestType_A = 'Humanidades';
        highestCount_A = h_va;
    }
    if (a_va > highestCount_A) {
        highestType_A = 'Artistica';
        highestCount_A = a_va;
    }
    if (s_va > highestCount_A) {
        highestType_A = 'Salud';
        highestCount_A = s_va;
    }
    if (d_va > highestCount_A) {
        highestType_A = 'Seguridad';
        highestCount_A = d_va;
    }
    if (i_va > highestCount_A) {
        highestType_A = 'Tecnicas';
        highestCount_A = i_va;
    }
    if (e_va > highestCount_A) {
        highestType_A = 'Experimentales';
        highestCount_A = e_va;
    }

    // Información sobre el tipo con la cantidad más alta
    const typeInfo = {
        Administrativa: {
            description: 'Las carreras administrativas se centran en la gestión y supervisión de las operaciones diarias de una organización. Incluyen tareas como la planificación, organización, dirección y control de los recursos.',
            skills: ['Organización', 'Supervisión', 'Orden', 'Análisis y síntesis', 'Colaboración', 'Cálculo'],
            jobs: ['Gerente de oficina', 'Asistente administrativo', 'Gerente de operaciones'],
            education: 'Licenciatura en Administración de Empresas, Gestión o campos relacionados.',
            averageSalary: '$50,000 - $80,000 anuales',
        },
        Humanidades: {
            description: 'Las carreras en humanidades se enfocan en el estudio de la cultura humana, la sociedad y la historia. Involucran el análisis de textos, la investigación histórica y la comprensión de las dinámicas sociales.',
            skills: ['Precisión Verbal', 'Organización', 'Relación de hechos', 'Lingüística', 'Orden', 'Justicia'],
            jobs: ['Historiador', 'Filólogo', 'Antropólogo'],
            education: 'Licenciatura en Historia, Letras, Antropología o campos relacionados.',
            averageSalary: '$40,000 - $70,000 anuales',
        },
        Artistica: {
            description: 'Las carreras artísticas se centran en la creación y apreciación del arte. Incluyen disciplinas como la pintura, la escultura, la música, el teatro y el diseño gráfico.',
            skills: ['Estético', 'Armónico', 'Manual', 'Visual', 'Auditivo'],
            jobs: ['Artista plástico', 'Diseñador gráfico', 'Músico'],
            education: 'Licenciatura en Bellas Artes, Diseño Gráfico, Música o campos relacionados.',
            averageSalary: '$30,000 - $60,000 anuales',
        },
        Salud: {
            description: 'Las carreras en salud se enfocan en el cuidado y la mejora de la salud humana. Incluyen la medicina, la enfermería, la terapia física y otras disciplinas relacionadas con el bienestar.',
            skills: ['Asistir', 'Investigar', 'Precisión', 'Percepción', 'Análisis', 'Ayudar'],
            jobs: ['Médico', 'Enfermero', 'Terapeuta físico'],
            education: 'Licenciatura en Medicina, Enfermería, Terapia Física o campos relacionados.',
            averageSalary: '$60,000 - $120,000 anuales',
        },
        Seguridad: {
            description: 'Las carreras en seguridad se centran en la protección de las personas, propiedades y datos. Incluyen roles en la policía, seguridad privada y ciberseguridad.',
            skills: ['Justicia', 'Equidad', 'Colaboración', 'Espíritu de equipo', 'Liderazgo'],
            jobs: ['Oficial de policía', 'Guardia de seguridad', 'Analista de seguridad cibernética'],
            education: 'Formación policial, Certificaciones en seguridad, Licenciatura en Seguridad Informática o campos relacionados.',
            averageSalary: '$40,000 - $90,000 anuales',
        },
        Enseñanzas: {
            description: 'Las carreras en enseñanza se dedican a la educación y formación de individuos en diversas áreas de conocimiento. Incluyen roles en la enseñanza primaria, secundaria y universitaria.',
            skills: ['Cálculo', 'Científico', 'Manual', 'Exactitud', 'Planificar'],
            jobs: ['Profesor de primaria', 'Profesor de secundaria', 'Profesor universitario'],
            education: 'Licenciatura en Educación, Pedagogía o especialidades relacionadas.',
            averageSalary: '$35,000 - $70,000 anuales',
        },
        Experimentales: {
            description: 'Las carreras experimentales se centran en la investigación y el descubrimiento científico. Incluyen roles en laboratorios, investigaciones de campo y desarrollo tecnológico.',
            skills: ['Investigación', 'Orden', 'Organización', 'Análisis y Síntesis', 'Cálculo numérico', 'Clasificar'],
            jobs: ['Científico de laboratorio', 'Investigador', 'Desarrollador de tecnología'],
            education: 'Licenciatura en Ciencias, Ingeniería o campos relacionados.',
            averageSalary: '$50,000 - $100,000 anuales',
        },
    };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const typeInfo_apt = {
        Administrativa: {
            skills: ['Persuasivo', 'Objetivo', 'Práctico', 'Tolerante', 'Responsable', 'Ambicioso'],
        },
        Humanidades: {
            skills: ['Responsable', 'Justo', 'Conciliador', 'Persuasivo', 'Sagaz', 'Imaginativo'],
        },
        Artistica: {
            skills: ['Sensible', 'Imaginativo', 'Creativo', 'Detallista', 'Innovador', 'Intuitivo'],
        },
        Salud: {
            skills: ['Altruista', 'Solidario', 'Paciente', 'Comprensivo', 'Respetuoso', 'Persuasivo'],
        },
        Seguridad: {
            skills: ['Arriesgado', 'Solidario', 'Valiente', 'Agresivo', 'Persuasivo'],
        },
        Tecnicas: {
            skills: ['Preciso', 'Práctico', 'Crítico', 'Analítico', 'Rígido'],
        },
        Experimentales: {
            skills: ['Metódico', 'Analítico', 'Observador', 'Introvertido', 'Paciente', 'Seguro'],
        },
    };
    

    // Información sobre el tipo con la cantidad más alta
    const highestTypeInfo = typeInfo[highestType];
    const highestTypeInfo_apt = typeInfo_apt[highestType_A];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultados del Cuestionario</Text>
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
});

export default ResultsLearning;
