import { AccountService } from "./accountService";

export class Bank implements AccountService {
    printer : IStatementPrinter; // you can mock this
    transatcionts : List<transactions>
    constructor(IStatementPrinter printer) {
        this.printer = printer;
    }
    deposit(amount: number): void {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number): void {
        throw new Error("Method not implemented.");
    }
    printStatement(): void {
        this.printer.Print(transactions);
        throw new Error("Method not implemented.");
    }
}