
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { useLoginContext } from "./useLoginContext";
const Login = () => {
    const navigate= useNavigate();
    const {dispatch} = useLoginContext()
    
    

    async function handleSubmit (event){
        event.preventDefault();
        const errorLine= document.getElementById("errorLine")
        const email= event.target.elements["Email"].value;
        //const password= event.target.elements["Password"].value;
        console.log("user's email is: ", email)
        try {
            const response= await fetch('http://localhost:3000/accounts?email='+email);
            if(response.ok){
                const json= await response.json();
                
                
                dispatch({type:'LOGIN', payload: json})
                navigate('/')
            } else {
                throw new Error('Response not OK');
            }
        } catch (error) {
            console.error(error);
            errorLine.innerText = error;
        }
    
        // const data= {
        //     email:email,
        //     password:password
        // }
        // if(email=="" || password==""){
        //     errorLine.innerText= "please do not leave empty field!"
        // }
        // else{
        //     errorLine.innerText=""
        //     dispatch({type:'LOGIN', payload: data})
        //     navigate('/')
        // }
    }


    return ( 
    <div className="signup">
    <form onSubmit={handleSubmit} className="signupForm">
        <h1>Log In</h1>
       
        
        
        <input name="Email" onFocus={(e) => e.preventDefault()} type="email" placeholder="Email"/>
        
        <input name="Password" onFocus={(e) => e.preventDefault()} type="password" placeholder="Password"/>
        
        <button type="submit">Log in</button>
        <div className="errorLine" id="errorLine"></div>
    </form>
    </div> 
);
}
 
export default Login;