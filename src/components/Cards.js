import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
    return (
        <div className='cards'>
            <h1>{props.title}</h1>
            <div className='cards__container'>
                
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src="../images/calculus.jpg"  text='Calculo Diferencial en Ingeniería' label='Calculo' />
                        <CardItem src="../images/home.jpg"  text='Innova y desarrolla una gran idea!' label='Coding' />
                        <CardItem src="../images/physics.jpg"  text='Anaiza y Explora la naturaleza' label='CALCULO' path='/calculoButton'/>
                        <CardItem src="../images/geometry.jpg"  text='Dibuja y Crea grandes representaciones de la realidad' label='GEOMETRIA' path='/calculoButton'/>
                        
                    </ul>
                    
                </div>

            </div>
        </div>
    )
}

export default Cards
