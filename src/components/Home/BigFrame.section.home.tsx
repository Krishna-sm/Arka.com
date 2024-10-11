"use client";
import React from 'react'
import GraphImage from '@/assets/home page/graph svg.svg'
import Image from 'next/image';
const BigFrameSectionHomePage = () => {
 


  return (
    <>
  
 <div className="w-full  background">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full  md:w-[30%] lg:pl-24 py-10 px-5 lg:px-0 lg:py-0">
          <img src="ic_p.png" width="64px" alt="Icon" className='mx-auto md:mx-0' />
          <h1 className="h1 font-heading-wi text-3xl font-[800] py-2">Puedes proyectar el potencial de tu inversión</h1>
          <p className="p">
          Descubre la magia del interés compuesto. Puedes comprobar tu potencial de inversión y rendimientos ingresando un depósito inicial, el monto de las contribuciones y la frecuencia de las mismas.
          </p>
        </div>
        <div className=" mx-auto w-full md:w-[70%] ">
          <Image alt='graph' src={GraphImage} width={1000} height={1000} className='w-full' />
                
        </div>
      </div>
    </div>

    
    
    </>
  )
}

export default BigFrameSectionHomePage ;