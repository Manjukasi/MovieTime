import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import { showlist } from "./config";
import Details from "./components/showCard";


const AppLayout = () => {
    return (
        <>
        <Header />
        <Outlet/>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body /> 
            },
            {
                path: "/about",
                element: <About/> 
            },
            {
                path: "/shows/:id",
                element: <Details/>
            }

        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>)