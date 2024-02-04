import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from '../Header'
import appStore from '../../utils/appStore'
import "@testing-library/jest-dom"





it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole("button", {name: "Login"})
    const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument()
})


it("Should render Header Component with a cart items ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0 items)")
    expect(cartItems).toBeInTheDocument()
})

it("Should render Header Component with a cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)    // We can also pass regex over here
    expect(cartItems).toBeInTheDocument()
})


it("Should change Login Button to Logout on Click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument()
})
