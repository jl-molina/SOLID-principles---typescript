import { bankAccount } from './bank-account/bankAccount';
import { interestCalculator } from './interest-calculator/interestCalculator';

const myAccount: bankAccount = new bankAccount();
const interest: interestCalculator = new interestCalculator();

console.log(myAccount.getBalance());
myAccount.deposit(1000);
console.log(myAccount.getBalance());
myAccount.withdraw(500);
console.log(myAccount.getBalance());

let myBalance = myAccount.getBalance();

console.log(interest.calculateInterest(myBalance));

