import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/health/Hero'
import Solution from '../components/health/Solution'
import Usecases from '../components/health/Usecases'
import Getstarted from '../components/Oxai/Getstarted'

const Healthcare = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Solution/>
            <Usecases/>
            <Getstarted/>
            <Footer/>
            

        </div>
    )
}

export default Healthcare
