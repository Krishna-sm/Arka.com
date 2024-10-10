"use client";
import { closeNav, MobileNavSelector } from '@/redux/slice/mobilenav.slice'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDroprightCircle, IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux'

const SideNavHeader = () => {
    const mobileNav= useSelector(MobileNavSelector)
    const dispatch = useDispatch()
type Links={
  link:string 
  text:string
}
    const links:Links[] = [ 
  {
    link: '/#features',
        text: 'Funciones'
  },
{
  link: '/learn-page',
  text: 'Fondos'
},{
  link: '/knowledge-page',
  text: 'Fondos Details'
},
{
  link:'/knowledge-page',
  text:'Knowledge Page',
  
},{
  link:'/invest-page',
  text:'Invest Page'
}]

  return (
    <ul id='scroll-hidden' className={`bg-white md:hidden ${mobileNav.isOpen ? 'translate-x-0' : 'translate-x-[-100%]'} w-[80%] fixed top-0 transition-all duration-700 z-[9] h-full overflow-y-auto py-10 `}>
      <div className="flex flex-col gap-y-4 mt-10 py-10 px-4">
        {/* <Link href={'/'} onClick={() => dispatch(closeNav({}))} className="w-full bg-white shadow-sm rounded-md py-2 px-4 flex items-center justify-between">
          <span className='text-[--color1] font-heading-wi font-[400]  text-lg md:text-xl hover:underline'>Home</span>
          <IoIosArrowForward  className='text-2xl text-[--color1]' />
        </Link>

        <Link href={'/#features'} onClick={() => dispatch(closeNav({}))}   className="w-full bg-white shadow-sm rounded-md py-2 px-4 flex items-center justify-between">
          <span className='text-[--color1] font-heading-wi font-[400]  text-lg md:text-xl hover:underline'>Features</span>
          <IoIosArrowForward  className='text-2xl text-[--color1]' />
        </Link>
        <Link href={'/funds-details'} onClick={() => dispatch(closeNav({}))} className="w-full bg-white shadow-sm rounded-md py-2 px-4 flex items-center justify-between">
          <span className='text-[--color1] font-heading-wi font-[400]  text-lg md:text-xl hover:underline'>Funds Details</span>
          <IoIosArrowForward  className='text-2xl text-[--color1]' />
        </Link>

        <Link href={'/funds'} onClick={() => dispatch(closeNav({}))} className="w-full bg-white shadow-sm rounded-md py-2 px-4 flex items-center justify-between">
          <span className='text-[--color1] font-heading-wi font-[400]  text-lg md:text-xl hover:underline'>Funds</span>
          <IoIosArrowForward  className='text-2xl text-[--color1]' />
        </Link> */}
        {
          links.map((cur,i)=>{
            return <Link key={i} href={cur.link} onClick={() => dispatch(closeNav({}))} className="w-full bg-white  rounded-md py-2 px-4 flex items-center justify-between">
              <span className='text-[--color1] font-heading-wi font-[600]  text-lg md:text-xl'>{cur.text}</span>
              {/* <IoIosArrowForward className='text-xl text-[--color4]' /> */}
            </Link>
          })
        }

        <SideNavItemWithExpend 
          title='Invierte'
            links={[{
              link:'/',
              text:'insights'
            }]}
        /> 
      </div>
    </ul>
  )
}

export default SideNavHeader


const SideNavItemWithExpend = ({links,title}:{title:string,links:{link:string,text:string}[]})=>{

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(links.map((c)=>c.link).includes(pathname))
  const mobileNav = useSelector(MobileNavSelector)
  const dispatch = useDispatch()

  return <>
    <div className="w-full flex flex-col gap-y-2">
      <div onClick={() => setIsOpen(!isOpen)} className="w-full bg-white  rounded-md py-3 px-4 flex items-center justify-between hover:bg-gray-100">
        <span className='text-[--color1] font-heading-wi font-[600]  text-lg md:text-xl cursor-pointer'>{title}</span>
        <IoIosArrowForward className={`text-xl text-[--color4] transition-all duration-300 ${isOpen?'rotate-90':''} `} />
      </div>
      <div className={`w-full bg-[--color7]  rounded-md py-2   px-4 min-h-7 flex flex-col  items-start justify-start border border-[--color7] ${isOpen ? '' :'h-0 hidden overflow-hidden '}`}>

              {
          links.map((cur,i)=>{
            return <Link onClick={() => dispatch(closeNav({}))}  href={cur.link} key={i} className="text-[--color1] font-heading-wi font-[500] w-full text-start  text-lg capitalize   py-2 ">{cur.text}</Link>
                })
              }

      </div>
    </div>
  </>
}