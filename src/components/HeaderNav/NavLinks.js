import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavLinks() {

    return (
        <ul className="h-full flex items-center ph-16">
                    <li><NavLink className="navbarLink" to="/projects"
                    activeClassName="opacity-100"
                    >Projects</NavLink></li>
                    <li><NavLink className="navbarLink" to="about-me"
                    activeClassName="opacity-100">
                        About Me</NavLink></li>
                    <li><NavLink className="navbarLink" to="contact"
                    activeClassName="opacity-100">
                        Contact</NavLink></li>
        </ul>
    )
}
