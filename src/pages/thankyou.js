import { info } from '../../info';
import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  const {query} = router;

  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center gap-8">
        <h1 className="ft-8 text-center">
          Si no se abrió nuestra página de habitaciones
        </h1>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="button hover:scale-105 bg-brand-2 hover:bg-brand-3 ft-4 flex justify-center items-center "
            href={query?.forward}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Da click aquí
            <span className="text-white material-icons">arrow_back</span>
          </a>
          <a
            className="ft-2 py-3 px-6 rounded-lg items-center"
            href={`https://wa.me/${info.whatsapp.value}`}
          >
            <p className="text-green-600">
              O contáctanos por <span className="font-semibold">WhatsApp</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
