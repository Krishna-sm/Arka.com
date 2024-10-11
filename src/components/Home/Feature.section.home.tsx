"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { BsShieldCheck } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Autoplay, Pagination } from 'swiper/modules';
import Features1 from '@/assets/Feature section/img_f32.png'
import Features2 from '@/assets/Feature section/img_f2.png'
import Features3 from '@/assets/Feature section/img_f3.png'
import Image, { StaticImageData } from 'next/image';
import BackgroundFeature from '@/assets/Feature section/bg_feature.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Ic1 from '@/assets/Feature section/ic_f1.svg'
import Ic2 from '@/assets/Feature section/ic_f2.svg'
import Ic3 from '@/assets/Feature section/ic_f3.svg'
const FeatureSectionHome = () => {
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
          margin-top:50px !important; 
        }
        .swiper-pagination-bullet {
          background: black;
        }
        
        .swiper-pagination-bullet-active {
          background: var(--color1);
          padding:2px 12px;
          border-radius:20px;
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

          <Swiper
              spaceBetween={30}
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
        // modules={[Pagination, Autoplay]}
              style={{ zIndex: 0 }}
              className="mySwiper"

              onSwiper={(swiper) => setSwiper(swiper)}
          >
              <SwiperSlide>
                            
          <Feature Icon={Ic1} src={Features1} title='Invierte en tus Metas' desc='Ofrecemos una amplia gama de fondos diseñados para ayudarte a alcanzar tus metas dentro del plazo que te propongas.' />
                </SwiperSlide>
              <SwiperSlide>
          <Feature Icon={Ic2} src={Features2} title='Desarrollamos un Perfil adaptado a tus necesidades únicas' desc='Invertimos los activos de nuestros usuarios en fondos ampliamente diversificado, basados en su perfil de riesgo.' />
              </SwiperSlide>
              <SwiperSlide>
          <Feature Icon={Ic3} src={Features3}  isReverse title='Autenticación Segura y Protección Avanzada' desc='ARKA cuenta con autenticación mediante verificación de correo electrónico, número móvil y biometría.
Nuestra prioridad es garantizar la máxima seguridad y protección de tu información personal.' />
              </SwiperSlide>
              
          </Swiper>

    </>
  )
}

export default FeatureSectionHome  


const Feature = ({ title, desc, isReverse, Icon, src }: { title: string, desc: string, isReverse?: boolean, Icon: StaticImport, src: StaticImageData })=>{
    return <>
    
        <section className="text-gray-600 body-font ">
        <div className={` mx-auto relative overflow-hidden rounded-3xl flex bg-[#F9FAFA] xl:px-5  ${isReverse ? 'md:flex-row-reverse' :'md:flex-row'} overflow-hidden flex-col items-center`}>
    <div className="xl:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
      style={{
        backgroundImage: 'url(/bg_feature.png)',
        // backgroundAttachment:"fixed",
        // backgroundPosition:'center',
        borderRadius:'5px'
      }}
    >
     
            <Image width={1000} height={1000} className="object-center rounded object-contain transition-all duration-300  " alt={title} src={src} />
    </div>
    <div className={`h-[410px] w-32 bg-[#F9FAFA]/[.2] bg-opacity-15 absolute   ${isReverse?'left-[55%] ':'left-[30%] bg-[#F9FAFA]/[.9]'} blur `}
     
    > 
</div>

    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-y-5">
            <div className="mb-2">
              <Image src={Icon} width={1000} height={1000} className='w-[60%] lg:w-full' alt={title} />
            </div>
                    {/* {Icon ? <Icon className='text-4xl text-black' /> : <HiOutlineArchiveBox className='text-4xl text-black' /> } */}
                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: title}} />
                 <div className="lg:w-[60%] xl:w-[70%]">
                 <p className="mb-8 leading-relaxed">{desc}</p>
                 </div>
       
    </div>
  </div>
</section>


    </>
}