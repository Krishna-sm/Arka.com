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

interface KnowledgePageSliderProps{
    border:string
    image:string
    data:{title:string,desc:string}[]
}

const KnowlegePageSlider = (props:KnowledgePageSliderProps) => {
    const [swiper, setSwiper] = useState<any>(); 

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
          <div className=" py-10  ">
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
                slidesPerView:3
              }}}
              
              onReachBeginning={() => setIsBeginning(true)}
              onReachEnd={() => setIsEnd(true)}
                  onSwiper={(swiper) => setSwiper(swiper)}
              >

  
        <SwiperSlide>
                    <div className="p-4 min-h-[250px] rounded-md sm:mb-0 mb-6"
                        style={{
                          backgroundImage:`url(/Learn_Knowledge/${props.image})`,
                          backgroundSize:'cover'
                        }}
                    > 

                    </div>
</SwiperSlide>



                    {
                        props.data.map((cur,i)=>{
                            return <SwiperSlide key={i}>
                              <Card border={props.border}  title={cur.title} desc={cur.desc} />

                            </SwiperSlide>
                        })
                    }                        
          </Swiper>
          <div className="mt-5 btn flex items-center gap-x-2 text-xl lg:text-2xl">
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

export default KnowlegePageSlider

const Card = ({title,desc,border}:{title:string,desc:string,border:string}) => {
    return ( 
     <>
         
     <div className={`p-4   sm:mb-0 mb-6 rounded-t-md ${border}`}>
       
       <h2 className="text-2xl font-heading-wi font-[700] title-font text-[#32302F]  px-5 mt-5">{title}</h2>
              <p className='px-5 py-2 text-lg font-heading-wi font-[500]'>By Reynaldo Pescetto</p>
       <p className="text-base  font-heading-wi font-[400] leading-relaxed mt-0 py-2 px-5">{desc}</p>
      

     </div>
     </>
    );
};
