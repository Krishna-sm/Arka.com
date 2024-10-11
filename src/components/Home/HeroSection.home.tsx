import React from 'react'
import LinkButton from '../reuseable/LinkButton'
import QRCodePng from '@/assets/icons/qr_code 1.png'
import SMVLogo from '@/assets/Header section/smvlogo.png'
import Image from 'next/image'
import { RiMessage2Fill } from 'react-icons/ri'
import AppStoreImage from '@/assets/Header section/btn_appstore.png'
import PlayStoreImage from '@/assets/Header section/btn_playstore.png'
const HeroSectionHomePage = () => {
  return (
   <div className="relative w-full h-screen overflow-hidden">
  <video autoPlay loop muted className="absolute   top-0 left-0 w-full h-full object-cover">
    <source src="app.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <video autoPlay loop muted className="absolute  hidden lg:block top-0 left-20 w-full h-full object-cover">
        <source src="app.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted className="absolute  hidden lg:block top-0 left-72 w-full h-full object-cover">
        <source src="app.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  <div className="relative z-[8]   h-full"> 

        <button className=" hidden md:inline-flex absolute bottom-4 right-4 p-4 bg-white  rounded-full shadow-lg  items-center justify-center  text-3xl text-[--border2]">
          <RiMessage2Fill className='text-[--color1]' />
          <span className="absolute bottom-0 right-0 p-2 bg-[#268750] rounded-full shadow-md"></span>
          </button>
   
      <section className="text-gray-600 body-font  ">
  <div className=" mx-auto flex  md:flex-row flex-col items-center ">
            <div className="md:w-[60%] xl:w-[50%] py-10  lg:py-20  h-screen flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-2 md:px-10 xl:px-24 bg-white/20 transition-all duration-500 backdrop-blur-sm ">
              <h1 className="title-font  text-4xl  mb-4 font-heading-wi font-[800] text-black   lg:leading-[52px]">Invierte como los expertos, 
               
                <br className="hidden  lg:inline-block" /> sin serlo Invierte de forma 

                <br className="hidden  lg:inline-block" />inteligente y segur
      </h1>
              <p className="mb-4   leading-relaxed">Ofrecemos fondos de inversión con mejores rendimientos y las comisiones más competitivas del mercado para democratizar la inversión, mientras tu dinero trabaja para ti. Deja el trabajo duro a los expertos.</p>
      <div className="flex justify-center">
                <LinkButton title='Empieza Ya' link='/' />
      </div>

              {/* <div className="mb-3 py-3 w-full flex lg:justify-start justify-center  lg:items-start items-center mx-auto"> */}
                {/* <div className=" w-[60%] lg:w-[70%] xl:w-[60%] px-6 xl:px-2 flex flex-row items-center gap-x-5 border rounded-[8px] border-[--color9] py-3 ">
                  <h1 className='font-heading-wi font-[600] text-lg xl:text-xl text-black'>Descarga el App</h1>
                  <Image src={QRCodePng} alt='qr code' width={1000} height={1000} className=' w-[50%] md:w-[40%] lg:w-[50%]  rounded-sm'  />
                </div> */}

      {/* </div> */}
     <div className="w-full py-10 ">
     <p className='py-2 text-black'>Descarga el App</p>
<div className="flex    w-[30%] lg:w-[70%] xl:w-[30%] gap-x-4 gap-y-3  lg:flex-row ">

<Image src={AppStoreImage} width={1000} height={1000} alt='app store' className=' w-[100%] ' />

<Image src={PlayStoreImage} width={1000} height={1000} alt='playstore' className=' w-[100%] ' />

</div>
     </div>
        <div className="mb-3 flex items-center gap-x-3 pr-10 ">
                <p className='text-xs font-heading-wi font-[400]'>&quot;ARKA Global Funds Inc, Entidad Regulada y Supervisada por la Superintendencia del Mercado de Valores de Panamá. Licencia para operar como Sociedad de Inversión Abierta Paraguas Auto-administrada.&quot;</p>
                <Image src={SMVLogo} alt='smvlogo' height={1000} width={1000} className='w-' />
        </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
    </div>
  </div>
</section>

  </div>
</div>

  )
}

export default HeroSectionHomePage