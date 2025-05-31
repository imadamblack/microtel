// components/ModalSedeSelector.js
export default function ModalSedeSelector({onClose, onSelect}) {
  const sedes = [
    {value: 'gdl', name: 'Guadalajara Sur'},
    {value: 'irapuato', name: 'Irapuato'},
    {value: 'slp', name: 'San Luis Potosí'},
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black" style={{opacity: .5}} onClick={onClose}/>
      <div className="container">
        <div className="relative bg-gray-100 rounded-2xl p-8 lg:w-1/2 max-w-[40rem] mx-auto shadow-xl">
          <div className="ft-0 absolute p-4 top-4 right-4 cursor-pointer" onClick={onClose}>✕</div>
          <h2 className="text-xl font-bold mb-4 text-center py-12">Selecciona tu destino</h2>
          <div className="grid grid-cols-1 gap-4">
            {sedes.map((sede) => (
              <button
                key={sede.value}
                className="w-full text-brand-1 bg-white border shadow-md hover:bg-brand-1 text-left py-6 px-4 rounded-lg"
                onClick={() => {
                  onSelect(sede.value);
                  onClose();
                }}
              >
                {sede.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
