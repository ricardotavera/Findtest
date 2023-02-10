import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import Search  from './pages/exams/Search'

let video = '/videos/background3.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Bienvenido a Findtest</h1>
            <p>Encuentra aqui el material perfecto para preparar tu examen</p>

            <Search  onsearch={(subject) => {console.log(subject)}}  />

            <div className="hero-btns">
                <Button   link='/exams'>
                    Buscar
                </Button>

                
            </div>
        </div>
    )
}

export default HeroSection
