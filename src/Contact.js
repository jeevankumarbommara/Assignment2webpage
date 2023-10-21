import { render } from "react-dom"
import { Link,useNavigate } from "react-router-dom";


const Contact =()=>{
    let navigate = useNavigate();
    return(
        <>
          <h3>This from Contact Page</h3>
          <button onClick={()=>{navigate("/")}}>Take to home page</button>
        </>
        
    )
}

export default Contact;