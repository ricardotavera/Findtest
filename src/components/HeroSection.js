import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

let video = '/videos/background3.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Bienvenido a Findtest</h1>
            <p>Encuentra aqui el material perfecto para preparar tu examen</p>
            <div className="hero-btns">
                <Button  buttonStyle='btn--outline' link='/exams'>
                    PARCIALES
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
