import Image from 'next/image';
import React from 'react'

const CardSection = () => {

  const steps = [
    {
      title: "Paso 1",
      description: "Selecciona la meta en la cual deseas empezar a invertir.",
      image: require("@/assets/metas-page/paso1.png"), // Replace with your image URL
    },
    {
      title: "Paso 2",
      description: "Cuéntanos cuál es el monto de tu meta financiera y en cuántos meses deseas alcanzarla.",
      image: require("@/assets/metas-page/paso2.png"), // Replace with your image URL
    },
    {
      title: "Paso 3",
      description: "¡Listo! Después de estipular cuál debe ser tu aporte, podrás ver el desarrollo de tus inversiones.",
      image: require("@/assets/metas-page/paso3.png"), // Replace with your image URL
    },
  ];

  return (
    <>
          <div className="py-10 px-5 md:px-10 xl:px-24  bg-[#F6F6FC] ">
          <div className="py-10 pb-24 flex-col gap-y-3 flex">
                  <h1 className="text-4xl font-heading-wi text-center font-[800]">There&apos;s more to investing than just retirement.</h1>
                  <p className='text-center px-5 md:px-10 xl:px-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, est labore. Id animi nobis et est ullam quos autem aliquid, temporibus fugiat doloremqueId animi nobis et est ullam quos autem aliquid, temporibus fugiat doloremque?</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden py-6">
            <Image width={1000} height={1000} src={step.image} alt={`Step ${index + 1}`} className="w-full min-h-60 object-cover mb-4" />
              <div className=" p-4 px-5">

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
              </div>
          </div>
        ))}
      </div>

          </div>
    </>
  )
}

export default CardSection