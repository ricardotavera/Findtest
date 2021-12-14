import React from 'react'
import '../../App.css';
import './form.css'
import { Button } from '../Button'


export default function AddExam() {

    window.scrollTo(0, 0)
    return <div className='section-2'>     
            <h1 className='title_1'> ¡Información más compartida!</h1>  
            <br/>
            <br/>  
            <div className='container_1'>
                <div className='container_2' >
                <p className='description_1'>
                    
                    Adjunta 1 o hasta 3 parciales. 
                    Los documentos permitidos deben ser preferiblemente de tipo PDF (también se aceptan formatos de imagen). 
                    Gracias a todos aquellos que con sus parciales hacen que Findtest sea más completo.
                </p>
                <br/>
                <br/>
                <br/>
                <a className='btn-form' target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdPDv-wuDbB4Ygp7rhz85BLqLrbOs4JMZ_eai8Z-YFLzthRPA/viewform'>
                    Agregar examen
                </a>
               
                </div>
                <div className='picture'>
                <img src='../../images/addExam.jpg' alt='Form picture' className=''/>    
                </div>
                
                
                
    
            </div> 

            <br/>
            <br/>
            <br/>
            <br/>
            
         </div>
            
}
