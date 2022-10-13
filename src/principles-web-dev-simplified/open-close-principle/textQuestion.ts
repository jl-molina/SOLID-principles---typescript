import { IQuestion } from "./question.interface";

export class TextQuestion implements IQuestion {
    question: string;

    constructor(question: string) {
        this.question = question;
    }
    
    print(): void {
        console.log(this.question);
        console.log('_________________________');
        console.log();
    }
}