import { ItemamountContext } from "./ItemamountContext";
import { useContext } from "react";

export const useItemamountContext= () =>{
    const context= useContext(ItemamountContext);

    return context
}