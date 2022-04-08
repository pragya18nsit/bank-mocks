import {Bank } from "../main/bank";
import { IStatementPrinter } from "../main/statementPrinter";
import { mock } from "jest-mock-extended";



/*

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When they print their bank statement
Then they would see:

Date         || Amount    || Balance
14/01/2012   ||  -500     || 2500
13/01/2012   ||  2000     || 3000
12/01/2012   ||  1000     || 1000


*/

describe('Given a client', () => {
    const printer = mock<IStatementPrinter>();
    const bank = new Bank(printer);

    describe('makes a deposit of 1000 on 10-01-2012', () => {

        bank.deposit(1000);
        describe('and a withdrawal of 500 on 14-01-2012', () => {

            it("when they print their bank statement they would see", () => {
                
                const bankStatement = "Date         || Amount    || Balance\n" +
                    "12/01/2012   ||  1000     || 1000"
    
                bank.printStatement();    
                expect(printer.print).toHaveBeenCalledWith(bankStatement);
            });
        });
    });
})