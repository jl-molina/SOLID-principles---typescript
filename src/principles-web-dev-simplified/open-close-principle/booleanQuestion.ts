import { IQuestion } from "./question.interface";

export class BooleanQuestion implements IQuestion {
    question: string;

    constructor(question: string) {
        this.question = question;
    }
    
    print(): void {
        console.log(this.question);
        console.log('true');
        console.log('false');
        console.log();
    }
}