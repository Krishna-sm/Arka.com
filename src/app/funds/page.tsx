// import Charts from '@/components/Funds/Charts'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const Charts =dynamic(()=>import('@/components/Funds/Charts'),{
    ssr:false
})
import RentaVariableIamge from '@/assets/Potential section/ic_potential.png'
import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import IcPng from '@/assets/funds section/ic_1.png'
import PiePng from '@/assets/funds section/pie_chart.png'

const FundPage = () => {
  return (
    <>
          <main className="px-4 md:px-10">  


                <div className="py-10 flex flex-col gap-y-3">
                  <h1 className="  text-3xl xl:text-4xl font-heading-wi font-[800]"> Renta Variable: <span className="text-[--color2]">Crecimiento</span> </h1>
          <p className="font-1-wi font-[300] text-lg w-full lg:w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo ducimus ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. In, rem!</p> 
                </div>


            <Suspense fallback={<div>loading...</div>}>
          <Charts /></Suspense>
            <div className="py-4">

          <p className="italic text-sm font-1 mb-4">
            <i>lorem: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eaque reiciendis velit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta recusandae. </i>
          </p>

              
            </div>
        <div className="py-4 flex flex-col gap-y-4">
            <div className="w-full py-5 bg-white shadow-md flex rounded-md flex-wrap items-center gap-y-10">
              <div className=" w-full lg:w-1/2 px-10 border-r-2 gap-y-5 flex flex-col border-[#000]/5">
                  <div className="flex justify-between items-center ">
                    <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Raise Fund</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">365.8%</p>
                  </div>
              <div className="flex justify-between items-center ">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Gross Fund</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">6.8%</p>
              </div>
              </div>
            <div className=" w-full lg:w-1/2 px-10 border-r-2  gap-y-5 flex flex-col border-[#000]/5">
              <div className="flex justify-between items-center ">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>physical Fund</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">365.8%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Narrow Fund</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">6.8%</p>
              </div>
            </div>
            </div>
          <p className="italic text-sm font-1-wi font-[300] mb-4">
            <i>Note: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</i>
          </p>
        </div>

              <div className="py-5 px-6 rounded-md min-h-60 bg-white shadow-lg border">
                <div className="pb-3 border-b">
                  <h1 className="text-center font-heading-wi text-2xl  lg:text-3xl font-[500]">Compusation Fund</h1>
                </div>
                <div className="py-3">
                  <div className='flex items-center justify-center  lg:justify-start gap-x-2'> <Image src={RentaVariableIamge} width={100} height={100} className=' w-[10%] lg:w-[3%] xl:w-[3%]' alt='image' /><h1 className=' text-lg lg:text-xl font-heading-wi font-[600]'>Renta Variable</h1></div>
            <p className="italic text-sm font-1 mb-4 py-4">
              lorem: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eaque reiciendis velit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor adipisci autem optio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a deserunt beatae asperiores totam? Recusandae necessitatibus veritatis minus dicta facere dolore quae laudantium aperiam?
            </p>
            <hr />
            <div className='flex items-center pt-3 justify-center  lg:justify-start gap-x-2'> 
              <h1 className=' text-lg lg:text-xl font-heading-wi font-[600] text-[--color2]'>Carray Fun</h1>
              </div>
            <p className="italic text-sm font-1 mb-4 py-4">
              lorem: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eaque reiciendis velit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima soluta recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor adipisci autem optio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a deserunt beatae asperiores totam? Recusandae necessitatibus veritatis minus dicta facere dolore quae laudantium aperiam?
            </p>
            
                </div>


                <div className="py-3 flex flex-col-reverse lg:flex-row justify-between items-center gap-y-6 gap-x-2 lg:px-10">
            <div className="w-full px-2   lg:px-4 flex flex-col gap-y-2">
              <div className="flex w-full font-1-wi font-[500]   text-[--color4] justfy-between items-center text-lg  lg:text-xl ">
                <p className=' w-full'>Clases de Activos</p>
                <p>Asignación</p>
                      </div>

                      {
                        Array(5).fill(null).map((cur,i)=>{
                          return <div key={i} className="flex w-full font-1-wi font-[500] justfy-between items-center text-lg  gap-x-3 lg:text-xl ">
                            <div className=' w-full flex justify-start items-center gap-x-3'>
                                  <div className="py-2 m-0 p-0  w-[20%] md:w-[10%] lg:w-[15%] xl:w-[10%] bg-[--color6] rounded-xl flex justify-center items-center px-2">
                                <Image src={IcPng} width={100} height={100} className=' w-full  lg:w-[80%]  ' alt={`ic_${i}`} />
                                  </div>
                              <p className=' font-1-wi font-[700]'>Clases de Activos</p>
                              </div>
                            <div className='flex items-center  font-1-wi font-[600] gap-x-2 '>
                              <p>46.8%</p>
                              <IoIosArrowForward className='text-[--color4]' />
                            </div>
                          </div>
                        })
                      }

            </div>
            <div className="w-1/2">  <Image className="object-cover object-center rounded" alt="hero" src={PiePng} width={1000} height={1000} /></div>
                </div>
              </div>


          

        <div className="py-5"></div>


                          <div className="flex items-center  flex-col lg:flex-row gap-x-20 gap-y-10 ">
          <div className=" w-full xl:w-1/2 py-10 border-t-[6px] shadow-lg border-t-[--color6] rounded-md px-6 ">
                          <div className="mb-3 ">
              <h1 className="font-heading-wi font-[700] text-3xl">Comisiones</h1>
              <hr className='mt-2 h-2'  />
                          </div>
          </div>
          <div className=" w-full xl:w-1/2  py-10 border-t-[6px] shadow-lg !border-t-[--border1]    rounded-md  px-6"> <div className="mb-3 ">
            <h1 className="font-heading-wi font-[700] text-3xl">Custodios</h1>
            <hr className='mt-2 h-2' />
          </div></div>
                          </div>
        <div className="py-10"></div>

          </main>
    </>
  )
}

export default FundPage