import { LoginContext } from "./LoginContext";
import { useContext } from "react";

export const useLoginContext= () =>{
    const context= useContext(LoginContext);

    return context
}