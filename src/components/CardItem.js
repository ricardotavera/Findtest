import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'


function CardItem(props) {
     var vid;
     if (props.video){
          vid =  <video className="cards__item__img" src={props.video} autoPlay loop muted />
     }else{
         vid = <img src={props.src} alt="Cálculo I image" className="cards__item__img"/>
     }  
    return (
        <>
        

        
        <li class="cards__item" >

            <a className="cards__item__link" href={props.path2} target='_blank'>
            
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                    {vid}
                    
                </figure>
                
                
                
                <div className="cards__item__info">
                    <h5 className="cards__item__text "> {props.text} </h5>
                </div>

                </a>
                
                
            
        </li>
        
        </>
    )
}

export default CardItem
