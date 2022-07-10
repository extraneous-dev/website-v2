import { Link } from "solid-app-router";
import { Component } from "solid-js";

const NavBarBlogType: Component = () => {
    return(
        <nav>
            <ul>
                <li><Link href="/projects">Completed Projects</Link></li>
                <li><Link href="/design-galleries">Design Concepts</Link></li>
            </ul>
        </nav>
    )
}
export default NavBarBlogType;