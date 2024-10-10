"use client";
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react' 
import { Popover, PopoverButton, PopoverPanel, Switch } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GoLock } from 'react-icons/go';
import LinkButton from './reuseable/LinkButton';
import Logo from './Logo';
import { RiMenu4Fill } from 'react-icons/ri';
import SideNavHeader from './Home/Sidebar/SideNav.header';
import { useDispatch, useSelector } from 'react-redux';
import { closeNav, MobileNavSelector, toggleNav } from '@/redux/slice/mobilenav.slice';
import { IoMdClose } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
import NavigateionImage from '@/assets/Navigation/img_nav.png'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import ICMeta from '@/assets/Navigation/ic-meta.png'
import IcNavInvest from '@/assets/Navigation/ic_investment-auto.png'
import IcTreasuries from '@/assets/Navigation/ic_treasries.png'
import IcInvensionGeneral from '@/assets/Navigation/ic_GE.png'
import IcCrypto from '@/assets/Navigation/ic_crypto.png'
const Header = () => {
    const mobileNav = useSelector(MobileNavSelector)
    const dispatch = useDispatch()
    const pathname = usePathname()
    const [enabled, setEnabled] = useState(false)
    const[megaMenu,setMegaMenu] = useState(false)
            useEffect(()=>{
                dispatch(closeNav({}))
            }, [pathname])


  return (
    <>
          <header className={`w-full py-4 shadow transition-all duration-300  ${mobileNav.isOpen?'sticky top-0 z-10 bg-white':''}  sticky top-0 z-[40] bg-white  lg:bg-transparent lg:backdrop-blur-md`}>
              <nav className="nav  px-10  md:px-16 xl:px-24 flex flex-row justify-between items-center">
                 <div className="flex items-center gap-x-3 md:gap-x-1">
                  <button onClick={() => dispatch(toggleNav({}))}   className={`outline-none flex  transition-all duration-300 border active:ring-2 active:ring-gray-300 rounded-full p-2 ${mobileNav.isOpen?'z-10':''} md:hidden`}>
                     {mobileNav.isOpen?
                          <IoMdClose className='text-2xl' />
                              : <IoMenu className='text-2xl' />  }
                        </button>
                        
                      <Logo className={mobileNav.isOpen ? 'z-10' : ''} />
                      <ul className="hidden md:flex items-center text-sm transition-all duration-300 xl:text-base gap-x-4 font-1-wi font-[400]">
                          <li>
                              {/* <DropDownMenu title='Invierte' 
                                        links={[
                                            {
                                                href:'/',
                                                title:'Insights',
                                                desc:'Lorem ipsum dolor sit amet.'
                                            },
                                            {
                                                href: '/',
                                                title: 'Insights',
                                                desc: 'Lorem ipsum dolor sit amet.'
                                            }
                                        ]}
                              /> */}
                              <Suspense fallback={null}>

                              <MegaInvestMenu title='Invierte'>
                              <div className=" mx-auto flex   pb-0   md:flex-row flex-col items-center">
    <div className="lg:max-w-sm  md:w-1/2 w-5/6  md:mb-0">
      <Image width={1000} height={1000} className="object-cover object-center rounded" alt="hero" src={NavigateionImage} />
    </div>
    <div className="lg:flex-grow md:w-1/2 px-10 pr-24 flex flex-col md:items-start md:text-left items-center text-center">
                                    <div className="flex w-full gap-x-10 items-start ">
                                        <div className="w-1/2 px-5">
                                        <p className="text-lg text-gray-500 py-2">CUENTAS</p>
                                            
                                            <hr />

                                                    <div className="flex flex-col py-4 gap-y-4">
                                                     
                                                             <Link href={'/metas'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={ICMeta} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base">Metas</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            <Link href={'/invest-page'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcTreasuries} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Treasuries</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            
                                                            <Link href={'/'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcInvensionGeneral} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Invension General</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            <Link href={'/'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcCrypto} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Crypto</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            
                                                    </div>


                                        </div>


                                        <div className="w-1/2 px-5">
                                        <p className="text-lg text-gray-500 py-2">TECHNOLOGIA</p>
                                            
                                            <hr />

                                                    <div className="flex flex-col py-4 gap-y-4">
                                                        <Link href={'/invest-page'} className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcNavInvest} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[600]  capitalize">inversions automatizadas</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            
                                                          
                                                    </div>


                                        </div>
                                    </div>
    </div>
  </div> 

                                </MegaInvestMenu> 
                              </Suspense>
                          </li>
                          <li>
                              <Link href={'/learn-page'}>Fondos</Link>
                          </li>
                          <li>
                              <Link href={'/knowledge-page'}>Educación</Link>
                          </li>
                                    <li>
                              {/* <DropDownMenu title='Conócenos'
                                  links={[
                                      {
                                          href: '/',
                                          title: 'Insights',
                                          desc: 'Lorem ipsum dolor sit amet.'
                                      },
                                      {
                                          href: '/',
                                          title: 'Insights',
                                          desc: 'Lorem ipsum dolor sit amet.'
                                      }
                                  ]}
                              /> */}
                                    <Suspense fallback={null}>
                                  <MegaInvestMenu title='Conócenos'> 
 
                 

  <div className=" mx-auto flex   pb-0   md:flex-row flex-col items-center">
    <div className="lg:max-w-sm  md:w-1/2 w-5/6  md:mb-0">
      <Image width={1000} height={1000} className="object-cover object-center rounded" alt="hero" src={NavigateionImage} />
    </div>
    <div className="lg:flex-grow md:w-1/2 px-10 pr-24 flex flex-col md:items-start md:text-left items-center text-center">
                                    <div className="flex w-full gap-x-10 items-start ">
                                        <div className="w-1/2 px-5">
                                        {/* <p className="text-lg text-gray-500 py-2">CUENTAS</p> */}
                                            
                                            {/* <hr /> */}

                                                    <div className="flex flex-col py-4 gap-y-4">
                                                     
                                                             <Link href={'/knowledge-page'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={ICMeta} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base">Conócenos</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            <Link href={'/invest-page'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcTreasuries} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Nuestra Filosofia</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            
                                                            <Link href={'/'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcInvensionGeneral} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Folleto Informativo</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            {/* <Link href={'/'}   className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcCrypto} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[500] text-base capitalize">Crypto</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link> */}
                                                            
                                                    </div>


                                        </div>


                                        {/* <div className="w-1/2 px-5">
                                        <p className="text-lg text-gray-500 py-2">TECHNOLOGIA</p>
                                            
                                            <hr />

                                                    <div className="flex flex-col py-4 gap-y-4">
                                                        <Link href={'/'} className="flex items-center justify-between w-full">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image src={IcNavInvest} alt='ic_meta' width={50}  height={50} className='rounded-md' />
                                                                    <h1 className="text-heading-wi font-[600]  capitalize">inversions automatizadas</h1>
                                                                </div>
                                                                        <FaArrowRight className='text-[--color1] text-xl' /> 
                                                            </Link>
                                                            
                                                          
                                                    </div>


                                        </div> */}
                                    </div>
    </div>
  </div> 

                                  </MegaInvestMenu>
                                    </Suspense>
                                    </li>



                          </ul>
                 </div>
              
                  <Link href={'/'}  className={`outline-none flex  transition-all duration-300 border-none rounded-md font-heading-wi font-[500] px-4 py-2 hover:bg-zinc-300 ${mobileNav.isOpen ? 'z-10' : ''} md:hidden`}>
                      Log in 
                  </Link>


                  <ul className="hidden md:flex items-center text-sm transition-all duration-300 xl:text-base gap-x-4 font-1"> 
                    
                      <li>
                          <Link href={'/'} className='flex items-center justify-center gap-x-1'>
                              <GoLock className='text-[--color1] text-lg' /> Iniciar Sesión
                          </Link>
                      </li>
                      <li>
                          
                          <LinkButton title='Empieza Ya' link='/' />
                      </li>
                  </ul>
                        </nav>
                </header>

          <SideNavHeader/>
          {/* <MegaInvestMenu/> */}
    </>
  )
}

export default Header



const DropDownMenu =({title,links}:{title:string,links?:{title:string,desc:string,href:string}[]})=>{
    return <Popover>
        <PopoverButton  className="   flex items-center gap-x-1   text-black focus:outline-none">
            {title} <MdKeyboardArrowDown />
        </PopoverButton>
        <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-[#f8f9ff] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-[20]"
        >
            <div className="p-3">

                {
                    links &&  links?.length>0 &&  links.map((cur, i) => {
                        return <Link key={i} className="block rounded-lg py-2 px-3 transition hover:bg-white" href={cur.href}>
                            <p className=" font-heading-wi font-[500] text-black">{cur.title}</p>
                            <p className="text-black/50">{cur.desc}</p>
                        </Link>
                    })
                }


            </div>

        </PopoverPanel>
    </Popover>

}


const MegaInvestMenu = ({ title, children }: { title: string, children ?:React.ReactNode})=>{

            const [menu,setMenu] = useState(false)


    return <>
        <div className=" cursor-pointer" 
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
        >
            <h1 
                className={`${menu ? 'border-b border-b-[--color1] cursor-pointer' : 'text-black'}  flex items-center gap-x-1    transition-all duration-300 focus:outline-none`}
                >
                {title} <MdKeyboardArrowDown />
            </h1>
            <div className={`w-full  ${!menu ? 'translate-y-[-200%]' : 'translate-y-0'} transition-all duration-500  mx-auto right-0 left-0 absolute top-20 z-[-1] py-0 min-h-[20vh] bg-white shadow-xl rounded-md `}>
                {children ? children : <div className="mx-auto text-5xl font-1 text-center">
                    MEGA MENU
                </div> }
            </div>
        </div>
    </>
}