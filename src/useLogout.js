import { useLoginContext } from "./useLoginContext";
const useLogout = () => {

    const {dispatch}= useLoginContext()

    const logout=() =>{
         dispatch({type:'LOGOUT'})
    }
    return {logout}
}
 
export default useLogout;