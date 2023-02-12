import React from 'react';
import Search from './Search'

import './Menu.css';

function Menu(params) {

  
    return(
        <div className="container background">
   <li></li>
   <li></li>
   <li></li>

               <div className='hero-text'>¿Qué deseas estudiar hoy?</div>
                    <Search onsearch={params.onsearch} />
            
        </div>
       
    );
}

export default Menu;