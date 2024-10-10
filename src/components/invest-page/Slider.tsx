"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HiOutlineArchiveBox, HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import { BsShieldCheck } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Autoplay, Pagination } from 'swiper/modules'; 
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { IoArrowForwardOutline } from 'react-icons/io5';
import Image, { StaticImageData } from 'next/image';



const InvestPageSlider = () => {
    const [swiper, setSwiper] = useState<any>(); 
    const data:{title:string,desc:string}[]=[
      {
        title:'Años Dorados',
        desc:'Empieza a invertir en tu futuro.'
      },
      {
        title:'Viaje Soñado',
        desc:'Vuelve tus sueños una realidad.'
      },
      {
        title:'Hijos',
        desc:'Planea el futuro de tus hijos'
      },
      {
        title:'Casa Soñada',
        desc:'Empieza a invertir en el hogar de tus sueños.'
      },
      {
        title:'Navidad',
        desc:'Comienza a planificar la navidad invirtiendo'
      }
    ]

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    useEffect(() => {
      if (swiper) {
            swiper.update(); // Trigger an update after images are loaded.
            swiper.on('slideChange', (e: any) => {
               
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            });
        }
    }, [swiper]);
  return (
    <>  
          <style>
              {
                  `
       
        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #fff; 
          font-size: 24px;
        }
        .swiper-pagination-bullet {
          background: black;
        }
        
        .swiper-pagination-bullet-active {
          background: var(--color1);
          padding:2px 8px;
        }
@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    font-size: 14px; 
  }
}

@media (max-width: 480px) {
  .swiper-button-next,
  .swiper-button-prev {
    font-size: 6px;
  }



        `
              }
          </style>
          <div className=" py-10 px-5 md:px-10 xl:px-24  bg-[#F6F6FC] ">

                <div className="py-10 pb-24 flex-col gap-y-3 flex">
                  <h1 className="text-4xl font-heading-wi text-center font-[800]">There&apos;s more to investing than just retirement.</h1>
                  <p className='text-center px-5 md:px-10 xl:px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est labore. Id animi nobis et est ullam quos autem aliquid, temporibus fugiat doloremqueId animi nobis et est ullam quos autem aliquid, temporibus fugiat doloremque?</p>
                </div>



              <Swiper
                  spaceBetween={20}
                  centeredSlides={true}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{
                      clickable: true,
                      dynamicBullets: true,

                  }}
                  navigation={true}
                  modules={[Autoplay]}
                  style={{ zIndex: 0 }}
                  className="mySwiper"
            //   slidesPerView={3}
                  breakpoints={{
                      1024:{
                slidesPerView:4
              }}}
              
              onReachBeginning={() => setIsBeginning(true)}
              onReachEnd={() => setIsEnd(true)}
                  onSwiper={(swiper) => setSwiper(swiper)}
              >

  


                    {
                        data.map((cur,i)=>{
                            return <SwiperSlide key={i} >
                              <Card data={cur} id={i+1} />

                            </SwiperSlide>
                        })
                    }                        
          </Swiper>
          <div className="mt-10 btn flex items-center gap-x-2 text-xl lg:text-2xl">
                  <button onClick={() => swiper.slidePrev()} disabled={isBeginning} className='py-2 px-2 '>
                      <HiOutlineArrowLeft className={` disabled:text-gray-500 text-[#2F288B]  `} /> 
                  </button>
                  <button onClick={() => swiper.slideNext()} disabled={isEnd} className='py-2 px-2 '>
                      <HiOutlineArrowRight className={` disabled:text-gray-500 text-[#2F288B]  `} /> 
                  </button>
          </div>
          </div>

    </>
  )
}

export default InvestPageSlider

interface CardProps{
  id:any
  data:{
    title:string
    desc:string
  }
}
const Card = (props:CardProps) => {
    return ( 
     <>
         
          <div className="p-4">
          <div className="max-w-xs mx-auto bg-white rounded-lg border-radius-1 p-2">
      <Image src={require(`@/assets/invest-page/Group 24009${props.id}.png`)} alt={`title ${props.id}`} className="w-20 h-20 mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-center text-gray-800">{props.data.title}</h3>
            <div className="min-h-16">
            <p className="text-center text-gray-500 mt-2">{props.data.desc}</p>
      
            </div>
    </div>
          </div>
     </>
    );
};
