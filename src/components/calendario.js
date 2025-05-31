import React from 'react'
import Image from 'next/image'


export default function calendario ({titulo}) {
    return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className='text-3xl font-bold'>{titulo}</div>
        </div>
        
    </>
  )
}
