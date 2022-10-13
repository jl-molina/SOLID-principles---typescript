import { BankAccount } from "../bank-account/bankAccount";
import { IInvestmentAccount } from "./investmentAccount.interface";

export class InvestmentAccount extends BankAccount implements IInvestmentAccount{
    override withdraw(amout: number): void {
        const penalty = this.#checkForPenalty();
        this.balance -= amout + penalty;
        console.log('from', this.balance);
    }


    #checkForPenalty(): number {
        //code
        console.log('no penalty');
        return 0;
    }
}