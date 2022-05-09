import {Link} from "react-router-dom";

function WrongLogin() {

    return(
        <div>    
            <h1>
                Wrong credentials
            </h1>
            <Link to="/login">Back to Login Page</Link>
        </div>
    )
}
export default WrongLogin;