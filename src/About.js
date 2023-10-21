import { render } from "react-dom"
import { Link } from "react-router-dom";


const About =()=>{
    return(
        <>
        <h4>hello iam About page </h4>
        <Link to ="/"><button>Take me to home page</button></Link>  
        <Link to ="/contact"><button>Take me to contact page</button></Link>
        </>
    )

}
export default About;