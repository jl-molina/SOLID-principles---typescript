import { IInterstCalculator } from "./interestCalculator.interface";

export class InterestCalculator implements IInterstCalculator{
    calculateInterest(amount: number): number {
        return amount * 1.05;
    }
}