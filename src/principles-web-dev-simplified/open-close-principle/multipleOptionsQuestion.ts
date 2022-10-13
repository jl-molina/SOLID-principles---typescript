import { IQuestion } from "./question.interface";

export class MultipleOptionsQuestion implements IQuestion {
    question: string;
    options: string[];

    constructor(question: string, options: string[]) {
        this.question = question;
        this.options = options;
    }
    
    print(): void {
        console.log(this.question);
        this.options.forEach((option, index) => console.log(`option ${index}: ${option}`));
        console.log();
    }
}