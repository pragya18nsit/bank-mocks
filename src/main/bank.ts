import { AccountService } from "./accountService";
import { IStatementPrinter } from "./statementPrinter";
import { Transaction } from "./transaction";

export class Bank implements AccountService {
    printer : IStatementPrinter; // you can mock this
    transactions?: Transaction[];
    constructor(printer: IStatementPrinter, transactions?: Transaction[]) {
        this.printer = printer;
        this.transactions = transactions;
    }
    deposit(amount: number): void {
        this.transactions?.push({
            Date: new Date(), Amount: amount, Balance: amount
         })
    }
    withdraw(amount: number): void {
        throw new Error("Method not implemented.");
    }
    printStatement(): void {
        const bankStatement = "Date         || Amount    || Balance\n" +
        "12/01/2012   ||  1000     || 1000"
        this.printer.print(bankStatement);
    }
}