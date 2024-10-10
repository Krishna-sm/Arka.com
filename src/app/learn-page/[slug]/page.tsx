// import Charts from '@/components/Funds/Charts'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const Charts =dynamic(()=>import('@/components/Funds/Charts'),{
    ssr:false
})
import RentaVariableIamge from '@/assets/Potential section/ic_potential.png'
import Image from 'next/image'
import { IoIosArrowForward, IoIosInformationCircleOutline } from 'react-icons/io' 
import {data as ApIData, ObjectDataType} from '@/api-data/single-page'

import IcImage from '@/assets/Potential section/ic_p.png'
import AvSecurityImage from '@/assets/single-page-view/icons/av_secutiries.svg'
import StoneX from '@/assets/single-page-view/icons/stoneX.svg'
import NoDataFound from '@/components/invest-page/NoDataFound'
import CompositonIamge from '@/assets/single-page-view/icons/componsition_de_felt.svg'

const SlugPage = ({params}:{params:{slug:string}}) => {
  
  const data: { [key: string]: string } = {
    'Renta Variable': 'Crecimiento',
    'Renta Mixta': 'Balanceado',
    'Renta Fija': 'Conservador',
    'Vision Tech': 'Agresivo',
    'Activos Digitales': 'Agresivo',
    'Letras del Tesoro US': 'Ultra Conservador',
  };    
  
  const slug = params.slug.split("-").join(" ");
  const values = (): string | undefined => data[params.slug.split("-").join(" ")];

    const SinglePageData:ObjectDataType = ApIData[params.slug.split("-").join(" ")] ?? null;
 
  if(!SinglePageData){
    return <NoDataFound/>
  }
  return (
    <>
          <main className="px-4 md:px-10 xl:px-24">  


                <div className="py-10 flex flex-col gap-y-3">
                  <h1 className="  text-3xl xl:text-4xl font-heading-wi font-[800]"> {params.slug.split("-").join(" ")}: <span className=" " style={{
                    color:SinglePageData.color
                  }}>{values()|| 'Something'}</span> </h1>
          <p className="font-1-wi font-[300] text-lg w-full lg:w-[60%]">{SinglePageData.main_desc}</p> 
                </div>


            <Suspense fallback={<div>loading...</div>}>
          <Charts /></Suspense>
            <div className="py-4">

          <p className="italic text-sm font-1 mb-4">
            <i>{SinglePageData.down_graph_desc}</i>
          </p>

              
            </div>
        <div className="py-4 flex flex-col gap-y-4">
            <div className="w-full py-5 bg-white shadow-md flex rounded-md flex-wrap items-center gap-y-10">
              <div className=" w-full lg:w-1/2 px-10 border-r-2 gap-y-5 flex flex-col border-[#000]/5">
                  <div className="flex justify-between items-center ">
                    <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Retornos Totales</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">{SinglePageData.Retornos_Totales}%</p>
                  </div>
              <div className="flex justify-between items-center ">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Rendimientos Anualizadosd</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">{SinglePageData.Rendimientos_Anualizados}%</p>
              </div>
              </div>
            <div className=" w-full lg:w-1/2 px-10 border-r-2  gap-y-5 flex flex-col border-[#000]/5">
              <div className="flex justify-between items-center ">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'> Saldo Inicial</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">{SinglePageData.Saldo_Inicial}%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className=' text-xl lg:text-2xl font-1-wi font-[500]'>Saldo Final</p>
                <p className=" text-xl lg:text-2xl bg-[--color3] px-3 py-2 rounded-md font-1-wi font-[800]">{SinglePageData.Saldo_Final}%</p>
              </div>
            </div>
            </div>
          <p className="italic text-sm font-1-wi font-[300] mb-4">
            <i>{SinglePageData.note_graph}</i>
          </p>
        </div>

              <div className="py-5 px-6 rounded-md min-h-60 bg-white shadow-lg border">
                <div className="pb-3 border-b">
                  <div className="flex items-center justify-center gap-x-2">
                    <Image src={CompositonIamge} alt='image' className='' width={50} height={50} />
                  <h1 className="text-center font-heading-wi text-2xl  lg:text-3xl font-[700]">Composición del Fondo</h1>
                  </div>
                </div>
                <div className="py-3">
                  <div className='flex items-center justify-center  lg:justify-start gap-x-2'> <Image src={RentaVariableIamge} width={100} height={100} className=' w-[10%] lg:w-[3%] xl:w-[3%]' alt='image' /><h1 className=' text-lg lg:text-xl font-heading-wi font-[600]'>{slug}</h1></div>
            <p className="italic text-sm font-1 mb-4 py-4">
            {SinglePageData.main_summery}
            </p>
            <hr />
            <div className='flex items-center pt-3 justify-center  lg:justify-start gap-x-2'> 
              <h1 className=' text-lg lg:text-xl font-heading-wi font-[600] ' style={{
                color:SinglePageData.color
              }}>{data[slug]}</h1>
              </div>
            <p className="italic text-sm font-1 mb-4 py-4">
            {SinglePageData.value_summery}
            </p>
            
                </div>


                <div className="py-3 flex flex-col-reverse lg:flex-row justify-between items-start gap-y-6 gap-x-2 lg:px-10">
            <div className="w-full px-2   lg:px-4 flex flex-col gap-y-2">
              <div className="flex w-full font-1-wi font-[500]   text-[--color4] justfy-between items-center text-lg  lg:text-xl ">
                <p className=' w-full'>Clases de Activos</p>
                <p>Asignación</p>
                      </div>

                      {
                  SinglePageData.Clases_de_Activos &&     SinglePageData.Clases_de_Activos?.length>0 && SinglePageData.Clases_de_Activos.map((cur,i)=>{
                          return <div key={i} className="flex w-full font-1-wi font-[500] justfy-between items-center text-lg  gap-x-3 lg:text-xl ">
                            <div className=' w-full flex justify-start items-center gap-x-3'>
                                  <div className="py-2 m-0 p-0 w-[25%]  md:w-[10%] rounded-sm overflow-hidden scale-100   flex justify-center items-center px-2">
                                <Image src={cur.icon} width={1000} height={1000} className=' ' alt={`ic_${i}`}  />
                                  </div>
                                  <div className="flex flex-col w-full ">
                                  <p className=' text-sm lg:text-base font-1-wi font-[700]'>{cur.title}</p>
                                  <p className='text-sm' dangerouslySetInnerHTML={{__html:cur.desc||''}} />
                                  </div>
                              </div>
                            <div className='flex items-center  font-1-wi font-[600] gap-x-2 '>
                              <p>{cur.Asignación}%</p>
                              <IoIosArrowForward className='text-[--color4]' />
                            </div>
                          </div>
                        })
                      }

            </div>
            <div className=" w-full xl:w-1/2">  <Image className="object-cover object-center rounded" alt="hero" src={SinglePageData.main_image} width={1000} height={1000} /></div>
                </div>
              </div>


          

        <div className="py-5"></div>


                          <div className="flex items-start  flex-col lg:flex-row gap-x-20 gap-y-10 ">
          <div className=" w-full xl:w-1/2 py-10 border-t-[6px] shadow-lg border-t-[--color6] rounded-md px-10 ">
                          <div className="mb-3 ">
              <h1 className="font-heading-wi font-[700] text-3xl">Comisiones</h1>
              <hr className='mt-2 h-2'  />
              <div className="w-full flex justify-between items-center py-2 ">
              <h1 className="text-xl font-heading-wi font-[700]">Comisión de Administración </h1>
              <h1 className='text-xl font-heading-wi font-[700]'>{SinglePageData.Comisión_de_Administración}%</h1>
            </div>

           {SinglePageData.Comisión_de_Rendimiento>0 && <div className="w-full flex justify-between items-center py-2 ">
                <div className="flex flex-col">
                <h1 className="text-xl font-heading-wi font-[700] inline-flex items-center gap-x-2">Comisión de Rendimiento <IoIosInformationCircleOutline className='text-[--color5] text-2xl' />  </h1>
              <p className='text-[--color5] text-sm xl:text-base font-heading-wi font-[600]'>Menor a 1 año</p>

                </div>
              <h1 className='text-xl font-heading-wi font-[700] '>{SinglePageData.Comisión_de_Rendimiento}%</h1>
            </div>}
            {SinglePageData.Comisión_de_Salida>0 && <div className="w-full flex justify-between items-center py-2 ">
              <div className="flex flex-col">
              <h1 className="text-xl font-heading-wi font-[700] inline-flex items-center gap-x-2">Comisión de Salida  <IoIosInformationCircleOutline className='text-[--color5] text-2xl' /> </h1>

              
             { SinglePageData?.Comisión_de_Rendimiento_desc&& SinglePageData?.Comisión_de_Rendimiento_desc >=1 ? <p className='text-[--color5] text-sm xl:text-base font-heading-wi font-[700]'>Sobre el punto de referencia trimestral del {SinglePageData.Comisión_de_Rendimiento_desc}%</p>:<></>}


              </div>
              <h1 className='text-xl font-heading-wi font-[700] '>{SinglePageData.Comisión_de_Salida}%</h1>
            </div>}
                          </div>
          </div>
          <div className=" w-full xl:w-1/2  py-2 border-t-[6px] shadow-lg !border-t-[--border1]    rounded-md  px-6"> <div className="mb-3 py-2">
            <h1 className="font-heading-wi font-[700] text-3xl">Custodios</h1>
            <hr className='mt-2 h-2' />
            <div className="w-full flex justify-between items-center  ">
              <h1 className="text-xl font-heading-wi font-[700]">AV Securities </h1>
                <Image width={1000} height={1000} className='w-[10%]' alt='av_scri' src={AvSecurityImage} />
            </div>

            <div className="w-full flex justify-between items-center py-3 ">
              <h1 className="text-xl font-heading-wi font-[700]">StoneX </h1>
                <Image width={1000} height={1000} className='w-[10%]' alt='av_scri' src={StoneX} />
            </div>
          </div></div>
                          </div>
        <div className="py-10"></div>

          </main>
    </>
  )
}

export default SlugPage


//Menor a 1 año
//Sobre el punto de referencia trimestral del 1.25%