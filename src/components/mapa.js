const mapa = ({ ciudad, estado, pais, comentario, sede, UrlMap }) => {
  return (
    <div className='w-full'>
      <div className="text-3xl pb-8">{`${sede}, ${estado}, ${pais}`}</div>
      <div className="h-[500px] md:w-[100%] overflow-hidden rounded-3xl">
        {/* Reemplazamos la imagen por el iframe de Google Maps */}
        <iframe
          src={UrlMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="font-semibold mt-10">{`${ciudad}, ${estado}, ${pais} `}</p>
      <p className="-ft-1">{comentario}</p>
    </div>
  );
};

export default mapa;