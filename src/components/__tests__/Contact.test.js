import { render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact us page test case", () => {

    // beforeAll(() => {
    //     console.log("Before All")
    // })
    // beforeEach(() => {
    //     console.log("Before Each")
    // })
    // afterAll(() => {
    //     console.log("Before All")
    // })
    // afterEach(() => {
    //     console.log("Before Each")
    // })
test("Should load contact us component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})
test("Should load button inside contact component", () => {
    render(<Contact/>)

    // const button = screen.getByRole("button")
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
})
test("Should load input name inside Contact component", () => {
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("name")

    // Assertion
    expect(inputName).toBeInTheDocument()
})

test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact/>)

    // Querying
    const inputBoxes = screen.getAllByRole("textbox")

    //Assertion

    expect(inputBoxes.length).toBe(2)
    // expect(inputBoxes.length).not.toBe(3)
})
})