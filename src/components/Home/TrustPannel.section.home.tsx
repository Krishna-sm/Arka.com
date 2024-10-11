import React from 'react'
import TrustUsersImage from '@/assets/testimonial/image2.png'
import Image from 'next/image'
const TrustPannelSectionHomePage = () => {
  return (
    <>
     <section className="text-[--color8] py-5 body-font">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col-reverse gap-y-10 items-center ">
    <div className="lg:flex-grow md:w-1/2 xl:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 md:mb-0 items-center text-center">
            <h1 className="font-heading-wi font-[800] sm:text-3xl lg:text-4xl text-3xl mb-4   text-gray-900">Registrada y regulada por la  
              <br className="hidden lg:inline-block" />Superintendencia del
              <br className="hidden lg:inline-block" />  Mercado de Valores de Panamá
      </h1>

    </div>
    <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 "
        // style={{
        //   backgroundImage:'url(/bg_trust.png)',
        //   backgroundSize:'full',
        //   backgroundRepeat:'no-repeat'
        // }}
    >
      <Image width={1000} height={1000} className="object-cover object-center rounded" alt="hero" src={TrustUsersImage} />
    </div>
  </div>
        <div className="px-5 py-5  flex flex-col gap-y-7 text-[#222222]">
    <p className="text-base lg:text-lg font-1-wi font-[400] w-full lg:w-[90%]">
            La Superintendencia de la Bolsa de Valores de Panamá supervisa y regula nuestras operaciones, garantizando transparencia y seguridad para los inversores. Nuestro respaldo por esta entidad asegura que cumplimos con los más altos estándares de control y vigilancia en el mercado financiero.
    </p>
          <p className="text-base lg:text-lg font-1-wi font-[400] w-full lg:w-[90%]">
            Entidad Regulada y Supervisada por la Superintendencia del Mercado de Valores de la República de Panamá. Licencia para operar como Sociedad de Inversión Auto-administrada. (Resolución)
          </p>
  </div>


</section>

    </>
  )
}

export default TrustPannelSectionHomePage