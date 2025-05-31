import React from 'react'
import Image from 'next/image';

const subtitulo = ({titulo, ciudad, pais, subtitle}) => {
  return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className="w-full">
                <div className="flex flex-col gap-y-6">
                    <div className="text-4xl font-nunito font-bold">{titulo}</div>
                    <div className="text-3xl font-nunito font-semibold">{`${subtitle}`}</div>                  

                </div>
            </div>
        </div>
        
    </>
  )
}

export default subtitulo;