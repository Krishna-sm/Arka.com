const KnowlegePageSlider = lazy(()=>import('@/components/knowledge-page/Slider'))
import LoadingComponent from '@/components/LoadingComponent'
import React, { lazy, Suspense } from 'react'

const KnowlegePage = () => {
  return (
    <>
                <div className="px-5 md:px-10 xl:px-24">
                        <div className="py-10 flex justify-center flex-col gap-y-5 text-center items-center">
                              <h1 className='  text-3xl lg:text-4xl xl:text-5xl font-heading-wi font-[800]'>Personal Finance</h1>
                              <p className='md:w-[96%] font-heading-wi font-[400] transition-all xl:text-lg duration-300 mx-auto lg:w-1/2 xl:w-[45%]'>Personal finance is the art of managing your money. How much
to save, where to invest and how to budget. None of us are born
knowing how to put together a smart, simple financial plan.
That’s why we’re here.</p>
                        </div>

            
        <Suspense fallback={<LoadingComponent/> }>
        
        <KnowlegePageSlider
              
              data={[{
                title:'Invertir 1: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics ofinvesting from us and we ll have you on the roadto investing in no time.'
              },
              {
                title:'Invertir 2: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics of investing from us and we\'ll have you on the road to investing in no time.'
              }, 
              {
                title:'Invertir 3: Conceptos básicos de inversión...',
                desc:'A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don\'t need...'
              }]}
              border='border-1'
              image='info_invest.png'
              /> 

<KnowlegePageSlider
              
              data={[{
                title:'Invertir 1: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics ofinvesting from us and we ll have you on the roadto investing in no time.'
              },
              {
                title:'Invertir 2: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics of investing from us and we\'ll have you on the road to investing in no time.'
              }, 
              {
                title:'Invertir 3: Conceptos básicos de inversión...',
                desc:'A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don\'t need...'
              }]}
              border='border-2'
              image='info_saving.png'
              /> 

<KnowlegePageSlider
              
              data={[{
                title:'Invertir 1: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics ofinvesting from us and we ll have you on the roadto investing in no time.'
              },
              {
                title:'Invertir 2: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics of investing from us and we\'ll have you on the road to investing in no time.'
              }, 
              {
                title:'Invertir 3: Conceptos básicos de inversión...',
                desc:'A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don\'t need...'
              }]}
              border='border-3'
              image='info_tax.png'
              /> 

<KnowlegePageSlider
              
              data={[{
                title:'Invertir 1: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics ofinvesting from us and we ll have you on the roadto investing in no time.'
              },
              {
                title:'Invertir 2: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics of investing from us and we\'ll have you on the road to investing in no time.'
              }, 
              {
                title:'Invertir 3: Conceptos básicos de inversión...',
                desc:'A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don\'t need...'
              }]}
              border='border-4'
              image='info_crypto.png'
              /> 

<KnowlegePageSlider
              
              data={[{
                title:'Invertir 1: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics ofinvesting from us and we ll have you on the roadto investing in no time.'
              },
              {
                title:'Invertir 2: Conceptos básicos de inversión...',
                desc:'Want to invest like a pro? Learn the basics of investing from us and we\'ll have you on the road to investing in no time.'
              }, 
              {
                title:'Invertir 3: Conceptos básicos de inversión...',
                desc:'A stock market crash can sound quite scary, and has historically been associated with significant losses. But crashes don\'t need...'
              }]}
              border='border-5'
              image='info_retirement.png'
              /> 

        </Suspense>

                </div>

    </>
  )
}

export default KnowlegePage


 