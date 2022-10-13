import { BankAccount } from './bank-account/bankAccount';
import { InterestCalculator } from './interest-calculator/interestCalculator';
import { InvestmentAccount } from './investment-account/investmentAccount';

const myAccount: BankAccount = new BankAccount();
const interest: InterestCalculator = new InterestCalculator();
const myInvestmentAccount: InvestmentAccount = new InvestmentAccount();

console.log('Initial balance:', myAccount.getBalance());
myAccount.deposit(1000);
console.log('1000 deposit:', myAccount.getBalance());
myAccount.withdraw(500);
console.log('500 withdraw:', myAccount.getBalance());

let myBalance = myAccount.getBalance();

console.log('Calculate Interest:', interest.calculateInterest(myBalance));

//open-closed principle
myInvestmentAccount.withdraw(250);
console.log('Investment withdraw:',myInvestmentAccount.getBalance());
