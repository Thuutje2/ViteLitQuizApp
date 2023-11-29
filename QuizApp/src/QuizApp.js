import { LitElement, html, css } from 'lit';
import { QuizService } from './service/QuizService.js';

class QuizApp extends LitElement {
  static styles = css`
    
  `;

  constructor() {
    super();
    this.quizService = new QuizService();
    this.isQuizFinished = false;
  }

  render() {
    return html`
      <div class="container">
        ${this.isQuizFinished
          ? html`<quiz-result .score="${this.quizService.getScore()}"></quiz-result>`
          : html`<quiz-question
                   .question="${this.quizService.getCurrentQuestion()}"
                   @answer-selected="${this.handleAnswerSelected}"
                 ></quiz-question>`}
      </div>
    `;
  }

  handleAnswerSelected(event) {
    const selectedAnswer = event.detail;
    this.isQuizFinished = !this.quizService.checkAnswer(selectedAnswer);
    this.requestUpdate();
  }
}

window.customElements.define('quiz-app', QuizApp);
