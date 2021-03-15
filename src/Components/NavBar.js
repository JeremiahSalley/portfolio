import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <NavBarItem item='Home' tolink="/"/>
                    <NavBarItem item='About' tolink="/about"/>
                    <NavBarItem item='Skills' tolink="/skills"/>
                    <NavBarItem item='Projects' tolink="/projects"/>
                </ul>
            </nav>
            
        </div>
    )
}

export default NavBar
