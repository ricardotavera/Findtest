import React from 'react'
import { Link } from 'react-router-dom';
import './Item2.css'


function Item2(props) {
    return (
        <div className="item2">
           
        <li className="cards__item">
        
         
             <a href={props.address} target="_blank" className="cards__item__link2">
             <figure className="cards__item__pic-wrap22" >
                <img src='../../../images/PDF2.png'  alt="Cálculo I image" className="image__background"/>
            </figure>
            <div className="cards__item__info">
                    <h5 className="cards__item__text2"> {props.label} </h5>
                </div>
             </a>
         
         
     </li>
         
     </div>
    )
}

export default Item2
