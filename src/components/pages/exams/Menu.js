import React from 'react';
import Search from './Search'

import './Menu.css';

function Menu(params) {

  
    return(
        <div className="container">
            
               <div className='hero-text'>Stay hungry, stay foolish</div>
                    <Search onsearch={params.onsearch} />
            
        </div>
       
    );
}

export default Menu;