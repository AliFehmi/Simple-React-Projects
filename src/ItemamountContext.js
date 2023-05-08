import { createContext, useReducer } from "react";

export const ItemamountContext= createContext();

export const itemamountReducer= (state, action) => {
    console.log("in context", action)
    
    return {count:action}
}

const ItemamountContextProvider = ({children}) => {
    
    const [state, dispatch]= useReducer(itemamountReducer, {
        count:0
    })
    
    return ( 
        <ItemamountContext.Provider value={{...state, dispatch}}>
            {children}
        </ItemamountContext.Provider>
     );
}
 
export default ItemamountContextProvider;