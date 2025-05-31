import React from 'react'
import Image from 'next/image';
import { FiHome, FiUser} from 'react-icons/fi';

const caracteristicas = ({icono1, header1, description1, icono2, header2, description2, icono3, header3, description3,}) => {
  return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6' >
            <div className="w-full flex flex-row items-center gap-4 py-4">
                <div className='p-3 w-[34px]'>{icono1}</div>
                <div>
                    <div className='text-3xl font-bold'>{header1}</div>
                    <div className='text-2xl'>{description1}</div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center gap-4 py-4">
                <div className='p-3 w-[34px]'>{icono2}</div>
                <div>
                    <div className='text-3xl font-bold'>{header2}</div>
                    <div className='text-2xl'>{description2}</div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center gap-4 py-4">
                <div className='p-3 w-[34px]'>{icono3}</div>
                <div>
                    <div className='text-3xl font-bold'>{header3}</div>
                    <div className='text-2xl'>{description3}</div>
                </div>
            </div>
              
        </div>
        
    </>
  )
}

export default caracteristicas;