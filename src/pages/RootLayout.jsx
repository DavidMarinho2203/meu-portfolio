import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function RootLayout() {
    const {mainAtivado} = useContext(UserContext)

    return (
        <>
            <Header />
            {mainAtivado && (
                <>
                    <Outlet />
                    <Footer />
                </>

            )}
        </>
    )
}