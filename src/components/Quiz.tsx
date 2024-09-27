import { useState } from "react";

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    correct: string;

  }
} 

const Quiz: React.FC = () => {
    const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];
  return (
    <>
      {questions.map((item, index) => (
        <Question key={index} question={item }/>
      ))}
    </>
  )
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option:string): void => {
    setSelectedOption(option)
    }

  return (
    <>
      <p>{question.question}</p>
      <ul>
        {question.options.map((option, i: any) => (
          <Option key={i} option={option} handleSelect={handleSelect} />
        ))}
      </ul>
      {selectedOption && selectedOption === question.correct && <p>Correct!</p>}
      {selectedOption && selectedOption !== question.correct && <p>Wrong</p>}
    </>);
}

interface OptionProps {
  option: string;
  handleSelect: (option: string) => void;
}

const Option: React.FC<OptionProps> = ({option, handleSelect}) => {
  return (
    <>
      <li onClick={() => handleSelect(option)}>{option}</li>
    </>
  )
}

export default Quiz;
