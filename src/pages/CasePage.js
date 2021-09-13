import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GetStarted from '../components/Home/GetStarted'
import Hero from '../components/Usecases/Hero'
import CasesUse from '../components/Usecases/CasesUse'
import Usecase from '../components/Usecases/Usecase'

const CasePage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
<CasesUse/>
<Usecase/>
<GetStarted/>
            <Footer/>
            
        </div>
    )
}

export default CasePage
