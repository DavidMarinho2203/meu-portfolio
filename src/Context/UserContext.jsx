import { createContext } from "react";
import useUser from "../Hooks/useUser";

export const UserContext = createContext()


export default function UserProvider({children}) {
    return (
        <UserContext.Provider value={useUser()}>
            {children}
        </UserContext.Provider>
    )
}