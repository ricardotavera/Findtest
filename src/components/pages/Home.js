import React from 'react'
import '../../App.css';
import AverageSection from '../AverageSection';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
    window.scrollTo(0, 0)
    return (
        <>  
        
            <HeroSection />
            <Cards title='Descubre una increible diversidad de parciales' tiles='1'/>
            <AverageSection />
            <Cards />
            

        </>
    )
}

export default Home
