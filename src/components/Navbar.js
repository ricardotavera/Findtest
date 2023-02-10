import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);
    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
               <Link to='/' className="navbar-logo">
                   Findtest
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdPDv-wuDbB4Ygp7rhz85BLqLrbOs4JMZ_eai8Z-YFLzthRPA/viewform'   className='nav-links' onClick={closeMobileMenu}>
                            Añadir un examen
                       </a>
                   </li>
                   {/* <li className='nav-item'>
                       <Link to='/average'  className='nav-links' onClick={closeMobileMenu}>
                            Mi promedio
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/well'  className='nav-links' onClick={closeMobileMenu}>
                           Somos
                       </Link>
                   </li> */}
                       <li className='nav-item'>
                       <a target='_blank' to='https://docs.google.com/forms/d/e/1FAIpQLSdPDv-wuDbB4Ygp7rhz85BLqLrbOs4JMZ_eai8Z-YFLzthRPA/viewform'  className='nav-links-mobile' onClick={closeMobileMenu}>
                           Agregar Examen
                       </a>
                   </li>
                   
               </ul>
          
           </div>
       </nav>
       </>
    )
}

export default Navbar
