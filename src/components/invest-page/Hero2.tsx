import Image from 'next/image'
import React from 'react'
import Conainer2 from '@/assets/invest-page/Container2.png'
import Conainer from '@/assets/metas-page/mobile image.png'
import LinkButton from '../reuseable/LinkButton'
const Hero2 = ({isMeta}:{isMeta?:boolean}) => {
  return (
    <>
            <section className="text-black  body-font pb-24 pt-10">
                <div className="py-24">
                  <h1 className="text-3xl font-heading-wi font-[800] text-center">Investing For You, Managed By Us</h1>
                </div>
  <div className="container mx-auto flex px-5  md:flex-row flex-col-reverse items-center">
  
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className=" w-[96%]  lg:w-[80%] mx-auto flex flex-col gap-y-10">

                {
                  Array(3).fill(null).map((_,i)=>{
                    return  <div key={i} className="flex flex-col gap-y-2">
                      <p className="text-blue-500 font-heading-wi font-[800]">Step {i+1}</p>
                    <h1 className="text-lg font-heading-wi font-[800]">Tell Us a Little bit about yourself</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime temporibus assumenda, repellat laudantium rerum amet rem sit commodi debitis nulla!</p>
                  </div>
                  })
                }

               

               <div className="">
               <LinkButton title='Get Started'  className='text-sm' link='/' />
               </div>


          </div>


    </div>
    <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-full mb-10 md:mb-0">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <Image src={isMeta?Conainer:Conainer2} alt='iamge' width={1000} height={1000} />
    </div>
  </div>
</section>

    </>
  )
}

export default Hero2