import Image from 'next/image';
import React from 'react'
import { IoMdStar } from 'react-icons/io';

const Feedback = () => {
    const testimonials = [
        {
          image: require("@/assets/invest-page/photo_1.png"), // Replace with actual image paths
          name: 'Jenny Wilson',
          company: 'Grower.io',
          rating: 5,
          feedback: 'Lorem ipsum dolor sit amet consectetur. Massa eget libero turpis tincidunt.',
        },
        {
          image: require("@/assets/invest-page/photo_2.png"), // Replace with actual image paths
          name: 'John Doe',
          company: 'Grower.io',
          rating: 5,
          feedback: 'Lorem ipsum dolor sit amet consectetur. Massa eget libero turpis tincidunt.',
        },
        // Add more testimonials here
      ];
  return (
    <>
  <section className="py-12 bg-gray-50 text-center xl:px-24">
      <h2 className="text-4xl font-heading-wi font-[800]  mb-2">What customers say about investing at  <br className='hidden lg:block' />Arka:</h2>
      <p className="text-blue-600 mb-8 font-heading-wi font-[600] text-lg">1M+ Happy Arka Users</p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Feedback



const TestimonialCard = ({ image, name, company, rating, feedback }:any) => {
    return (
     <>
     <div className="max-w-xl bg-white rounded-lg   p-6 flex">
      <Image 
        src={image} 
        alt={name} 
        className=" rounded-lg max-w-md object-cover mr-6" 
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-2">
            {Array(rating)
              .fill(null)
              .map((_, i) => ( 
                  <IoMdStar className='text-yellow-500  text-2xl' key={i} />  
              ))}
          </div>
          <p className="text-gray-700 text-sm mb-4 text-start">{feedback}</p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-900 font-semibold">{name}</h4>
          <span className="text-gray-400 ml-2">{company}</span>
        </div>
      </div>
    </div>
     </>
    );
  };
  