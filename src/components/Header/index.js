import React from 'raect';
import './style.css';
/**
 *@author
 *@function Header
 **/

const Header=(props) => {
    return(
        <header className='header'> 
            <nav className='headerMenu'>
                <a href='#'>Home </a>
                <a href='#'>About us </a>
                <a href='#'>Contact us </a>
                </nav>
                <div>
                    Social media links
                    </div>
             </header>
    )
}

export default Header