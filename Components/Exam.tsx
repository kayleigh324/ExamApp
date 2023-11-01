import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import questions from './questions.json'

const Exam = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
  
    const handleAnswer = (answer) => {
      console.log(`Answer selected: ${answer}`);
  
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestion] = answer;
  
      console.log(`Updated answers: ${updatedAnswers}`);
  
      setSelectedAnswers(updatedAnswers);
      console.log(selectedAnswers);
    };
  
    const nextQuestion = () => {
      if (currentQuestion === questions.length - 1) {
        alert('End of exam!');
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
      console.log('Next Question');
    };
  
    const previousQuestion = () => {
      setCurrentQuestion(currentQuestion - 1);
      console.log('Previous Question');
    };
  
    console.log("Rendering exam component");
  

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        {questions[currentQuestion] && questions[currentQuestion].question && (
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        )}

        {questions[currentQuestion] && questions[currentQuestion].options && (
          questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(option)}
              style={[
                styles.option,
                {
                  borderColor: selectedAnswers[currentQuestion] === option
                    ? questions[currentQuestion].correctAnswer === option
                      ? 'green'
                      : 'red'
                    : 'black',
                },
              ]}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))
        )}

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={previousQuestion} style={styles.button}>
              <Text style={styles.buttonText}>Previous Question</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={nextQuestion} style={styles.button}>
              <Text style={styles.buttonText}>Next Question</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    marginTop: 10, 
    flex: 1, // Added flex: 1 to take up all available vertical space
    justifyContent: 'space-between', // Aligns children to the start and end of the container
  },
  questionText: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5, // Added margin for space from the edge
    marginRight: 5, // Added margin for space from the edge
  },
  option: {
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
  },
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
buttonWrapper: {
  width: '48%',
},
button: {
  borderWidth: 1,
  borderColor: 'black',
  padding: 10,
  borderRadius: 5,
},
buttonText: {
  textAlign: 'center',
},
});

export default Exam;

