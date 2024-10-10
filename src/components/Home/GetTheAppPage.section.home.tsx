import React from 'react'
import AppStoreImage from '@/assets/Header section/btn_appstore.png'
import PlayStoreImage from '@/assets/Header section/btn_playstore.png'
import AppImage from '@/assets/download/Mockup.svg'
import Image from 'next/image'
import Logo from '../Logo'
const GetTheAppPageSectionHomePage = () => {
  return (
      <><section className="text-[--color8] body-font mb-10">
          <div className=" mx-auto flex  justify-between bg-[#F8F9FF] gap-y-10 w-full md:w-[95%]     md:flex-row flex-col-reverse items-center    rounded-xl ">
    <div className="lg:flex-grow md:w-1/3   flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start px-4 ">
      {/* <h1 className="font-heading-wi sm:text-5xl font-[700] text-3xl mb-4   text-gray-900">Get The App
      </h1> */}
      <Logo className='mx-auto md:mx-0 flex items-center w-[50%] md:w-[30%] justify-center md:justify-start' />
          <p className="mb-8 leading-relaxed text-center md:text-start text-[#2D2D2D]">La aplicación está disponible en App Store y <br className="hidden md:inline-block" /> Google Play. </p>
          <h1 className="font-heading-wi font-[800] text-center  mx-auto md:mx-0 mb-4 md:text-start">Descarga el App</h1>
                 
                 
                  <div className="flex flex-col md:flex-row gap-y-3 items-center md:items-start w-full gap-x-3"> 
              <Image src={AppStoreImage} width={1000} height={1000} alt='app store' className='  w-[50%] md:w-[30%] ' />
              <Image src={PlayStoreImage} width={1000} height={1000} alt='app store' className=' w-[50%]  md:w-[30%] ' />
                    
                     
                  </div>
    </div>
    <div className="lg:max-w-lg   lg:w-full md:w-1/2  flex justify-end items-start w-full ">
      <Image src={AppImage} width={1000} height={1000} className="object-cover object-center   rounded w-full" alt="hero"  />
    </div>
  </div>
</section>

      
      </>
  )
}

export default GetTheAppPageSectionHomePage