import React from 'react'
import LinkButton from '../reuseable/LinkButton'
import Image from 'next/image'
import AppStoreImage from '@/assets/Header section/btn_appstore.png'
import PlayStoreImage from '@/assets/Header section/btn_playstore.png'
const HeroHomeSection = () => {
  return (
    <>
            <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-14 md:flex-row gap-y-5 flex-col-reverse items-start">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font   text-3xl md:text-4xl xl:text-6xl mb-4 font-heading font-medium text-gray-900">Next-Gen <br  className=' hidden sm:block' />Smart <br /> Investment App
        </h1>
        <p className="mb-8 font-1">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center pb-10">
            <LinkButton title='Get Started' link='/' />
        </div>
        <div className="mb-3">
            <p className="font-heading-wi font-[500]  text-xl mb-3">
                Get The App
            </p>
                         <div className="flex flex-col gap-x-4 gap-y-3 lg:flex-row md:flex-col">

                  <a href="w-full">
                  <Image src={AppStoreImage} width={1000} height={1000} alt='app store' className=' w-[100%] ' />
                  </a>
                
                <a href="w-full">
                  <Image src={PlayStoreImage} width={1000} height={1000} alt='playstore' className=' w-[100%] ' />
                </a>

  {/* <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
    </svg>
    <span className="ml-4 flex items-start flex-col leading-none">
      <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
      <span className="title-font font-medium">Google Play</span>
    </span>
  </button>
  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0   md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
    </svg>
    <span className="ml-4 flex items-start flex-col leading-none">
      <span className="text-xs text-gray-600 mb-1">Download on the</span>
      <span className="title-font font-medium">App Store</span>
    </span>
  </button> */}
</div>

        </div>
        </div>
        <div className="lg:max-w-md xl:max-w-2xl lg:w-full ">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/3626X2414" />
        </div>
    </div>
    </section>

        </>
  )
}

export default HeroHomeSection