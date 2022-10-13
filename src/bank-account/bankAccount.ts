import { IBankAccount } from './bankAccount.interface'

export class BankAccount implements IBankAccount {
    balance = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amout: number): void {
        this.balance -= amout;
    }

    getBalance(): number {
        return this.balance;
    }
}