import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";




const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    //authentication
    useEffect(() => {
        //Make an API call and send username and password

        const data = {
            name: "Sumit"
        }
        setUserName(data.name)
    },[])
    return (
        <Provider store={appStore}>
        {/* // Defalut value of the context will be used */}
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            {/* // Sumit will be used  */}
        <div className="app">
            {/* if we will wrap only only our header component instead of wrapping our app then the updated value of the context will be in header only and for other places it will pick the default value */}
            {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
                {/* Value inside header will be Elon Musk*/}
            <Header/>
            {/* </UserContext.Provider> */}
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)



