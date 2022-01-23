import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const Main = () => {
    return (

        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}