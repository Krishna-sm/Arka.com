"use client";
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import CoinBagImage from '@/assets/Cards_Assets/Fondospara_img.png'
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Flipped, Flipper ,} from 'react-flip-toolkit'
const FundsDetails = () => {
  
      const data = [
        {
          title:'Letras del Tesoro US',
          smallTitle:'Ultra Conservador',
          desc:'El fondo se centra en la inversión de las letras del Tesoro de EE.UU. con vencimientos inferiores a 1 año.',
          color:'#91AAFF',
          image:require(`@/assets/Cards_Assets/1.png`),
          tabs:['Todos los Fondos','Acciones','Letras del Tesoro US']
        },
        {
          title:'Renta Fija',
          smallTitle:'Conservador',
          desc:'El enfoque de este fondo se centra en invertir en bonos internacionales, diversificando la cartera.',
          color:'#EC9473',
          image:require(`@/assets/Cards_Assets/2.png`),
          tabs:['Todos los Fondos','Bonos']

        },
        {
          title:'Renta Mixta',
          smallTitle:'Balanceado',
          desc:'La estrategia de este fondo de fondos incluye inversiones en bonos y acciones internacionales.',
          color:'#4FA4C8',
          image:require(`@/assets/Cards_Assets/3.png`),
          tabs:['Todos los Fondos','Acciones','Bonos',]

        },
        {
          title:'Renta Variable',
          smallTitle:'Crecimiento',
          desc:'La estrategia de este fondo de fondos se centra en invertir en una cartera internacional de fondos de acciones, proporcionando una diversificación amplia.',
          color:'#82B378',
          image:require(`@/assets/Cards_Assets/4.png`),
          tabs:['Todos los Fondos','Acciones','Bonos']

        },
        {
          title:'Vision Tech',
          smallTitle:'Agresivo',
          desc:'El fondo Vision Tech se centra en invertir en compañías de tecnología de vanguardia alrededor del mundo.',
          color:'#4872FF',
          image:require(`@/assets/Cards_Assets/5.png`),
          tabs:['Todos los Fondos','Acciones','Bonos','']

        },
        {
          title:'Activos Digitales',
          smallTitle:'Ultra Agresivo',
          desc:'Este fondo innovador invierte en activos digitales en Estados Unidos, como Bitcoin y Etherem.',
          color:'#7D75EE',
          image:require(`@/assets/Cards_Assets/6.png`),
          tabs:['Todos los Fondos','Acciones','Crypto']

        },
        {
          title:'Bonus Panama',
          smallTitle:'Crecimiento',
          desc:'La estrategia de este fondo de fondos se centra en invertir en una cartera internacional de fondos de acciones, proporcionando una diversificación amplia.',
          color:'#82B378',
          image:require(`@/assets/Cards_Assets/7.png`),
          tabs:['Todos los Fondos','Acciones','Bonos','Acciones y Bonos']

        }
      ]

    const tabs = ['Todos los Fondos','Acciones','Bonos','Acciones y Bonos','Crypto','Letras del Tesoro US']
  const [index,setIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('Todos los Fondos');
  const filteredCards = data.filter((cur) => cur.tabs.includes(selectedTab));
  return (
    <>

<div className="px-2   md:px-10 xl:px-24">
  
<div className="flex flex-col lg:flex-row items-center gap-x-3 py-10 ">
          <div className="w-[100%]">
            <h1 className="text-4xl xl:text-6xl font-heading-wi font-[800] text-[#23242A]">Fondos para Crecer tu
         <br className="sm:hidden md:block py-2" />   Patrimonio</h1>
         <p className="font-1 font-[400] py-4">Nuestra tecnología brinda al usuario acceso seguro y eficiente para la gestión de tus inversiones personales.</p>
          </div>
          <div className="w-[50%] mx-auto">
            <Image src={CoinBagImage} alt='CoinBagImage' width={2000} height={2000} />
          </div>
        </div>
          <div id='scroll-hidden' className="py-10 tabs overflow-auto">
                <ul className="flex items-center gap-x-1  ">
                
                {
                  tabs.map((cur,i)=>{
                    return <li key={i} onClick={()=>setSelectedTab(cur)} className={`text-sm ${selectedTab === cur ?'text-[--color1] border-b-2 border-b-[--color1]':''} select-none text-nowrap bg-[--color10] py-2 px-4 transition-all duration-300 cursor-pointer rounded-sm shadow`}>{cur}</li>
                  })
                }
                  
                  {/* <li className={`text-sm  bg-[--color10] py-2 px-4`}>Todos los Fondos</li>
                  <li className={`text-sm  bg-[--color10] py-2 px-4`}>Todos los Fondos</li>
                  <li className={`text-sm  bg-[--color10] py-2 px-4`}>Todos los Fondos</li> */}
                </ul>
                <hr className='my-1' />
          </div>

         
          <div className="flex  justify-center md:justify-start mx-auto py-10 items-center  flex-wrap gap-x-5 gap-y-10">
       
           
                        {
                          filteredCards.map((cur,i)=>{
                            return    <Flipped key={i}  spring='wobbly' flipId={`element-${i}`} stagger>
                            <Card color={cur.color} desc={cur.desc} smallTitle={cur.smallTitle} title={cur.title} src={cur.image}  />
                            </Flipped>
                          })
                        }
    </div>

</div>
    </>
  )
}

const Card = ({src,title,smallTitle,desc,color}:{src:StaticImageData,title:string,smallTitle:string,desc:string,color:string}) => {
  const slug = (str:string) => str.trim().split(" ").join("-")
  return (
    <div className="max-w-sm     overflow-hidden  transition-all duration-300  border-radius-1 cursor-pointer bg-white ">

<div className="block   bg-white shadow-secondary-1 dark:bg-surface-dark">
  <div className='relative'>
    <Image className="rounded-t-lg" src={src} alt={title} />
    <div className='absolute bottom-0  py-2 px-4 rounded-tr-lg text-white font-1-wi font-[500] text-base ' style={{
      backgroundColor:color
    }} >
      <span>{smallTitle}</span>
    </div>
  </div>
  <div className="py-6 px-4 text-surface  ">
    <h5 className="mb-2 text-xl font-heading-wi font-[800] leading-tight">{title}</h5>
    <p className="mb-4 font-wi">
    {desc}
    </p>

    <Link href={`/learn-page/${slug(title)}`} className='flex items-center gap-x-1 text-[#4872FF]'>
    Más Información <IoIosArrowRoundForward className='text-2xl' /> 
     </Link>
    
  </div>
</div>


    </div>
  );
};
export default FundsDetails