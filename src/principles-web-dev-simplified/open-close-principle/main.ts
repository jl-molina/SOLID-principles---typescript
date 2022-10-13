import { Exam } from "./exam";
import { BooleanQuestion } from "./booleanQuestion";
import { MultipleOptionsQuestion } from "./multipleOptionsQuestion";
import { TextQuestion } from "./textQuestion";

const questions = [
    new BooleanQuestion('Is this a boolean question?'),
    new MultipleOptionsQuestion('Which answer is correct?', ['first', 'second', 'third', 'fourth']),
    new TextQuestion('What is your name?')
]


const exam = new Exam();
exam.printExam(questions);