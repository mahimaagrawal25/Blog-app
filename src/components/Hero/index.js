import React from 'raect';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

/**
 *@author
 *@function Hero
 **/

const Hero=(props) => {
    return(
     <div>
        <Card>
        <div style={{padding:'50px 0'}}>
         <Logo />
    </div>
    <Navbar/>
    </Card>
   </div>
   )

}

export default Hero