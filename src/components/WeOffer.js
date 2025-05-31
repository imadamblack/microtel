
import Image from 'next/image'; 
import ico01 from '../../public/Iconos/Desayuno.svg'; 
import ico02 from '../../public/Iconos/Wifi.svg';
import ico03 from '../../public/Iconos/Cama.svg'; 
import ico04 from '../../public/Iconos/Estacionamiento.svg';
import ico05 from '../../public/Iconos/Arte.svg'; 
import ico06 from '../../public/Iconos/Gym.svg'; 
import ico07 from '../../public/Iconos/Game.svg'; 
import ico08 from '../../public/Iconos/Streaming.svg';

const WeOffer = () => {
    const OfferByPlace = [
        {
            icon: ico01, 
            descripcion: 'Desayuno buffet en cortesia'
        },
        {
            icon: ico02, 
            descripcion: 'Wifi'
        },
        {   icon: ico03,
            descripcion: 'Blackout + menú de almohadas'
        },
        {
            icon: ico04, 
            descripcion: 'Estacionamiento gratis'
        },
        {
            icon: ico05, 
            descripcion: 'Arte local en cada habitación'
        },
        {
            icon: ico06, 
            descripcion: 'Gimnasio con equipo Life Fitness'
        },
        {
            icon: ico07, 
            descripcion: 'Game station | Xbox | bar'
        },
        {
            icon: ico08, 
            descripcion: 'Streaming + USB + Puertos en habitaciones'
        },
    ];

    return (
        <>
            <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full  py-6' >
                <h3 className="text-5xl font-nunito font-semibold pb-8">Todo esto viene incluido. Porque así debe ser.</h3>

                {OfferByPlace.map((item, index) => (
                    <div key={index} className="w-full flex flex-row items-center gap-4 py-4">
                        
                        {/* Ajusta w y h según el tamaño deseado para el icono */}
                        <div className='relative w-[34px] h-[34px] p-0 overflow-hidden rounded'> 
                            <Image
                                src={item.icon} 
                                alt={`Icono para ${item.descripcion}`} 
                                layout="fill" // Para que la imagen llene el div contenedor
                                objectFit="contain" // <-- O 'contain', para que la imagen se ajuste sin deformarse
                            
                            />
                        </div>
                        <div>
                            <div className='text-3xl '>{item.descripcion}</div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}

export default WeOffer;