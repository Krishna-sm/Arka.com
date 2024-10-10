import { StaticImageData } from 'next/image';
import Renta_VariableImage from '../assets/single-page-view/rental.svg';
import Renta_MixtaImage from '../assets/single-page-view/mixta.svg';
import Renta_FijaImage from '../assets/single-page-view/fija.svg';
import Renta_VisionImage from '../assets/single-page-view/vision-tech.svg';
import Renta_AgresivoImage from '../assets/single-page-view/activos.svg';
import Renta_LetrasImage from '../assets/single-page-view/letras.svg';
// icons
import Acciones_US from '@/assets/single-page-view/icons/Acciones US.png';
import Acciones_Int from '@/assets/single-page-view/icons/Acciones Int\'l.png';
import Acciones_Mercados from '@/assets/single-page-view/icons/Acciones Mercados Emergentes.png';
import Cash from '@/assets/single-page-view/icons/cash.svg';
import Otros from '@/assets/single-page-view/icons/Otros.svg';
import bonous_us from '@/assets/single-page-view/icons/bonous_us.svg';
import bonous_Corporativos from '@/assets/single-page-view/icons/Bonos Corporativos.svg';
import Mercados_Emergentes from '@/assets/single-page-view/icons/Frame 427320150.svg';
import apple from '@/assets/single-page-view/icons/apple.svg';
import microsoft from '@/assets/single-page-view/icons/microsoft.svg';
import Inc_google from '@/assets/single-page-view/icons/Inc_google.svg';
import nvdia from '@/assets/single-page-view/icons/nvdia.svg';
import meta from '@/assets/single-page-view/icons/meta.svg';
import Taiwan_semiconductor from '@/assets/single-page-view/icons/taiwan_semiconductor.svg';
import Tencent_c from '@/assets/single-page-view/icons/tencent_c.svg';
import Broadcom from '@/assets/single-page-view/icons/brodcom.svg';
import oracle from '@/assets/single-page-view/icons/oracle.svg';
import asml from '@/assets/single-page-view/icons/asml.svg';
import bitcoin from '@/assets/single-page-view/icons/bitcoin.svg';
import etherium from '@/assets/single-page-view/icons/etherium.svg';
import t_bill_blue from '@/assets/single-page-view/icons/t-bill blue.svg';
import t_bill_green from '@/assets/single-page-view/icons/t-bill-teal.svg';



