import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/heroSection'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import SpecialFeatures from '../components/specialFeatures'
import FAQSection from '../components/faq'
import TrialSection from '../components/TrialSection'

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[10%] bg-pink-400'>
        <Header/>
      </div>
      <div className='w-full h-[90%] bg-blue-400'>
        <HeroSection/>
      </div>
       <div className='w-full h-[80%] bg-yellow-400'>
         <AboutSection/>
       </div>
       <div className='w-full h-[70%]'>
        <FeaturesSection/>
       </div>
       <div className='w-full h-[60%]'>
        <SpecialFeatures/>
       </div>
       <div className='w-full h-[100%]'>
        <FAQSection/>
       </div>
      <div className='w-full h-[30%]'>
        <TrialSection/>
      </div>
      
    </div>
  )
}

export default HomePage
