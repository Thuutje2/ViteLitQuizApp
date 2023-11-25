export class QuizService {
    constructor() {
        this.quizData = [
            {
                question: "What is the capital of India?",
                options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
                answer: "Delhi"
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "What is the capital of USA?",
                options: ["New York", "Washington DC", "Los Angeles", "Chicago"],
                answer: "Washington DC"
            },
            {
                question: "What is the capital of China?",
                options: ["Shanghai", "Beijing", "Hong Kong", "Chengdu"],
                answer: "Beijing"
            }
        ]
        
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion(){
        return this.quizData[this.currentQuestionIndex];
    }

    checkAnswer(answer){
        const currentQuestion = this.getCurrentQuestion();
        if(answer === currentQuestion.answer){
            this.score += 1;
        }

        this.currentQuestionIndex += 1;

        return this.currentQuestionIndex < this.quizData.length;
    }

    getScore(){
        return this.score;
    }
}