import React from 'react'

const StripeHomeSection = () => {
  return (
    <>
          <div className="container mx-auto pt-16">
 
  <div className="py-10 px-15 flex items-center justify-center flex-wrap border-t border-b">
                {
                    [
`https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png`,
`https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvNGY3Y2Q3OWYtNTRkNC00N2JiLWExZDEtMzRiMGFlMDY4N2YwL2h1YnNwb3Rsb2dvLXdlYi1jb2xvcl9hTjVLb1NRLnBuZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MjcsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjowfX19fQ==`,
`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png`,
`https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png`,
`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi0K_FxR0wFKEN0a48mydafOvX2kQhbwEug&s`,
`https://assets.website-files.com/63ee4e652398f23f7f803ab4/63ee4e652398f20d5f803de3_Fedex_logo.png`
                    ].map((cur,o)=>{
                        return <div key={o} className="w-6/12 xl:w-1/6 lg:w-1/4 md:w-1/4 flex justify-center   border-gray-200 xl:pb-10 pb-16 items-center">
                            <img src={cur} alt="" className='w-[50%]  mix-blend-luminosity hover:mix-blend-normal transition-all duration-300' />
                        </div>
                    })
                }
    
  </div>
</div>

    
    </>
  )
}

export default StripeHomeSection