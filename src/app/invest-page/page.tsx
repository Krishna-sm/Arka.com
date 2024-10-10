import Feedback from '@/components/invest-page/Feedback'
import Hero1 from '@/components/invest-page/Hero1'
import Hero2 from '@/components/invest-page/Hero2'
import InvestPageSlider from '@/components/invest-page/Slider'
import React from 'react'

const InvestPage = () => {
  return (
    <>
             <div className="px-5 md:px-10 xl:px-24">
                        <div className="py-10 flex justify-center flex-col gap-y-5 text-center items-center">
                              <h1 className='  text-2xl lg:text-3xl xl:text-4xl font-heading-wi font-[800]'>Investing Should always be this easy</h1>
                              <p className='md:w-[96%] font-heading-wi font-[400] transition-all xl:text-lg duration-300 mx-auto lg:w-1/2 xl:w-[55%]'>Personal finance is the art of managing your money. How much
to save, where to invest and how to budget. None of us are born
knowing how to put together a smart, simple financial plan.
That’s why we’re here.</p>
                        </div>

                <Hero1/>
              
                <Hero2/>

                </div>
                <InvestPageSlider/>
             <div className="px-5 md:px-10 xl:px-24">

                <Feedback/>
                </div>
    
    </>
  )
}

export default InvestPage