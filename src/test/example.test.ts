import { fizzBuzz } from "../main/example";

describe('example test', () => {
    it("should return 1 when given 1", () => {
        expect(fizzBuzz(1)).toEqual("1")
    })

    it("should return Fizz when given multiple of 3", () => {
        expect(fizzBuzz(9)).toEqual("Fizz")
    })

    it("should return Buzz when given multiple of 5", () => {
        expect(fizzBuzz(10)).toEqual("Buzz")
    })

    it("should return FizzBuzz when given multiple of both 3 and 5", () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz")
    })
})