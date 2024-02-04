import {fireEvent, render, screen} from "@testing-library/react"
import {act} from "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load restaurant menu Componeent", async () => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
    <RestaurantMenu />
    <Cart/>
    </Provider>
    </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("Veg Pizza (16)")
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(16)

    const addBtns = screen.getAllByRole("button", {name: "Add +"})
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()
    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument()

    // expect(screen.getAllByTestId("foodItems").length).toBe(18)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))

    expect(screen.getAllByTestId("foodItems").length).toBe(16)

    expect(screen.getByText("Cart is empty Add items to Cart")).toBeInTheDocument()

})