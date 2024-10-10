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
const CardImageSectionHome = () => {
    const [swiper, setSwiper] = useState<any>(); 

    useEffect(() => {
        if (swiper) {
            swiper.update(); // Trigger an update after images are loaded.
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
          <div className="    py-10  ">
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

                  onSwiper={(swiper) => setSwiper(swiper)}
              >
                    {
                        [{
                          title:'Fondos Basados en tus Objetivos',
                          desc:'Innovadoras estrategias adaptadas a tu apetito al riesgo.'
                        },
              {
                title: 'Activos Digitales',
                desc: 'Podrás tener acceso a un fondo diversificado de criptomonedas.'
              }, {
                title: 'Letras del Tesoro US',
                desc: 'Maximice el potencial de sus fondos invirtiendo en Letras del Tesoro US respaldados por el gobierno de los Estados Unidos de América.'
              },
              {
                title: 'Fondo Vision Tech',
                desc: 'Tendrás acceso a las compañías de tecnología más importantes del mundo.'
              }].map((cur,i)=>{
                            return <SwiperSlide key={i}>
                                        {/* <InvestmentCard/> */}
                              <InvestmentCard src={`/card${i+1}.mp4`} title={cur.title} desc={cur.desc} />

                            </SwiperSlide>
                        })
                    }                        
          </Swiper>
          <div className="mt-5 btn flex items-center gap-x-2 text-xl lg:text-2xl">
                  <button onClick={() => swiper.slidePrev()} disabled={swiper?.isBeginning} className='py-2 px-2 '>
                      <HiOutlineArrowLeft className={` disabled:text-gray-500 text-[#2F288B]  `} /> 
                  </button>
                  <button onClick={() => swiper.slideNext()} disabled={swiper?.isEnd} className='py-2 px-2 '>
                      <HiOutlineArrowRight className={` disabled:text-gray-500 text-[#2F288B]  `} /> 
                  </button>
          </div>
          </div>

    </>
  )
}

export default CardImageSectionHome

const InvestmentCard = ({title,desc,link,src}:{title:string,desc:string,link?:string,src:string}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay was prevented:", error);
        }
      }
    };

    playVideo();
  }, []);
    return ( 
          <section className="p-4">
             <div className="p-4  border-radius-1 sm:mb-0 mb-6">
          {/* <Image width={1000} height={1000} alt="content" className="object-cover bg-[#EAE9FE] object-center h-full xl:max-w-lg w-full" src={src} /> */}
        <div className="rounded-lg h-98  overflow-hidden">
        <video ref={videoRef} autoPlay={true} playsInline loop  muted controls={false} src={src}></video>
        </div> 
              <div className="min-h-36">
              <h2 className="text-lg font-heading-wi font-[600] title-font text-gray-900  px-5 mt-5">{title}</h2>
 
 <p className="text-sm  font-heading-wi font-[400] leading-relaxed mt-0 py-2 px-2">{desc}</p>

              </div>
 <Link href={link ?? '/'} className='text-blue-500 text-base px-5 flex gap-x-2 items-center'>Más Información <IoArrowForwardOutline />  </Link>
      </div>
          </section>
    );
};
