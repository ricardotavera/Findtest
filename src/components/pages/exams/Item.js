import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import '../../Cards.css';


function Item(props) {

    const thisFunction = function (address) {
        if(address){
            return '/coder'
           
       }else{ return '/parcial'}
       }
       let path = thisFunction(props.code)
    
    
    return(
        
        <div className="item">
           
           <li className="cards__item">
            <Link className="cards__item__link" to= {{ pathname:path, asignature: props.text, params: props.params 
       }} >
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Cálculo I image" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text "> {props.text} </h5>
                </div>
            </Link>
        </li>
            
        </div>

    );
    
}

export default Item;