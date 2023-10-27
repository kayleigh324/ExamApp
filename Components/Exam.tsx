import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const questions = [
  // Define your questions and answers here
  {
    question: 'Question 1',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },
  {
    question: 'Question 2',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },{
    question: 'Question 3',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },{
    question: 'Question 4',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },{
    question: 'Question 5',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },{
    question: 'Question 6',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
  },
  // Add more questions in a similar format
];

const Exam = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    if (answer === questions[currentSection].correctAnswer) {
      setSelectedAnswer({ answer, isCorrect: true });
    } else {
      setSelectedAnswer({ answer, isCorrect: false });
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);

    if (currentQuestion === 9) {
      if (currentSection === 9) {
        alert('End of exam!');
      } else {
        setCurrentSection(currentSection + 1);
        setCurrentQuestion(0);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    setSelectedAnswer(null)
    setCurrentQuestion(currentQuestion - 1)
  }

  return (
    <View>
      <Text>Section: {currentSection + 1}</Text>
      <Text>Question: {currentQuestion + 1}</Text>
      <Text>{questions[currentSection].question}</Text>
      {questions[currentSection].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(option)}
          style={{
            padding: 10,
            margin: 5,
            backgroundColor:
              selectedAnswer === option
                ? selectedAnswer.isCorrect
                  ? 'green'
                  : 'red'
                : 'white',
          }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={nextQuestion}>
        <Text>Next Question</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={previousQuestion}>
        <Text>Previous Question</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exam;
