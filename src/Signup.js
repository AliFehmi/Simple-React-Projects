import { useLoginContext } from "./useLoginContext";
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
    const navigate= useNavigate()
    const {dispatch}= useLoginContext()
    
    
    function handleSubmit (event){
        event.preventDefault();
        const errorDiv= document.getElementById("errorLine");
        const firstName= event.target.elements["First Name"].value;
        const lastName= event.target.elements["Last Name"].value;
        const email= event.target.elements["Email"].value;
        const password= event.target.elements["Password"].value;
        const data= {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }
        //console.log(firstName, lastName, email, password);
        if(firstName!=="" || lastName!=="" || email!=="" || password!=="" ){
            fetch("http://localhost:3000/accounts", {
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => response.json)
            .then(data =>{
                console.log("form was submitted successfully: ", data);
            })
            .catch(error =>{
                errorDiv.innerText= error;
            })
            dispatch({type:'LOGIN', payload: data})
            errorDiv.innerText="";
            navigate('/')
        }
        else{
            errorDiv.innerText="Please do not leave empty field!"
            console.log("ok")
        }
        
        
    }

    return ( 
        <div className="signup">
            <form onSubmit={handleSubmit} className="signupForm">
                <h1>Sing Up</h1>
               
                <input name="First Name" onFocus={(e) => e.preventDefault()} type="text" placeholder="First Name"/>
                
                <input name="Last Name" onFocus={(e) => e.preventDefault()} type="text" placeholder="Last Name"/>
                
                <input name="Email" onFocus={(e) => e.preventDefault()} type="email" placeholder="Email"/>
                
                <input name="Password" onFocus={(e) => e.preventDefault()} type="password" placeholder="Password"/>
                <div className="container">
                    <p>Already a member? <Link to="/login" className="link2"> <strong> Log In</strong></Link></p>
                    
                </div>
                <button type="submit">Sign up</button>
                <div className="errorLine" id="errorLine"></div>
            </form>
        </div>
     );
}
 
export default Signup;