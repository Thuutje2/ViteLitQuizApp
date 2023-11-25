import { LitElement, html, css } from 'lit';

class QuizQuestion extends LitElement {
  static properties = {
    question: { type: Object }
  };

  static styles = css`
    quiz-question {
        display: block;
        margin-bottom: 20px;
        }
  `;

  render() {
    return html`
      <div>
        <h2>${this.question.question}</h2>
        <ul>
          ${this.question.options.map(
            (option) => html`<li @click="${() => this.handleAnswerSelected(option)}">${option}</li>`
          )}
        </ul>
      </div>
    `;
  }

  handleAnswerSelected(selectedAnswer) {
    this.dispatchEvent(new CustomEvent('answer-selected', { detail: selectedAnswer }));
    this.dispatchEvent(new CustomEvent('question-answered'));
  }
}

customElements.define('quiz-question', QuizQuestion);
