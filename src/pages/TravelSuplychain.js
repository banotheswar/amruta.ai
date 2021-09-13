import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Getstarted from '../components/Oxai/Getstarted'
import Hero from '../components/suplychain/Hero'
import Solution from '../components/suplychain/Solution'
import Usecases from '../components/suplychain/Usecases'

const TravelSuplychain = () => {
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

export default TravelSuplychain
