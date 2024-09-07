import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="flex bg bg-pink-200 justify-between shadow-xl">
            <div>
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex px-6" >
                    <li className="px-6">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-6">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-6">
                        <Link to="/contact">contact us</Link>
                    </li>
                    <li className="px-6">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-6"> cart </li>
                    <button
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
