export const fizzBuzz = (input: number) => {
  const multipleOfThree = input % 3 === 0;
  const multipleOfFive = input % 5 === 0;
  if (multipleOfThree && multipleOfFive) {
    return "FizzBuzz"
  }
  if (multipleOfThree) {
    return "Fizz"
  }
  if (multipleOfFive) {
    return "Buzz"
  }
  return input.toString()
}