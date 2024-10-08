import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Projetos from "../pages/Projetos";
import Contato from "../pages/Contato";
import ErrorPage from "../pages/errorPage";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/Sobre",
            element: <Sobre />
        },
        {
            path: "/Projetos",
            element: <Projetos />
        },
        {
            path: "/Contato",
            element: <Contato />
        },
        {
            path:"*",
            element: <ErrorPage/>
        }
    ]
}])

export default router