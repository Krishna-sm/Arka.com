import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
// import AppStoreImage from '@/assets/Header section/btn_appstore.png'
// import PlayStoreImage from '@/assets/Header section/btn_playstore.png'
import Image from 'next/image'
import SMVLogo from '@/assets/Header section/smvlogo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import FooterQrCode from '@/assets/footer/qr code.svg'
const Footer = () => {
  return (
        <>
        
      <footer id='footer' className='py-10 footer bg-[#F6F6FC]  px-3  md:px-10 lg:px-24 flex flex-col lg:flex-row  items-center gap-y-10 gap-x-10 md:items-start w-full  justify-between relative'>
            {/* <img src="/Capa_1.png" className='absolute z-0 right-0' alt="" />
            <img src="/Capa_2.png" className='absolute z-0 left-0 opacity-20' alt="" /> */}

                  <div className="background-overlay"></div>

          <div className=" w-full flex flex-col gap-y-6 justify-between  items-center md:items-start  ">
          <div className=" "><Logo color='text-white' ImageClassName='!w-[80%] mx-auto lg:mx-0' /></div>
          <div className="w-full   flex items-start flex-col lg:flex-row gap-y-7  lg:items-center font-1 text-[--color8] gap-x-4  md:gap-x-10 justify-between  ">
            <ul className=' w-full text-center lg:text-start font-1 flex flex-col gap-y-3 '>
              <li className='font-heading-wi font-[700] text-lg'>Inversiones</li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Inversión General</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Crypto</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Metas</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Pa’ Ya</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Inversiones Automatizadas</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Fondos</Link>

              </li>
            </ul>
            <ul className=' w-full text-center lg:text-start font-1 flex flex-col gap-y-3'>
              <li className='font-heading-wi font-[700] text-lg'>Conócenos</li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Conócenos </Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Nuestra Filosofía</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Folleto Informativo</Link>

              </li>

            </ul>
            <ul className=' w-full text-center lg:text-start font-1 flex flex-col gap-y-3'>
              <li className='font-heading-wi font-[700] text-lg'>Ayuda</li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Habla con Nosotros</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Centro de Ayuda</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Preguntas más Frecuentes</Link>

              </li>

            </ul>
            <ul className=' w-full text-center lg:text-start font-1 flex flex-col gap-y-3'>
              <li className='font-heading-wi font-[700] text-lg'>Otros</li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Educación</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Seguridad</Link>

              </li>
              <li>
                <Link href={'/'} className='text-[--color1] font-heading-wi font-[400]'>Términos & Condiciones</Link>

              </li>

            </ul>
          </div>
          <div className="py-2 flex items-center gap-x-3">
            <a href=""><FaInstagram className='text-2xl text-[--color1]' /></a>
            <a href=""><FaFacebookF className='text-2xl text-[--color1]' /></a>
            <a href=""><FaXTwitter className='text-2xl text-[--color1]' /></a>
            <a href=""><FaLinkedinIn className='text-2xl text-[--color1]' /></a>
          </div>
          <p className="text-[#817DEA]">@{new Date().getFullYear()} Logo, All rights Reserve</p>
        </div>

        <div className="  w-full mx-auto transition-all duration-300 md:w-1/2 lg:w-[30%] xl:w-[20%] flex justify-start flex-col   items-center gap-y-2 lg:items-start px-4">
          <h1 className='font-1-wi font-[500] text-[--color8] text-lg text-start'>Get The App</h1>
          <div className="">
            {/* <div className='mb-3'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/640px-Download_on_the_App_Store_RGB_blk.svg.png" alt="" className='w-[40%] mx-auto lg:w-full' />
            </div>
            <div className='mb-3'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Google_Play_Store_badge_FR.svg/1200px-Google_Play_Store_badge_FR.svg.png?20220923165220" alt="" className='w-[40%] mx-auto lg:w-full' />
            </div> */}

            <div className="mb-3">
              <Image src={FooterQrCode} className=' w-[100%] mx-auto xl:w-full' alt='qrcode' width={1000} height={1000} />
            </div>
            <div className="py-4">
              <hr className="h-[2px] bg-[#9C9AD8] " />
            </div>
            <div className="mb-2">
              <Image src={SMVLogo} alt='smv-logo' width={1000} height={1000} className='w-[100%] mx-auto lg:w-full' />
            </div>
          </div>
        </div>
      </footer>
        </>
 
  )
}

export default Footer