// components/ImageGrid.jsx
import Image from 'next/image'; // o 'react' si no usas Next.js

/**
 * ImageGrid muestra un arreglo de imágenes en un grid responsivo.
 *
 * @param {Array<{src: string, alt: string, width?: number, height?: number}>} images
 * @param {string} cols – clases Tailwind para controlar columnas (p. ej. 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3')
 * @param {string} gap – clases Tailwind para gap (p. ej. 'gap-4', 'gap-x-6 gap-y-8')
 */
export default function ImageGrid({ 
    images =[], 
    cols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4', 
    gap = 'gap-4' 
  }) {
  return (
    <div className={`grid ${cols} ${gap}`}>
      {images.map((img, idx) => (
        <div key={idx} className="relative w-full ">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width || 300}
            height={img.height || 200}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      ))}
    </div>
  );
}
