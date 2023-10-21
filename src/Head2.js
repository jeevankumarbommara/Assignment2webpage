
import { Link } from "react-router-dom"


const Head2=()=>{


    return(
        <div id="header">
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
        </div>
    )
}
export default Head2;