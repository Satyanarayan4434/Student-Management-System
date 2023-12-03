import { createContext, useState } from "react";

export const ContextApi = createContext();

export default function ContextApiProvider({ children }){

    const [isLogedIn, setIsLogedIn] = useState(false);

    let value = {
        isLogedIn,
        setIsLogedIn,
    }

    return <ContextApi.Provider value={value}>{children}</ContextApi.Provider>;

}