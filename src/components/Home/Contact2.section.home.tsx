import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WhatsApp from '@/assets/icons/whatsapp.png'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Instagram from '@/assets/Social proof/instagram.svg';
import Linkedin from '@/assets/Social proof/linkedin.svg';
import Twitter from '@/assets/Social proof/twitter-old.svg';
import Youtube from '@/assets/Social proof/youtube.svg';
const ContactSectionHomagePage2 = () => {

    

            
  return (
      <div className='py-24 w-full bg-[#F8F9FF] rounded-lg px-2 lg:px-[60px]'>
                    <div className="w-full px-5 lg:px-16 flex flex-col gap-y-4 py-16 bg-white rounded-lg">
                            <div className="mb-3">
                  <h1 className="font-heading-wi font-[700] text-3xl text-[--color8] text-center lg:text-start">¡Contáctanos ahora!</h1>
                            </div>
                            <div className="mb-3">
                  <p className="text-base lg:text-lg font-heading-wi font-[400]">
                      ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte. Contáctanos para recibir un soporte rápido y amigable.
                                </p>
                            </div>
                            <div className="lg:py-14 flex flex-col lg:flex-row items-center gap-x-10">
                  <div className=" w-full lg:w-1/2 ">
                      <button   className={`flex items-center bg-[--color1] justify-center gap-x-3 text-nowrap px-10 lg:px-[50px] py-3 lg:py-[16px] text-white rounded-md font-heading-wi font-[600] mx-auto lg:mx-0`} >
                          <Image className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' width={100} height={100} src={WhatsApp} alt='whatsapp image' />
                          <span className='text-[--color7] text-base  md:text-lg'>Chatea con Nosotros</span>
                      </button>
                  </div>
                  <div className=" w-full lg:w-1/2 flex flex-col py-5 lg:py-0">
                                <div className="mb-3">
                          <h1 className="font-heading-wi font-[600] py-4 text-xl text-center lg:text-start text-[--color8]">Conéctate con nosotros</h1> 
                                </div>
                      <div className="flex items-center justify-center lg:justify-start text-3xl gap-x-5">
                       
                                    <div className="mb-3">
                                        <Image src={Instagram} alt='instagram' width={50} height={50} />
                                    </div>
                                    <div className="mb-3">
                                        <Image src={Linkedin} alt='Linkedin' width={50} height={50} />
                                    </div>

                                    <div className="mb-3">
                                        <Image src={Twitter} alt='Twitter' width={50} height={50} />
                                    </div>
                                    <div className="mb-3">
                                        <Image src={Youtube} alt='Youtube' width={50} height={50} />
                                    </div>

                          {/* <button className='p-3 rounded-full bg-[#F1EFFF]'>
                              <FaInstagram />
                          </button>
                          <button className='p-3 rounded-full bg-[#F1EFFF]'>
                              <FaLinkedin />
                          </button>
                          <button className='p-3 rounded-full bg-[#F1EFFF]'>
                              <FaYoutube />
                          </button>
                          <button className='p-3 rounded-full bg-[#F1EFFF]'>
                              <FaTwitter />
                          </button> */}
                      </div>
                    </div>

                            </div>
                    </div>
                    
    </div>
  )
}

export default ContactSectionHomagePage2