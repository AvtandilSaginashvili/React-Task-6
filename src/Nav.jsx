import { Link, Outlet } from "react-router-dom";
import React from "react";

function navBar() {
    return(
        <div className="maindiv">
            <ul>
                <li>
                    <Link to={"/"} id="home">Home</Link>
                </li>
                <li>
                    <Link to={"/contact"} id="contact">Contact</Link>
                </li>
                <li>
                    <Link to={"/aboutme"} id="aboutme">About Me</Link>
                </li>
            </ul>
            <Outlet />

            <div>
            <h1>მთავარი გვერდი</h1>
            </div>
        </div>


    )
}

export default navBar;