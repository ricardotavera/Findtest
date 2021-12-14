import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
  return (
      
      <div className='footer-container'>
        <h1 className='footer-title'>Acerca de Findtest</h1>
        <section className='footer-suscription'>
          <p className='footer-suscription-headig'>
            El objetivo principal de Fintest es mejorar los métodos de estudio de las personas mediante herramientas con diferentes funcionalidades y material didáctico (parciales) permitiendo un aprendizaje significativo y un dominio del 
            conocimiento a través de la experiencia obtenida con los recursos que Findtest ofrece. Los exámenes presentes en esta aplicación 
            fueron aplicados en centros educativos de alta calidad. Además Findtest cuenta con herramientas como calculadora de promedio universitario, posibilidad de añadir exámenes e hipervínculos a sitios complementarios.
            
          </p>

          <form>
            <br/>
            
          </form>
          <p className='footer-suscription-text'>
          Aprende y Disfruta!
          </p>
          <p>

          Desarrolado por: Daniel Tavera 
          </p>
          Github: ricardotavera
            
          
        </section>
        
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2> < a href='https://mega.nz/#F!wwNkALqJ!8sSFjp4Bif9-LIsnpwOiBw' target="_blank">DeTodoUIS MEGA</a></h2>
            </div>
            <div className='footer-link-items'>
              <h2><a href='http://libgen.li' target="_blank">Biblioteca génesis</a></h2>
            </div>
          </div>

          
            
          <div className='footer-link-wrapper'>
        
            

            <div className='footer-link-items'>
              <h2><a href="https://ocw.mit.edu" target="_blank">Repositoios web</a></h2>
            </div>

            <div className='footer-link-items'>
              <h2><a href="https://ocw.mit.edu" target="_blank">MIT OCW</a></h2>
            </div>
            
          

          </div>
            
        </div>
           <small className='website-rights'>
            &copy; Findtest {new Date().getFullYear()} 
            </small>

      </div>
  );
}

export default Footer;