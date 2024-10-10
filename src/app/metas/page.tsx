import React from 'react'
import LoadingComponent from '@/components/LoadingComponent'
import Hero2 from '@/components/invest-page/Hero2'
import InvestPageSlider from '@/components/invest-page/Slider'
import MetasMainImage from '@/assets/metas-page/hero1.png'
import Image from 'next/image'
import LinkButton from '@/components/reuseable/LinkButton'
import CardSection from '@/components/metas/CardSection'
import CommentSection from '@/components/metas/Comments'

const MetasPage = () => {
  // if(true){
  //   return <LoadingComponent/>
  // }
  return (
    <>
            
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex pl-5 md:pl-10 xl:pl-24 py-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-heading-wi font-[800] text-gray-900">Arka Metas
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed </p>
      <div className="flex justify-center">
        <LinkButton title='Empieza Ya' link='/' />
      </div>
    </div>
    <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src={MetasMainImage} />
    </div>
  </div>
</section>

        <CardSection/>
        <CommentSection/>

            <div className="px-5  md:px-10 xl:px-24">
                
            <Hero2 isMeta />
                </div>
            <InvestPageSlider/>
    </>
  )
}

export default MetasPage