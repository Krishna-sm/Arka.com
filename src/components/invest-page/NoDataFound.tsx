import React from 'react'
import LinkButton from '../reuseable/LinkButton'

const NoDataFound = () => {
  return (
    <>
            <div className="px-5 xl:px-24 w-full py-24 min-h-60 bg-white">
                        <div className="w-full bg-[--color3] min-h-56 rounded-lg shadow-md">
                            <h1 className="text-xl lg:text-2xl text-center py-10 font-heading-wi font-[800]">No Data !</h1>
                              <div className="flex items-center justify-center">
                              <LinkButton link='/' title='GO Back' className='mx-auto'  />
                              </div>
                        </div>
            </div>
    </>
  )
}

export default NoDataFound