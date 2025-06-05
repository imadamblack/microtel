import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { DataAtlas } from '../../DataAtlas';

export default function ThankYou({city}) {
  const router = useRouter();
  const {query} = router;

  const {whatsapp} = DataAtlas.find((sede) => sede.id === city);

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
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
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

export async function getServerSideProps(ctx) {
  const {req, res} = ctx;
  const leadCookie = getCookie('lead', {req, res}) || '{}';

  const lead = JSON.parse(leadCookie);

  return {
    props: {city: lead.city || 'slp'},
  };
}
