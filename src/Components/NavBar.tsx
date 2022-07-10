import { Link } from "solid-app-router";
import { Component } from "solid-js";

const NavBar: Component = () => {
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;