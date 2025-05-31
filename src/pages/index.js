import Image from 'next/image';
import { DataAtlas } from '../../DataAtlas.js';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import { useRouter } from 'next/router';
import ReviewList from '../components/ReviewList';
import Mapa from '../components/mapa';
import mapImg from '../../public/landing/mapa.png';
import ModalSedeSelector from '../components/sedeSelector';
import { useSedeSelector } from '../context/SedeSelectorContext';
import ModalPhotoGallery from '../components/photoModal';


export default function Home() {
  const [lastClick, setLastClick] = useState('');
  const router = useRouter();
  const {pathname} = router;
  const [sedeInfo, setSedeInfo] = useState(() => {
    return DataAtlas.find((sede) => sede.id === 'slp');
  });
  const { openSedeSelector, setOpenSedeSelector } = useSedeSelector();
  const [openPhotoModal,setOpenPhotoModal] = useState(false)

  const handleSedeChange = (sedeId) => {
    const found = DataAtlas.find((sede) => sede.id === sedeId) ||
      DataAtlas.find((sede) => sede.id === 'slp');
    setSedeInfo(found);

    router.replace({
      pathname,
      query: {
        ...router.query,
        sede: sedeId,
      },
    }, undefined, {shallow: true});
  };

  useEffect(() => {
    if (!router.isReady) return;
    const sedeId = router.query.sede;

    if (sedeId) {
      handleSedeChange(sedeId);
    } else {
      handleSedeChange('slp');
    }
  }, [router.isReady, router.query.sede]);

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  if (!sedeInfo) return null;

  const {
    id,
    sede,
    description,
    city,
    state,
    country,
    rate,
    stars,
    ratings,
    mapUrl,
    mapDescription,
    amenities,
  } = sedeInfo;

  const images = Array.from({length: 4}, (_, i) => `/imgSlider/0${i + 1}.jpg`);
  const mobileImages = Array.from({ length: 14 }, (_, i) => `/imgSlider/${String(i + 1).padStart(2, '0')}.jpg`);

  return (
    <>
      {openSedeSelector && (
        <ModalSedeSelector
          onClose={() => setOpenSedeSelector(false)}
          onSelect={handleSedeChange}
        />
      )}
      {openPhotoModal &&  (
        <ModalPhotoGallery
          sede={sedeInfo?.id}
          onClose={() => setOpenPhotoModal(false)}
        />
      )}
      <section id="fotos" className="hidden lg:flex flex-col container md:py-12">
        <div className="relative w-full rounded-3xl overflow-hidden">
          <button
            onClick={() => setOpenPhotoModal(true)}
            className="-ft-2 absolute bg-white hover:bg-gray-100 hover:text-brand-2 bottom-8 right-8 text-brand-1 shadow-lg border border-brand-2"
          >Más imágenes
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative flex bg-gray-100 shadow pt-[100%]">
              <div onClick={() => setOpenPhotoModal(true)} className="absolute inset-0 flex cursor-pointer overflow-hidden">
                <img src={`/imgSlider/00.jpg`} className="object-cover object-center"/>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {images.map((src, idx) => (
                <div onClick={() => setOpenPhotoModal(true)} className="flex bg-gray-100 cursor-pointer overflow-hidden">
                  <img
                    key={idx}
                    src={src}
                    alt={`Imagen ${idx + 1}`}
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden">
        <div className="relative flex h-[50vh] w-full overflow-x-scroll snap-x snap-mandatory">
          <div className="w-max relative flex">
            <div className="w-[90vw] h-[50vh] flex cursor-pointer snap-center">
              <img src={`/imgSlider/${id}/00.jpg`} className="object-cover object-center"/>
            </div>
            {mobileImages.map((src, idx) => (
              <div className="w-[90vw] h-[50vh] flex cursor-pointer snap-center">
                <img
                  key={idx}
                  src={src}
                  alt={`Imagen ${idx + 1}`}
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-12 flex gap-8">
        <div className="flex-grow w-full lg:w-2/3 mb-20">
          <div className="max-w-[72rem]">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <div className="lg:w-2/3">
                <h2>En Microtel by Wyndham {sede} lo micro es el precio, lo macro, tu descanso.</h2>
                <p className="mt-4">{rate} <span className="text-yellow-400">{stars}</span> | {ratings} Reviews</p>
              </div>
              <div className="hidden lg:flex items-center lg:w-1/3">
                  <button
                    className="flex bg-brand-2 text-brand-1 hover:text-white rounded-full border border-yellow-500 shadow-md h-[4rem] px-8 items-center w-full"
                    onClick={() => setOpenSedeSelector(true)}
                  >
                    <p className="-ft-1 font-medium">¿Vas a otra ciudad?</p>
                  </button>
              </div>
            </div>

            <h3 className="mt-16 mb-12">Somos parte de la familia Wyndham Hotels & Resorts.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 border rounded-3xl">
              <div className="w-full flex flex-col md:border-r p-8">
                <div className="w-2/3 mx-auto flex-grow flex">
                  <img src="/landing/icon-2.png" className="w-full m-auto"/>
                </div>
                <p className="tracking-tight text-center mt-8">Plan de recompensas Wyndham Rewards</p>
              </div>
              <div className="w-full flex flex-col p-8">
                <div className="w-2/5 mx-auto flex flex-grow">
                  <img src="/landing/icon-3.png" className="w-full m-auto"/>
                </div>
                <p className="tracking-tight text-center mt-8">Estándares globales de limpieza y seguridad</p>
              </div>
              <div className="w-full flex flex-col md:border-l p-8">
                <div className="w-2/3 mx-auto flex-grow">
                  <img src="/landing/icon-1.png" className="w-2/3 mx-auto"/>
                </div>
                <p className="tracking-tight text-center mt-8">Mismo servicio y confianza en cualquier destino que nos visites.</p>
              </div>
            </div>

            <div id="description" className="border-y py-16 w-full">
              <p dangerouslySetInnerHTML={{__html: description}}/>
            </div>

            <div id="amenities" className="border-t py-16 w-full">
              <h2 className="mb-16">Lo que hace especial tu estancia.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {amenities.map(({key, value}) => (
                  <div className="w-full flex items-center gap-8">
                    <div className="w-1/6">
                      <div className="relative w-2/3 mx-auto pt-[100%]">
                        <Image src={`/icons/${key}.png`} layout="fill" className="object-center object-contain"/>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:block md:w-1/3">
          <div className="sticky top-36 mb-20">
            <div className="w-full mb-8 p-8 rounded-2xl shadow-lg bg-white">
              <p className="condensed font-bold text-center">🚨 Reserva en este sitio y obtén la mejor tarifa</p>
            </div>
            <div className="w-full p-8 rounded-2xl shadow-lg bg-white">
              <OptInForm
                city={sedeInfo.id}
                onSedeChange={handleSedeChange}
              />
            </div>
          </div>
        </div>

      </section>

      <section className="w-full py-8 bg-white shadow-lg border-t sticky bottom-0 lg:bottom-auto top-0 z-[50]">
        <div className="container flex justify-center lg:justify-between">
          <div className="hidden lg:flex items-center gap-8">
            <a href="#fotos" className="ft-0">Fotos</a>
            <a href="#description" className="ft-0">Descripción</a>
            <a href="#amenities" className="ft-0">Amenidades</a>
          </div>
          <div
            className="flex w-full lg:w-1/6 bg-brand-2 text-brand-1 rounded-lg border border-green-800 shadow-xl h-[4.2rem] px-8 items-center">
            <a href="#form" className="-ft-1 w-full text-center font-medium">Selecciona tus fechas</a>
          </div>
          </div>
      </section>

      <section className="container border-t py-20">
        <div className="md:w-1/3 mx-auto">
        <p className="ft-xxl font-bold text-center mb-8">4.5 ⭐</p>
          <p className="text-center">De calificación en nuestras reseñas.</p>
        </div>
        <ReviewList/>
      </section>

      <section className="container border-t py-20">
        <h2 className="mb-16">Donde vas a estar</h2>
        <Mapa
          ciudad={city}
          estado={state}
          sede={sede}
          pais={country}
          UrlMap={mapUrl}
          comentario={mapDescription}
        />
      </section>

      <section className="container border-t py-20">
        <h2>Siempre hay un Microtel cerca de ti</h2>
        <p className="mb-16">Todas nuestras sedes están estratégicamente ubicadas en zonas clave: industriales,
          comerciales, de eventos o aeropuertos.</p>
        <div className="relative w-full pt-[56%] rounded-2xl overflow-hidden">
          <Image src={mapImg} layout="fill" objectFit="cover"/>
        </div>
      </section>

      <section className="container flex justify-center border-t pt-16">
        <div className="flex w-full lg:w-1/3 justify-center mx-auto">
          <div id="form" className="mb-20">
            <div className="w-full mb-8 p-8 rounded-2xl shadow-lg bg-white">
              <p className="condensed font-bold text-center">🚨 Reserva en este sitio y obtén la mejor tarifa</p>
            </div>
            <div className="w-full p-8 rounded-2xl shadow-lg bg-white">
              <OptInForm
                city={sedeInfo.id}
                onSedeChange={handleSedeChange}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
