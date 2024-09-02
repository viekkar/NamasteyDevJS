import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header =()=>{
    const[btnNameReact, setBtnNameReact] = useState("Login")

    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> contact us </li>
                    <li> cart </li>
                    <button 
                    className="login"
                    onClick={()=> {
                        btnNameReact==="Login"
                        ? setBtnNameReact("Logout")
                        :setBtnNameReact("Login");
                    }}
                    > 
                    {btnNameReact}
                     </button>

                </ul>

            </div>

        </div>
    )
};

export default Header;
