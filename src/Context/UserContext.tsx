import { createContext, ReactNode } from "react";
import useUser from "../Hooks/useUser";
import type { useUserType } from "../types";

export const UserContext = createContext<useUserType>( {} as useUserType );


export default function UserProvider({children}: {children: ReactNode}) {
    return (
        <UserContext.Provider value={useUser()}>
            {children}
        </UserContext.Provider>
    )
}