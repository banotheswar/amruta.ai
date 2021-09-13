import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Oxai/Hero'
import Xai from '../components/Oxai/Xai'
import Xaiplatform from '../components/Oxai/Xaiplatform'
import Usecases from '../components/Oxai/Usecasesoxai'
import Getstarted from '../components/Oxai/Getstarted'
import OxiDevploymentProcess from '../components/Oxai/OxiDevploymentProcess'
import EvaluationProcess from '../components/Oxai/EvaluationProcess'
import Boost from '../components/Oxai/Boost'
const Oxaipage = () => {
    return (
        <div>
            


            <Header/>
<Hero/>
<Xai/>
{/* <Xaiplatform/> */}
<OxiDevploymentProcess/>
<EvaluationProcess/>
<Boost/>
<Usecases/>
<Getstarted/>
<Footer/>

        </div>
    )
}

export default Oxaipage
