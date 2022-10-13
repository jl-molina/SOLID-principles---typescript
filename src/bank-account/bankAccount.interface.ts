export interface IBankAccount {
    balance: number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}