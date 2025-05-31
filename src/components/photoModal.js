
export default function ModalPhotoGallery({sede, onClose}) {

  const images = Array.from({ length: 14 }, (_, i) => `/imgSlider/${String(i + 1).padStart(2, '0')}.jpg`);
  console.log(sede);

  return (
    <div className="fixed inset-0 z-[100] bg-white/90 overflow-y-scroll">
      <div className="fixed inset-0" onClick={onClose}/>
      <div className="container relative items-center justify-center">
        <div
          className="ft-1 flex fixed top-8 z-[100] justify-center items-center h-20 w-20 rounded-full cursor-pointer bg-white border shadow-lg"
          onClick={onClose}
        >✕</div>
        <div className="relative my-40 gap-8 grid grid-cols-1 md:grid-cols-2">
          {images.map((src, idx) => (
            <div className="w-full flex snap-center">
              <img
                key={idx}
                src={src}
                alt={`${sede} ${idx + 1}`}
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
