import { LitElement, html, css } from 'lit';

class QuizResult extends LitElement {
  static properties = {
    score: { type: Number }
  };

  static styles = css`
    /* Voeg hier je stijlen toe */
  `;

  render() {
    return html`
      <div>
        <h2>Quiz is voltooid!</h2>
        <p>Je eindscore is: ${this.score}</p>
      </div>
    `;
  }
}

customElements.define('quiz-result', QuizResult);
