import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <p>Velvet what?</p>
                </a>

                <ul className="">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
