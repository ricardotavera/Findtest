import React from 'react'
import '../../App.css';
import CardItem from '../CardItem';



export default function Cicle() {
    window.scrollTo(0, 0)
    return   <div>
                <h1 className=""></h1>
                <div className='cards__container'>
                
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        <CardItem src="../images/calculus.jpg"  text='Great trip by the wonderful world!' label='CALCULO' path='/calculoButton'/>
                        
                    </ul>
                </div>
               </div>
            </div>
          
}
