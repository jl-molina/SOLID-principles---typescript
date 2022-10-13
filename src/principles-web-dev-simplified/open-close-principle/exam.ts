import { IQuestion } from "./question.interface";

export class Exam {
    printExam(question: IQuestion[]) {
        question.forEach(element => {
            element.print();
        });
    }
}