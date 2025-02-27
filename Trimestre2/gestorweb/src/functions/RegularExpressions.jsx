import { createContext, useState } from "react";

export const expresionesContext = createContext();

export const ExpresionesProvider = ({ children }) => {
    const [expresiones, setExpresiones] = useState({
        username:/^[a-z]+\d{6}$/,
        password: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8}/
    });
    return (
        <expresionesContext.Provider value={{ expressions: expresiones, setExpresiones }}>
            {children}
        </expresionesContext.Provider>
    );
}