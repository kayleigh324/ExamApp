/*import React, { useState } from 'react';
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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  // Define your questions and answers here
  {
    question: '',
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

  const handleAnswer = (answer: any) => {
    if (answer === questions[currentSection].correctAnswer) {
      setSelectedAnswer({ answer, isCorrect: true });
    } else {
      setSelectedAnswer({ answer, isCorrect: false });
    }
  };

// ...


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
          style={[
            styles.option,
            {
              borderColor: selectedAnswer === option
                ? selectedAnswer.isCorrect ? 'green' : 'red'
                : 'black',
            },
          ]}
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

const styles = StyleSheet.create({
  option: {
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Exam;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    correctAnswer: 'Option B',
  },{
    question: 'Question 3',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option C',
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
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(10).fill(null));

  /*const handleAnswer = (answer: any) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
    console.log(selectedAnswers);
  };

  const handleAnswer = (answer: any) => {
    console.log(`Answer selected: ${answer}`);
    
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    console.log(questions)
    console.log(selectedAnswers)
    
    console.log(`Updated answers: ${updatedAnswers}`);
    
    setSelectedAnswers(updatedAnswers);
    console.log(selectedAnswers);
    console.log(questions)
  };
  

  const nextQuestion = () => {
    if (currentQuestion === 9) {
      if (currentSection === 9) {
        alert('End of exam!');
        return;
      }
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
      console.log(setCurrentQuestion);
      console.log('Next Question');
    } else {
      setCurrentQuestion(currentQuestion + 1);
      console.log('Next Question');
    }
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    console.log('previousQuestion')
    console.log(questions)
    console.log(selectedAnswers)
  };

  console.log("Rendering exam component");

  return (
    <View>
      <Text>Section: {currentSection + 1}</Text>
      <Text>Question: {currentQuestion + 1}</Text>

      {questions[currentSection] && questions[currentSection].question && (
        <Text>{questions[currentSection].question}</Text>
      )}

     
      {questions[currentSection] && questions[currentSection].options && (
        questions[currentSection].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(option)}
            style={[
              styles.option,
              {
                borderColor: selectedAnswers[currentQuestion] === option
                  ? questions[currentSection].correctAnswer === option
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
*/
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

