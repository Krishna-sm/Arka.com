import React from 'react'
import { FaDribbble, FaFacebook, FaInstagram, FaMailBulk, FaTwitter, FaUserAlt } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { MdEmail, MdOutlineMailOutline } from 'react-icons/md'

const ContactSectionHomePage = () => {
  return (
    <>
    
          <section id='#contact' className=" text-[#2D2D2D] body-font mb-10 py-10  lg:px-10 bg-[#F8F9FF]">
              <div className="container mx-auto     gap-y-10 w-full md:w-[90%] px-6 lg:px-10   items-center shadow-md  rounded-xl flex flex-col py-10  bg-white ">

                        <div className="flex flex-col w-full">
            <h1 className="font-heading-wi md:text-start text-3xl text-center font-[700]">Let&apos;s get in Touch!</h1>
                      <p className='font-heading-wi font-[400] mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                        </div>


                        <div className="mb-4 w-full flex flex-col-reverse lg:flex-row items-start">
                      <div className=" w-full lg:w-1/2  flex flex-col pt-4 lg:pt-0 justify-between">
                                            <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-y-2">
                              <div className="flex   items-center gap-x-2">
                                  <IoCallOutline className='text-xl text-[--color1]' />
                                  <span>+01 1134558865</span>
                              </div>
                              <div className="flex   items-center gap-x-2">
                                  <MdOutlineMailOutline className='text-xl text-[--color1]' />
                                  <span>harish@gmail.com</span>
                              </div>
                                            </div>

                                            <div className="py-10    flex flex-col gap-y-4">
                                                <h1 className="font-heading-wi text-xl text-center lg:text-start font-[600]">Contact With Us</h1>
                            <div className="flex items-center justify-center lg:justify-start text-2xl gap-x-3">
                                        <button className='p-3 rounded-full bg-[#f8f9ff]'>
                                      <FaInstagram  />
                                        </button>
                                  <button className='p-3 rounded-full bg-[#f8f9ff]'>
                                      <FaDribbble />
                                  </button>
                                  <button className='p-3 rounded-full bg-[#f8f9ff]'>
                                      <FaFacebook />
                                  </button>
                                  <button className='p-3 rounded-full bg-[#f8f9ff]'>
                                      <FaTwitter />
                                  </button>
                            </div>

                                            </div>


                      </div>
                      <div className="lg:px-10 w-full lg:w-1/2 ">
                          <div className="mb-3 w-full flex flex-nowrap items-center gapx-2 border border-[#D8D8D8] bg-white rounded-md overflow-hidden">
                              <span aria-label='name' className='border-r border-r-[#D8D8D8] px-3'>
                                  <FaUserAlt className='text-[--color1] text-xl' />
                                        </span>
                              <input   id='name' type="text" className="w-full bg-transparent px-4 py-3   outline-none ring-0" placeholder='Full Name' />
                                    </div>

                          <div className="mb-3 w-full flex flex-nowrap items-center gapx-2 border border-[#D8D8D8] bg-white rounded-md overflow-hidden">
                              <span aria-label='email' className='border-r border-r-[#D8D8D8] px-3'>
                                  <MdEmail className='text-[--color1] text-xl' />
                              </span>
                              <input id='email' type="text" className="w-full bg-transparent px-4 py-3   outline-none ring-0" placeholder='Email' />
                          </div>
                                <div className="mb-3 flex justify-center lg:justify-start">
                              <button className='bg-[--color1] px-10 py-4 rounded-md text-white'>Submit</button>
                                </div>

                      </div>

                        </div>
              </div>
          </section>
    </>
  )
}

export default ContactSectionHomePage