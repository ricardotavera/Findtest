import React from 'react';
import Search from './Search'

import './Menu.css';

function Menu(params) {

  
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    

                </div>
                <div className='box' >
                <div className="search" >
                    <Search onsearch={params.onsearch} />

                </div>
                </div>

            </div>
        </div>
       
    );
}

export default Menu;