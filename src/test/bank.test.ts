import {Bank } from "../main/bank";


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

    const bank = new Bank();

    describe('makes a deposit of 1000 on 10-01-2012', () => {

        describe('and a withdrawal of 500 on 14-01-2012', () => {

            it("when they print their bank statement they would see", () => {

                const bankStatement = "Date         || Amount    || Balance\n" +
                    "14/01/2012   ||  -500     || 2500\n" +
                    "13/01/2012   ||  2000     || 3000\n" +
                    "12/01/2012   ||  1000     || 1000"
                expect(bank.printStatement()).toEqual(bankStatement);
            });
        });
    });
})