export const ImageEnum ={
    'Acciones_US':Acciones_US,
    'Acciones_Int':Acciones_Int,
    'Acciones Mercados Emergentes':Acciones_Mercados,
    'Cash':Cash,
    'Otros':Otros,
    'Bonos US':bonous_us,
    'Bonos Corporativos':bonous_Corporativos,
    'Mercados_Emergentes':Mercados_Emergentes,
    'Apple':apple,
    'Microsoft':microsoft,
    'Alphabet Inc Google':Inc_google,
    'Nvidia Corp':nvdia,
    'Meta':meta,
    'Taiwan Semiconductors':Taiwan_semiconductor,
    'Tencent Holdings':Tencent_c,
    'Broadcom Inc':Broadcom,
    'Oracle':oracle,
    'ASML':asml,
    'Bitcoin':bitcoin,
    'Ethereum':etherium,
    'T-BILL':t_bill_blue,
    'T-BILL-TEAL':t_bill_green,
    'Bonos Internacionales':t_bill_green,
    'Bonos Mercados Emergentes':t_bill_green,


  }
  const ObjectData = (data:ObjectDataType)=>({ 
    'Retornos_Totales':data.Retornos_Totales ||365.8,

    Rendimientos_Anualizados:data.Rendimientos_Anualizados || 6.6,
    'Saldo_Inicial':data.Saldo_Inicial||'10,000',
    Saldo_Final:data.Saldo_Final||'55,990',
    Comisión_de_Rendimiento_desc:data.Comisión_de_Rendimiento_desc || 1.25,
    ...data
   
  })

  export interface ObjectDataType{
    main_image:StaticImageData,
    main_desc:string,
    up_graph_desc:string,
    down_graph_desc:string,
    note_graph:string,
    main_summery:string,
    value_summery:string,
    Rendimientos_Anualizados?:number,
    Saldo_Final?:string,
    Retornos_Totales?:string,
    Saldo_Inicial?:string,
    Clases_de_Activos?:{icon:StaticImageData,title:string,Asignación:number,desc?:string}[],
    Comisión_de_Administración:number,
    Comisión_de_Salida:number,
    Comisión_de_Rendimiento:number,
    color:string,
    Comisión_de_Rendimiento_desc?:number
  }
 export const data:any= {
    'Renta Variable':ObjectData({
        color:`#82B378`,
        main_desc:'La estrategia de este fondo de fondos se centra en invertir en una cartera internacional de fondos de acciones, proporcionando una diversificación amplia.',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción.`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,

        main_summery:'La estrategia de este fondo de fondos se centra en invertir principalmente en una cartera internacional de fondos de acciones (renta variable), lo que permite crear una cartera altamente diversificada. El rendimiento del fondo dependerá del comportamiento de los mercados bursátiles internacionales. Nuestro equipo de expertos analizará el entorno macroeconómico para identificar sectores y regiones que consideren más beneficiosos.',
            value_summery:`Diseñado para inversores que no tienen planeado retirar fondos en los próximos 9 años o más. Si puedes soportar fluctuaciones y comprendes que podría haber
    períodos de rendimiento deficiente a corto plazo, esta cartera podría ser adecuada para ti. `,
     main_image:Renta_VariableImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['Acciones_US'],
            title:`Acciones US`,
            Asignación:49.70
        },
        {
            icon:ImageEnum['Acciones_Int'],
            title:`Acciones Int'l`,
            Asignación:31.90
        },
        {
            icon:ImageEnum['Acciones Mercados Emergentes'],
            title:`Acciones Mercados Emergentes`,
            Asignación:15.90
        },
        {
            icon:ImageEnum['Otros'],
            title:`Otros`,
            Asignación:2.50,

        }
     ],
     Comisión_de_Administración:1.5,
     Comisión_de_Salida:1,
     Comisión_de_Rendimiento:10
    }),
    'Renta Mixta': ObjectData({
        color:`#4FA4C8`,
        main_desc:'La estrategia de este fondo de fondos incluye inversiones en bonos y acciones internacionales.',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,
        main_summery:'La estrategia de este fondo de fondos consiste en invertir en una cartera internacional que comprende tanto fondos de bonos (renta fija) como de acciones (renta variable). Esta estrategia proporciona una gran diversificación y flexibilidad al fondo. El rendimiento del fondo estará influenciado por el comportamiento de las tasas de interés y los mercados bursátiles internacionales. Nuestro equipo de expertos analizará el entorno macroeconómico para ajustar las inversiones entre los fondos de bonos y los de acciones, manteniendo así un equilibrio óptimo en la cartera.',
            value_summery:`Diseñado para inversores que es probable que necesiten su dinero en los próximos 3 a 9 años, o que se acerquen a la jubilación. Si eres relativamente cauteloso pero buscas un rendimiento que venga con un riesgo razonable, esta cartera podría ser adecuada para ti.`,
     main_image:Renta_MixtaImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['Acciones_Int'],
            title:`Acciones Int'l`,
            Asignación:23.30
        },
        {
            icon:ImageEnum['Acciones_US'],
            title:`Acciones US`,
            Asignación:21.52
        },
        {
            icon:ImageEnum['Bonos US'],
            title:`Bonos US`,
            Asignación:20.00
        },
        {
            icon:ImageEnum['Acciones Mercados Emergentes'],
            title:`Acciones Mercados Emergentes`,
            Asignación:15.00,

        },
        {
            icon:ImageEnum['Bonos Corporativos'],
            title:`Bonos Corporativos`,
            Asignación:11.30,

        },
        {
            icon:ImageEnum['Bonos Mercados Emergentes'],
            title:`Bonos Mercados Emergentes`,
            Asignación:5.80,

        },
        {
            icon:ImageEnum['Cash'],
            title:`Cash`,
            Asignación:3.00,

        }
     ],
     Comisión_de_Administración:1.25,
     Comisión_de_Salida:1,
     Comisión_de_Rendimiento:7.50
    }),
    'Renta Fija': ObjectData({
        color:`#EC9473`,
        main_desc:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,
        main_summery:'La estrategia de este fondo se centra en invertir en bonos internacionales, creando una cartera diversificada de bonos de grado de inversión. La cartera mantendrá un promedio de vencimiento de los bonos a corto y medio plazo (3 a 7 años); no obstante, nuestro equipo de expertos estará atento a oportunidades para ajustar este promedio con el fin de maximizar el rendimiento. El desempeño del fondo de Renta Fija dependerá de las decisiones de la Reserva Federal de Estados Unidos y del comportamiento crediticio de los bonos en la cartera.',
            value_summery:`Para inversores que necesitan su dinero en los próximos tres años o están jubilados. Esta cartera podría reducir el riesgo de pérdida de dinero a corto plazo, pero tampoco crecerá tanto como resultado.`,
     main_image:Renta_FijaImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['Bonos US'],
            title:`Bonos US`,
            Asignación:75.00
        },
        {
            icon:ImageEnum['Bonos Internacionales'],
            title:`Bonos Internacionales`,
            Asignación:15.00
        },
        {
            icon:ImageEnum['Bonos Mercados Emergentes'],
            title:`Bonos Mercados Emergentes`,
            Asignación:10.00
        },
        {
            icon:ImageEnum['Cash'],
            title:`Cash`,
            Asignación:3.00,
        }
     ],
     Comisión_de_Administración:1,
     Comisión_de_Salida:1,
     Comisión_de_Rendimiento:5,
     Comisión_de_Rendimiento_desc:1
    }),
    'Vision Tech':  ObjectData({
        color:`#4872FF`,
        main_desc:'El fondo Vision Tech se centra en invertir en compañías de tecnología de vanguardia alrededor del mundo.',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: Esta gráfica es hipotética. El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción.`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,
        main_summery:'La estrategia de este fondo consiste en invertir en mercados internacionales, específicamente en acciones de tecnología de vanguardia. El rendimiento del fondo dependerá del comportamiento del sector tecnológico a nivel mundial. Nuestro equipo de expertos analizará las tecnologías más prometedoras para construir una cartera diversificada de compañías con el potencial de liderar los mercados. ',
            value_summery:`Para inversores que necesitan su dinero en los próximos tres años o están jubilados. Esta cartera podría reducir el riesgo de pérdida de dinero a corto plazo, pero tampoco crecerá tanto como resultado.`,
     main_image:Renta_VisionImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['Apple'],
            title:`Apple`,
            Asignación:10
        },
        {
            icon:ImageEnum['Microsoft'],
            title:`Microsoft`,
            Asignación:10
        },
        {
            icon:ImageEnum['Alphabet Inc Google'],
            title:`Alphabet Inc Google`,
            Asignación:10
        },
        {
            icon:ImageEnum['Nvidia Corp'],
            title:`Nvidia Corp`,
            Asignación:10
        },
        {
            icon:ImageEnum['Meta'],
            title:`Meta`,
            Asignación:10
        },
        {
            icon:ImageEnum['Taiwan Semiconductors'],
            title:`Taiwan Semiconductors`,
            Asignación:10
        },
        {
            icon:ImageEnum['Tencent Holdings'],
            title:`Tencent Holdings`,
            Asignación:10
        },
        {
            icon:ImageEnum['Broadcom Inc'],
            title:`Broadcom Inc`,
            Asignación:10
        },
        {
            icon:ImageEnum['Oracle'],
            title:`Oracle`,
            Asignación:10
        },
        {
            icon:ImageEnum['ASML'],
            title:`ASML`,
            Asignación:10
        },
        {
            icon:ImageEnum['Cash'],
            title:`Cash`,
            Asignación:3.00
        },
     ],
     Comisión_de_Administración:2,
     Comisión_de_Salida:1,
     Comisión_de_Rendimiento:12,
     Comisión_de_Rendimiento_desc:2
    }),
    'Activos Digitales': ObjectData({
        color:`#4872FF`,
        main_desc:'Este fondo innovador invierte en activos digitales en Estados Unidos, como Bitcoin y Etherem.',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,
        main_summery:'La estrategia de este fondo se enfoca en invertir en letras del Tesoro de Estados Unidos con vencimientos de menos de 1 año. Estas letras son consideradas como uno de los instrumentos financieros más seguros a nivel mundial, respaldadas por el Gobierno de los Estados Unidos. Las agencias calificadoras de riesgo internacionales suelen otorgarles las calificaciones más altas. Los rendimientos están sujetos a las decisiones de la Reserva Federal de los Estados Unidos (el Banco Central del país). ',
            value_summery:`Para inversores que necesitan su dinero en los próximos tres años o están jubilados. Esta cartera podría reducir el riesgo de pérdida de dinero a corto plazo, pero tampoco crecerá tanto como resultado.`,
     main_image:Renta_AgresivoImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['Bitcoin'],
            title:`Bitcoin`,
            Asignación:70.00
        },
        {
            icon:ImageEnum['Ethereum'],
            title:`Ethereum`,
            Asignación:27.00
        },
        {
            icon:ImageEnum['Cash'],
            title:`Cash`,
            Asignación:3.00
        }
     ],
     Comisión_de_Administración:3,
     Comisión_de_Salida:1,
     Comisión_de_Rendimiento:1,
     Comisión_de_Rendimiento_desc:0
    }),
    'Letras del Tesoro US': ObjectData({
        color:`#A3B3E8`,
        main_desc:'La estrategia de este fondo se basa en invertir en letras del Tesoro de Estados Unidos con vencimientos de menos de 1 año.',
        up_graph_desc:`En la siguiente gráfica podremos observar cómo varía el rendimiento del fondo a través del tiempo:`,
        down_graph_desc:`Aviso: Esta gráfica es hipotética. El rendimiento en tiempo real incluye reajustes. Es una herramienta para comunicar información objetiva sobre el rendimiento y no debe ser vista como publicidad o promoción.`,
        note_graph:`Nota: Los rendimientos de la proyección son hipotéticos.`,
        main_summery:'La estrategia de este fondo se enfoca en invertir en letras del Tesoro de Estados Unidos con vencimientos de menos de 1 año. Estas letras son consideradas como uno de los instrumentos financieros más seguros a nivel mundial, respaldadas por el Gobierno de los Estados Unidos. Las agencias calificadoras de riesgo internacionales suelen otorgarles las calificaciones más altas. Los rendimientos están sujetos a las decisiones de la Reserva Federal de los Estados Unidos (el Banco Central del país). Nuestro equipo de expertos se dedicará a anticipar cambios en la política monetaria para determinar el plazo de vencimiento de la cartera que consideren más ventajoso.  ',
            value_summery:`Para inversores que necesitan su dinero en los próximos tres años o están jubilados. Esta cartera podría reducir el riesgo de pérdida de dinero a corto plazo, pero tampoco crecerá tanto como resultado.`,
     main_image:Renta_LetrasImage,
     Clases_de_Activos:[
        {
            icon:ImageEnum['T-BILL'],
            title:`T-BILL`,
            desc:'<p>(13 semanas)		 YTM <b style="color:#2F288B;">5.50%</b></p>',
            Asignación:70.00
        },
        {
            icon:ImageEnum['T-BILL-TEAL'],
            title:`T-BILL`,
            desc:'<p>(26 semanas)		 YTM <b style="color:#2F288B;">5.44%</b></p>',
            Asignación:27.00
        },
        {
            icon:ImageEnum['Cash'],
            title:`Cash`,
            Asignación:3.00
        }
     ],
     Comisión_de_Administración:0.75,
     Comisión_de_Salida:0,
     Comisión_de_Rendimiento:0,
     Comisión_de_Rendimiento_desc:0
    })
  };


 