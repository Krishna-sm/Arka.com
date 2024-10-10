import React from 'react'

const CommentSection = () => {
  const benefits = [
    {
      title: "Seguimiento Controlado",
      description:
        "Nuestra plataforma se diferencia por su seguimiento controlado. Esta función le permite a los usuarios monitorear de manera detallada y precisa el rendimiento de sus inversiones, garantizando así un manejo eficiente del fondo seleccionado.",
    },
    {
      title: "Alertas Eficientes",
      description:
        "La plataforma se destaca por sus alertas efectivas, diseñadas para mantener a los usuarios informados sobre los cambios en el mercado. Esta función le permite a los inversionistas una toma decisiones rápida, maximizando así sus oportunidades de inversión.",
    },
    {
      title: "Gráficas Dinámicas",
      description:
        "Nuestra plataforma cuenta con una gran variedad de gráficas dinámicas, diseñadas para proporcionar a los usuarios una visualización clara en tiempo real del rendimiento de sus inversiones. Este tipo de herramienta permite analizar tendencias y comparar activos para detectar oportunidades de mercado de manera rápida y precisa.",
    },
    {
      title: "Diversificación",
      description:
        "Nuestra plataforma proporciona una amplia gama de activos, sectores y mercados donde los usuarios podrán distribuir sus inversiones. Esta característica está diseñada para minimizar el riesgo y maximizar el potencial de retorno.",
    },
  ];
  return (
    <>
        <div className="py-10 px-5 md:px-10 xl:px-24 ">
        <div className="py-10 pb-24 flex-col gap-y-3 flex">
        <h2 className="text-4xl font-heading-wi text-center font-[800]">Beneficios de usar Arka Metas</h2>
        <p className="text-gray-600 text-center">Puedes disfrutar de varios beneficios al usar Arka Metas, incluyendo los siguientes:</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {benefits.map((benefit, index) => (
          <div key={index} className={
            `
           bg-white p-6 rounded-lg shadow-md 
           ${
              index % 2 === 1 ? '' : ''
            }
            
            `
          }>
            <h3 className="text-2xl font-heading-wi font-[700] text-gray-800 mb-2">{benefit.title}</h3>
            <hr className='bg-black '  />
              <div className="py-2">
              <p className="text-gray-600">{benefit.description}</p>
              </div>
          </div>
        ))}
      </div>
        </div>
    </>
  )
}

export default CommentSection