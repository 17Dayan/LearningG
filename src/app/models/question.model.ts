export class Question {
    text: string;
    answers: string[];
    correctAnswerIndex: number;
    selectedAnswer?: number;

    constructor(text: string, answers: string[], correctAnswerIndex: number) {
        this.text = text;
        this.answers = answers;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}
