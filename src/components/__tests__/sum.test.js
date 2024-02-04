import { sum } from "../sum"


test("Sum fn should calc the sum of two numbers", () =>{
    const result = sum(3,4)

    // Below line is known as Assertion
    expect(result).toBe(7)
})