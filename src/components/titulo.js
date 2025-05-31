// Tu componente 'titulo' (probablemente renombraría a algo más descriptivo, como 'PageHero' o 'SectionWithSlider')
import React from 'react';
// No necesitas importar 'Image' de Next.js si el slider maneja las imágenes
import ImageSlider from './ImageSlider.js';
import Galeria from './Galeria.js';

const Titulo = ({ titulo, subtitle }) => { 
  const images = [
    { src: '/imgSlider/00.png', alt: 'Imagen 00', caption: 'Hermoso paisaje montañoso' },
    { src: '/imgSlider/01.png', alt: 'Imagen 01', caption: 'Atardecer en la playa' },
    { src: '/imgSlider/02.png', alt: 'Imagen 02', caption: 'Ciudad nocturna' },
    { src: '/imgSlider/03.png', alt: 'Imagen 03', caption: 'Río serpenteante' },
    { src: '/imgSlider/04.png', alt: 'Imagen 04', caption: 'Bosque en otoño' },
  ];

  return (
    <>
      <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative'>
        <div className="w-full">
          <div className="flex flex-row items-center  justify-between gap-y-2">
            <h2 className="text-3xl font-nunito font-bold">{`${subtitle} : ${titulo}`}
            </h2>
            {/*<p className="text-lg">{subtitle}</p>*/}
          </div>
        </div>
        <div className="md:hidden w-full h-[45vh] overflow-hidden rounded-xl relative mt-12">
            <ImageSlider
                images={images}
                interval={10000}
            />
        </div>
        <Galeria
        />
      </div>
    </>
  );
};

export default Titulo; // Te recomiendo usar 'Titulo' con mayúscula al inicio para componentes