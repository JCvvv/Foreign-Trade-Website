import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const QuestionContainer = styled('div')({
  maxWidth: 1000,
  margin: 'auto',
  textAlign: 'center',
});

const QuestionText = styled(Typography)({
  marginBottom: '16px',
});

const OptionsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
});

const OptionButton = styled(Button)(({ selected }) => ({
  width: '180px',
  height: '60px',
  margin: '0 8px',
  fontSize: '1.5rem',
  background: selected ? '#4caf50' : 'inherit',
  color: selected ? 'white' : 'inherit',
}));

const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '16px',
});

const ButtonChoice = styled(Button)(() => ({
  width: '180px',
  height: '60px',
  margin: '0 8px',
  fontSize: '1.5rem'
}));

const QuizComponent = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer; // 直接保存选择的字母
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== '') {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete(answers);
      }
    } else {
      alert('Please select an option before moving to the next question.');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <QuestionContainer>
      <QuestionText variant="h3">
        {questions[currentQuestion].question}
      </QuestionText>
      <OptionsContainer>
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton
            key={index}
            variant="contained"
            onClick={() => handleAnswer(String.fromCharCode(65 + index))} // 使用字母形式保存答案
            selected={answers[currentQuestion] === String.fromCharCode(65 + index)} // 检查是否选中
          >
            {String.fromCharCode(65 + index)}.{option}
          </OptionButton>
        ))}
      </OptionsContainer>
      <ButtonGroup>
        <ButtonChoice onClick={handlePrevious} disabled={currentQuestion === 0} variant="contained">
          Previous
        </ButtonChoice>
        <ButtonChoice onClick={handleNext} variant="contained">
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </ButtonChoice>
      </ButtonGroup>
    </QuestionContainer>
  );
};

export default QuizComponent;
