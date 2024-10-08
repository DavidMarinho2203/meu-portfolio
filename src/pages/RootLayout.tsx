import { useContext } from "react";

import Header from "../components/Header/Header";
import { UserContext } from "../Context/UserContext";
import type { useUserType } from "../types";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
    const { openMenu, screenWidth } = useContext(UserContext) as useUserType

    return (
        <>
            <Header />

            {screenWidth >= 600 &&
                (
                    <>
                        <Outlet />
                        <Footer />
                    </>
                )
            }

            {!openMenu && screenWidth < 600 &&
                (
                    <>
                        <Outlet />
                        <Footer />
                    </>
                )
            }

            {openMenu &&
                (
                    <>
                    </>
                )
            }
        </>
    )
}