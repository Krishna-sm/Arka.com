import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
// import AppStoreImage from '@/assets/Header section/btn_appstore.png'
// import PlayStoreImage from '@/assets/Header section/btn_playstore.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='py-10 bg-[--color1]  px-3  md:px-10 lg:px-24 flex flex-col md:flex-row  items-center gap-y-10 md:items-start justify-between'>
              <div className=" w-[96%] md:w-[70%] flex flex-col gap-y-6  items-center md:items-start">
        <div className=""><Logo color='text-white'  ImageClassName='!w-[80%]'/></div>
        <ul className=" flex items-center font-1 text-white gap-x-4  md:gap-x-10 justify-center  ">
          <li className='font-1'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='font-1'>
            <Link href={'/'}>About</Link>
          </li>
          <li className='font-1'>
            <Link href={'/'}>pricing</Link>
          </li>
          <li className='font-1'>
            <Link href={'/'}>offering</Link>
          </li>
          <li className='font-1'>
            <Link href={'/'}>Invest</Link>
          </li>
        </ul>
              <p className="text-gray-300">@{new Date().getFullYear()} Logo, All right Reserve</p>
        </div>

<div className="">
      <h1 className='font-1 text-white text-lg'>Get The App</h1>
      <div className="mb-2">
          <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" className='w-[135px] h-[40px] object-cover' />
          {/* <Image src={AppStoreImage} width={1000} height={1000} alt='app store' className=' w-[100%] ' /> */}
      </div>
        <div className="mb-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" alt="" className='w-[135px] h-[40px] object-cover' />
          {/* <Image src={PlayStoreImage} width={1000} height={1000} alt='app store' className=' w-[100%] ' /> */}
        </div>
</div>
    </footer>
  )
}

export default Footer