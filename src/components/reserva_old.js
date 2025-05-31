import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import '.react-datepicker/dist/react-datepicker.css'; // Si lo usas
import Image from 'next/image';

const Reserva = ({ llegada, salida, huespedes, precio}) => {
  // Estado para las fechas seleccionadas
  const [startDate, setStartDate] = useState(llegada ? new Date(llegada) : null);
  const [endDate, setEndDate] = useState(salida ? new Date(salida) : null);

  // Estado para los huéspedes (cambiado de `huespedes` a `huespedesCount`)
  const [huespedesCount, setHuespedes] = useState(huespedes || 1);

  //MOSTRAR MENU MOVILES 
   const [isFormVisible, setIsFormVisible] = useState(false);

  // Manejadores de cambio de fecha
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Actualiza el estado local si las props cambian
  useEffect(() => {
    setStartDate(llegada ? new Date(llegada) : null);
    setEndDate(salida ? new Date(salida) : null);
  }, [llegada, salida]);

  return (
    <>
      {/* Version PC*/}
      <div className="hidden md:block mx-auto mt-10 w-full sticky top-0 bottom-10">
        <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col space-y-4 sticky top-0 z-[10]">
          <div className='text-3xl font-extrabold'>{`$${precio} MXN `}
            <span className='font-normal text-2xl'>por noche</span>
          </div>
          <div className='border border-[#374151] rounded-3xl font-bold font-nunito text-2xl'>
            <div>
              <div className='flex flex-col-2 justify-around  p-4 font-bold font-nunito text-2xl'>
                {/* Campo LLEGADA */}
                <div className="flex flex-col items-center space-x-2 font-extrabold font-[#000000]">
                  Check-in
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    customInput={
                      <div className="cursor-pointer font-normal">
                        {startDate ? startDate.toLocaleDateString('es-ES') : llegada}
                      </div>
                    }
                    dateFormat="YYYY/MM/DD"
                    minDate={new Date()}
                    calendarClassName="custom-calendar-reserva"
                  />
                </div>

                {/* Campo SALIDA */}
                <div className="flex flex-col items-center space-x-2 font-extrabold">
                  Check-out
                  <DatePicker
                    selected={endDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    customInput={
                      <div className="cursor-pointer font-normal">
                        {endDate ? endDate.toLocaleDateString('es-ES') : salida}
                      </div>
                    }
                    dateFormat="YYYY/MM/DD"
                    minDate={startDate || new Date()}
                    calendarClassName="custom-calendar-reserva"
                  />
                </div>
              </div>

              {/* Campo HUESPEDES */}
              <div className="flex flex-col text-center items-center p-2 border-t border-[#374151] font-extrabold">
               Huespedes
                <div className="flex flex-row justify-center items-center  space-x-1 font-normal">
                  <button
                    onClick={() => setHuespedes(Math.max(1, huespedesCount - 1))}
                    className="bg-gray-200 py-0 px-2 rounded"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={huespedesCount}
                    onChange={(e) => setHuespedes(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="text-center p-0 border-none"
                  />
                  <button
                    onClick={() => setHuespedes(Math.min(10, huespedesCount + 1))}
                    className="bg-gray-200 py-0 px-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Campo Ciudad */}
              <div className="flex flex-col text-center items-center p-2 border-t border-[#374151] font-extrabold">
                Ciudad
                <div className="flex flex-row justify-center items-center  space-x-1">
                  <select className='border-none focus:outline-none focus:ring-0 rounded-b-lg text-center font-normal pb-0'>
                    <option>Aguascalientes</option>
                    <option>Guadalajara Aeropuerto</option>
                    <option>Guadalajara Sur</option>
                    <option>Monterrey</option>
                    <option>Puebla</option>
                    <option>Queretaro</option>
                    <option>San Luis Potosi</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Botón RESERVAR */}
          <div className="">
            <div className="bg-red-500 text-white p-4 sm:p-6 text-center rounded-full font-bold hover:cursor-pointer w-full">
              RESERVAR
            </div>
          </div>
          <p className='text-[8px]'>
            <span className='text-red-700'>*</span>
            Cancela sin cargos extras hasta 24 hrs antes de la reserva.
          </p>
        </div>
      </div>

      {/* Versión Móvil */}
      <div className="md:hidden mx-auto mt-10 w-full fixed bottom-0 z-20">
        <div className="bg-white shadow rounded-t-2xl p-10 flex flex-col space-y-4 sticky top-0 transition-all duration-600 ease-in-out">
          {/* Solo muestra el botón de RESERVAR por defecto */}
          {!isFormVisible && (
            <div className="text-center">
              <div
                className="bg-red-500 text-white p-4 sm:p-6 text-center rounded-full font-bold hover:cursor-pointer w-full"
                onClick={() => setIsFormVisible(true)}
              >
                RESERVAR
              </div>
            </div>
          )}

          {/* Muestra el formulario cuando isFormVisible es true */}
          {isFormVisible && (
            <>
              {/* Botón Cerrar */}
              <div className="text-center mt-1 ml-auto">
                <button
                  className="bg-red-500 px-4 py-2 rounded-full"
                  onClick={() => setIsFormVisible(false)}
                >
                  Cerrar
                </button>
              </div>
              <p className='text-[8px]'>
                <span className='text-red-700'>*</span>
                Cancela sin cargos extras hasta 24 hrs antes de la reserva.
              </p>
              <div className='border border-[#374151] rounded-3xl font-bold font-nunito text-2xl'>
                <div>
                  <div className='flex flex-col-2 justify-around p-4 font-bold font-nunito text-2xl'>
                    {/* Campo LLEGADA */}
                    <div className="flex flex-col items-center space-x-2 font-extrabold font-[#000000]">
                      Check-in
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        customInput={
                          <div className="cursor-pointer font-normal">
                            {startDate ? startDate.toLocaleDateString('es-ES') : llegada}
                          </div>
                        }
                        dateFormat="YYYY/MM/DD"
                        minDate={new Date()}
                        calendarClassName="custom-calendar-reserva"
                      />
                    </div>
                    {/* Campo SALIDA */}
                    <div className="flex flex-col items-center space-x-2 font-extrabold">
                      Check-out
                      <DatePicker
                        selected={endDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        customInput={
                          <div className="cursor-pointer font-normal">
                            {endDate ? endDate.toLocaleDateString('es-ES') : salida}
                          </div>
                        }
                        dateFormat="YYYY/MM/DD"
                        minDate={startDate || new Date()}
                        calendarClassName="custom-calendar-reserva"
                      />
                    </div>
                  </div>
                  {/* Campo HUESPEDES */}
                  <div className="flex flex-col text-center items-center p-2 border-t border-[#374151] font-extrabold">
                    Huespedes
                    <div className="flex flex-row justify-center items-center space-x-1 font-normal">
                      <button
                        onClick={() => setHuespedes(Math.max(1, huespedesCount - 1))}
                        className="bg-gray-200 py-0 px-2 rounded"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={huespedesCount}
                        onChange={(e) => setHuespedes(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="text-center p-0 border-none"
                      />
                      <button
                        onClick={() => setHuespedes(Math.min(10, huespedesCount + 1))}
                        className="bg-gray-200 py-0 px-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Campo Ciudad */}
                  <div className="flex flex-col text-center items-center p-2 border-t border-[#374151] font-extrabold">
                    Ciudad
                    <div className="flex flex-row justify-center items-center space-x-1">
                      <select className='border-none focus:outline-none focus:ring-0 rounded-b-lg text-center font-normal pb-0'>
                        <option>Aguascalientes</option>
                        <option>Guadalajara Aeropuerto</option>
                        <option>Guadalajara Sur</option>
                        <option>Monterrey</option>
                        <option>Puebla</option>
                        <option>Queretaro</option>
                        <option>San Luis Potosi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* Botón RESERVAR */}
              <div className="">
                <div className="bg-red-500 text-white p-4 sm:p-6 text-center rounded-full font-bold hover:cursor-pointer w-full">
                  RESERVAR
                </div>
              </div>
            </>
          )}
        </div>
      </div>
     
    </>
  );
};

export default Reserva;
          