import { IInterstCalculator } from "./interestCalculator.interface";

export class interestCalculator implements IInterstCalculator{
    calculateInterest(amount: number): number {
        return amount * 1.05;
    }
}