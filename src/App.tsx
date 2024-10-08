
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.js";
import UserProvider from "./Context/UserContext.js";

export default function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    )
}