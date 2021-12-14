import React from 'react'
import './AverageSection.css';

function AverageSection() {
    return (
        <div className='section'>
            <h2 className='title'>Calcula tu promedio</h2>
            
            <div className='container'>
            <p className='description'>
              Obten tu calificación semestral 
              con una increible herramienta que  además te
              permitirá saber tu estado académico.
              <br/> 
              <br/>Promedio - Condicionalidad - Creditos Adicionales
            </p>
                
                <img src='../../images/report.jpg' alt='Form picture' className='image'/>    
               

            </div>
            
        </div>
    )
}

export default AverageSection
