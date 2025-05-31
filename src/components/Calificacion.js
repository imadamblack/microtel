import React from 'react'
import Image from 'next/image'
import i01 from '../../public/certi/Certificacion-green-2.png'
import i02 from '../../public/certi/Plan de Reconpensas.png'
import i03 from '../../public/certi/Marca internacional.png'

export default function Calificacion ({t_01, t_02, t_03, alto = 64, ancho = 64}) {
    return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className="w-full p-6">
                <div className="flex flex-col gap-y-6 ">
                    
                    <div className="flex items-center gap-x-4 flex-row border border-gray-300 rounded-2xl p-8 px-10 justify-around  ">
                        <div className="flex flex-col items-center">
                            <Image
                                src={i01}
                                height={alto}
                                width={ancho}
                                alt="certificacion Green nivel 2"
                            />
                            <div className="text-2xl font-nunito font-semibold">{`${t_01}`}</div>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-gray-300 px-0"></div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={i02}
                                height={alto}
                                width={ancho}
                                alt="Arte"
                            />
                            <div className="text-2xl font-nunito font-semibold">{`${t_02}`}</div>
                        </div>
                        <div className="w-px h-16 bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <Image
                                src={i03}
                                height={alto}
                                width={ancho}
                                alt="Arte"
                            />
                            <div className="text-2xl font-nunito font-semibold">{`${t_03}`}</div>
                        </div>
                    </div>
                                       

                </div>
            </div>
        </div>
        
    </>
  )
}
