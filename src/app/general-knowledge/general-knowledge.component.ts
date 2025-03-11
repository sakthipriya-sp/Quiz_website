import { Component } from '@angular/core';

@Component({
  selector: 'app-general-knowledge',
  templateUrl: './general-knowledge.component.html',
  styleUrls: ['./general-knowledge.component.css']
})
export class GeneralKnowledgeComponent {
  quizStarted = false;
  quizCompleted = false;
  score: number | null = null;
  motivationalMessage: string = '';  // Add this to store the message

  currentQuestionIndex = 0;
  selectedAnswers: { [key: number]: string } = {};
  showScore = false;

  // Questions for the quiz
  questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
    { question: 'Who wrote "Hamlet"?', options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'], answer: 'William Shakespeare' },
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Jupiter' },
    { question: 'Which element has the chemical symbol O?', options: ['Oxygen', 'Osmium', 'Ozone', 'Opium'], answer: 'Oxygen' },
    { question: 'Who painted the Mona Lisa?', options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], answer: 'Leonardo da Vinci' },
    { question: 'Which country is the largest by area?', options: ['United States', 'Canada', 'Russia', 'China'], answer: 'Russia' },
    { question: 'Who is known as the "Father of Computers"?', options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'], answer: 'Charles Babbage' },
    { question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'], answer: '300,000 km/s' },
    { question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
    { question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Southern Ocean'], answer: 'Pacific Ocean' },
    { question: 'What is the square root of 64?', options: ['6', '8', '10', '12'], answer: '8' },
    { question: 'Who developed the theory of relativity?', options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Galileo Galilei'], answer: 'Albert Einstein' },
    { question: 'Which country invented the airplane?', options: ['Germany', 'Italy', 'USA', 'France'], answer: 'USA' },
    { question: 'What is the symbol for gold in the periodic table?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 'Au' },
    { question: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: '7' },
    { question: 'Who discovered penicillin?', options: ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Charles Darwin'], answer: 'Alexander Fleming' },
    { question: 'What is the capital of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], answer: 'Tokyo' },
    { question: 'What is the atomic number of carbon?', options: ['6', '8', '12', '14'], answer: '6' },
    { question: 'Who was the first President of the United States?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'], answer: 'George Washington' },
    { question: 'What is the largest land animal?', options: ['Elephant', 'Rhino', 'Whale', 'Giraffe'], answer: 'Elephant' }
  ];

  // Start the quiz
  startQuiz() {
    this.quizStarted = true;
    this.quizCompleted = false;
    this.showScore = false;  
    this.currentQuestionIndex = 0;
    this.score = null;
    this.selectedAnswers = {};
    this.motivationalMessage = '';  // Clear previous message
  }

  // Select an answer for the current question
  selectAnswer(questionIndex: number, option: string) {
    this.selectedAnswers[questionIndex] = option;
  }

  // Submit the quiz and calculate the score
  submitQuiz() {
    this.quizCompleted = true;
    this.quizStarted = false;
    this.score = this.questions.reduce((total, question, index) => {
      return total + (this.selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    this.showScore = true; 

    // Set motivational message based on score
    if (this.score === this.questions.length) {
      this.motivationalMessage = 'Perfect! You got every question right! 🎉';
    } else if (this.score >= this.questions.length * 0.75) {
      this.motivationalMessage = 'Great job! You know your stuff! 👍';
    } else if (this.score >= this.questions.length * 0.5) {
      this.motivationalMessage = 'Nice effort! Keep learning, you\'re doing well! 💪';
    } else {
      this.motivationalMessage = 'Don\'t worry! It\'s okay to make mistakes, you can always improve! 😊';
    }
  }

  // Navigate to the next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Navigate to the previous question
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  // Check if the "Next" button should be disabled
  isNextButtonDisabled(): boolean {
    return !this.selectedAnswers[this.currentQuestionIndex];
  }

  // Check if the current question is the last one
  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  // Check if the "Complete Quiz" button should be displayed
  showCompleteQuizButton(): boolean {
    return this.isLastQuestion() && !this.selectedAnswers[this.currentQuestionIndex];
  }
}
