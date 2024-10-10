import Image from 'next/image'
import React from 'react'
import Conainer1 from '@/assets/invest-page/Container.png'
import LinkButton from '../reuseable/LinkButton'
const Hero1 = () => {
  return (
    <>
            <section className="text-gray-600 bg-[--color10] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <Image src={Conainer1} alt='iamge' width={1000} height={1000} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="w-[96%]  lg:w-[80%] mx-auto flex flex-col gap-y-6">

                {
                  Array(3).fill(null).map((_,i)=>{
                    return  <div key={i} className="">
                    <h1 className="text-lg font-heading-wi font-[800]">Expert Build Portfolio</h1>
                    <p>invest like a pro with deviserffied Portfolio (and skip the  hassle of picking stock)</p>
                  </div>
                  })
                }

                <div className=" bg-white rounded-md border border-b-4 flex flex-col gap-y-3  py-4 px-3 xl:p-5 border-b-gray-600">
                    <p className="font-heading-wi font-[600]">Lorem ipsum dolor sit amet consectetur Tempus</p>
                    <p className='font-heading-wi font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae illum nobis nostrum fugiat odit iure.</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt et nihil officia iure, magni sint error molestiae culpa. Ad?</p>

                </div>

               <div className="">
               <LinkButton title='Get Started'  className='text-sm' link='/' />
               </div>


          </div>


    </div>
  </div>
</section>

    </>
  )
}

export default Hero1