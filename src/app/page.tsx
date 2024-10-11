// import BigFrameSectionHomePage from '@/components/Home/BigFrame.section.home'

const BigFrameSectionHomePage = dynamic(()=>import('@/components/Home/BigFrame.section.home'),{
  ssr:false
})

import ContactSectionHomePage from '@/components/Home/Contact.section.home'
import ContactSectionHomagePage2 from '@/components/Home/Contact2.section.home'
// import CardImageSectionHome from '@/components/Home/CardImage.section.home'
const CardImageSectionHome = lazy(()=>import("@/components/Home/CardImage.section.home"))
import FeatureSectionHome from '@/components/Home/Feature.section.home'
import GetTheAppPageSectionHomePage from '@/components/Home/GetTheAppPage.section.home'
import HeroHomeSection from '@/components/Home/Hero.section.home' 
import HeroSectionHomePage from '@/components/Home/HeroSection.home'
import StripeHomeSection from '@/components/Home/Stripe.section.home'
import TrustPannelSectionHomePage from '@/components/Home/TrustPannel.section.home'
import LoadingComponent from '@/components/LoadingComponent'
import dynamic from 'next/dynamic'
import React, { lazy, Suspense } from 'react'

const MainPage = () => {
 
  return (
    <>
        <HeroSectionHomePage/>
        <main className="px-2   md:px-10 xl:px-24">
        {/* <HeroHomeSection /> */}
        <div id='features' className="py-10 text-center flex flex-col gap-y-5">
          <h1 className="font-heading text-center  text-4xl md:text-6xl">¿Por qué Arka?</h1>
          <p className="font-1 mx-auto text-lg w-[98%] lg:w-[70%]">Arka utiliza la tecnología financiera para administrar tu cartera de inversión de una manera sencilla, accesible y segura. </p>
        </div>
        <FeatureSectionHome/>

      <div className="py-6">
      <hr />
      </div>
      </main>
        {/* <StripeHomeSection/> */}
        <BigFrameSectionHomePage/>
        <main className="px-2   md:px-10 xl:px-24">

        <div className="pt-14 text-center flex flex-col gap-y-5">
          {/* <p className="font-1 mx-auto tracking-wide  text-2xl w-[98%] text-center  uppercase">FONDOS SELECCIONADOS</p> */}

          <h1 className="font-heading text-center text-4xl md:text-5xl">Fondos para cada apetito de riesgo</h1>
          <p className="font-1 mx-auto  w-[98%] lg:w-[70%]">Arka hace accesible la inversión en mercados de capitales de Estados Unidos e Internacionales. Podrás invertir, desde Panamá, en fondos de inversión con comisiones bajas y sin costos ocultos. </p>
        </div>
        {/* <CardImageSectionHome/> */}

        <Suspense fallback={<LoadingComponent/>}>
          <CardImageSectionHome/>
          <GetTheAppPageSectionHomePage/>
        </Suspense>
        <TrustPannelSectionHomePage/> 
        {/* <ContactSectionHomePage/> */}
        <ContactSectionHomagePage2/>
        <div className="py-10"></div>
        
    </main>
        </>
  )
}

export default MainPage