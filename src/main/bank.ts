import { AccountService } from "./accountService";

export class Bank implements AccountService {
    deposit(amount: number): void {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number): void {
        throw new Error("Method not implemented.");
    }
    printStatement(): void {
        throw new Error("Method not implemented.");
    }
}