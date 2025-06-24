import React, { Component } from "react";
import Question from "./Question";
import Result from "./Result";
import "./QuizApp.css";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "Which continent is the Sahara Desert located in?",
          options: ["Asia", "Africa", "Australia", "South America"],
          answer: "Africa",
        },
        {
          id: 2,
          question: "What is the closest planet to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          answer: "Mercury",
        },
        {
          id: 3,
          question: "Which country built the Great Wall?",
          options: ["Japan", "India", "China", "Korea"],
          answer: "China",
        },
        {
          id: 4,
          question: "What is the longest river in the world?",
          options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
          answer: "Nile",
        },
        {
          id: 5,
          question: "Who was the first person to walk on the Moon?",
          options: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Galileo Galilei",
          ],
          answer: "Neil Armstrong",
        },
      ],

      currentQuestion: 0,
      selectedAnswer: "",
      score: 0,
      quizEnd: false,
      showResult: false,
    };
  }

  handleSelect = (option) => {
    this.setState({ selectedAnswer: option });
  };

  handleSubmit = () => {
    const { selectedAnswer, questions, currentQuestion, score } = this.state;
    let updatedScore = score;
    if (selectedAnswer === questions[currentQuestion].answer) {
      updatedScore += 1;
    }

    if (currentQuestion + 1 < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedAnswer: "",
        score: updatedScore,
      });
    } else {
      this.setState({
        score: updatedScore,
        quizEnd: true,
      });
    }
  };

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      selectedAnswer: "",
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, selectedAnswer, score, quizEnd } =
      this.state;
    return (
      <div className="quiz-container">
        <h1 className="quiz-title">Hỏi xoáy đáp xoay</h1>
        <div className="quiz-card">
          {!quizEnd ? (
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              selectedAnswer={selectedAnswer}
              onSelect={this.handleSelect}
              onSubmit={this.handleSubmit}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
            />
          ) : (
            <Result
              score={score}
              total={questions.length}
              onReplay={this.handleReplay}
            />
          )}
        </div>
      </div>
    );
  }
}

export default QuizApp;
