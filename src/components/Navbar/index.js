import React frm 'react';
import'./style.css';
/**
 * @author
 * @function Navbar
 **/

 const Navbar = (props) => {
const submitSearch = () => {
    e.preventDefault();
    alert('Searhed');
}
    return(
     <div>className="navbar">
        <ul className="navbarMenu">
           <li><a href="#">Home</a></li>
           <li><a href="#">About Us</a></li>
           <li><a href="#">Posts</a></li>
           <li><a href="#">Contact Us</a></li>
        </ul>
        <div className='search'>
            <form onSubmit = {submitSearch}>
            <input type='text' placeholder='search'/>
            <img src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
        
            </div>
     </div> 
     )

 }    



 

 export default Navbar;