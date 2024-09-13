
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import UserProvider from "./Context/UserContext";

export default function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    )
}