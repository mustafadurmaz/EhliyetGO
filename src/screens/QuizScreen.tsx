import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import questions from '../data/questions.json';
import { Question } from '../types/Question';

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      alert("Test Bitti!");
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <FlatList
        data={currentQuestion.options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === item && (item === currentQuestion.answer
                ? styles.correct
                : styles.incorrect)
            ]}
            onPress={() => handleOptionPress(item)}
            disabled={showAnswer}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      {showAnswer && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={{ color: '#fff' }}>Sonraki Soru</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  question: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
  option: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc'
  },
  correct: { backgroundColor: '#c8e6c9' },
  incorrect: { backgroundColor: '#ffcdd2' },
  nextButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center'
  }
});
