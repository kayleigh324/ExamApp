import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View>
      

      {questions[currentQuestion] && questions[currentQuestion].question && (
        <Text>{questions[currentQuestion].question}</Text>
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

      <TouchableOpacity onPress={nextQuestion}>
        <Text>Next Question</Text>
      </TouchableOpacity>

      {currentQuestion > 0 && (
        <TouchableOpacity onPress={previousQuestion}>
          <Text>Previous Question</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Exam;

