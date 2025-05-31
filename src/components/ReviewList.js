const ReviewList = () => {
    const comentarios = [
        {
            user_img: "/img-Comentarios/t-1.png",
            nombre: "Daniela M",
            ciudad: "Guadalajara",
            pais: "Tripadvisor",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace un Mes",
            tipo: "",
            comentario: "Muy buen servicio, las camas son muy cómodas. |Lo recomiendo, me volvería a hospedar definitivamente. |La tarifa me incluyó el desayuno. |La alberca está climatizada, tiene gimnasio aunque no lo pude utilizar. |Además tienen una mini-store 24/7."
        },
        {
            user_img: "/img-Comentarios/t-2.png",
            nombre: "Tesorería Oftavisión",
            ciudad: "San Luis Potosí",
            pais: "Google",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace 3 Semanas",
            tipo: "",
            comentario: "Hotel super limpio, personas muy amables, el desayuno super completo y sobre todo super rico, me volvería a quedar mil veces más!!!!"
        },
        {
            user_img: "/img-Comentarios/t-3.png",
            nombre: "sergio del toro",
            ciudad: "San Luis Potosí",
            pais: "Google",
            calificacion: "⭐⭐⭐⭐",
            fecha: "Hace un Mes",
            tipo: "Negocios",
            comentario: "Uns excelente propuesta de hotelería en esta área de la ciudad...cómodo, práctico, limpio..."
        },
        {
            user_img: "/img-Comentarios/t-4.png",
            nombre: "Yarelia Andrade",
            ciudad: "Guadalajara",
            pais: "Google",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace 7 Meses",
            tipo: "Negocios",
            comentario: "Me sorprendió la habitación amplia y equipada con horno electrico, cocinilla,friobar e implementos de cocina. Servicio de lavandería y café gratis 24hrs. Buena ubicación para mi gusto. Lo recomiendo 100% y seguro volveré."
        },
        {
            user_img: "/img-Comentarios/t-5.png",
            nombre: "Chavez P",
            ciudad: "San Luis Potosí",
            pais: "Tripadvisor",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace 1 Mes",
            tipo: "Negocios",
            comentario: "Tuve una gran estadía, todo el personal muy amable, el desayuno completo y delicioso. |Las habitaciones muy cómodas, con buen espacio. |En mi próxima visita, volveré a hospedarme. |El personal muy atentos te ayudan a que tu estadía sea más cómoda."
        },
        {
            user_img: "/img-Comentarios/t-6.png",
            nombre: "Ernesto Murillo",
            ciudad: "Guadalajara",
            pais: "Google",
            calificacion: "⭐⭐⭐",
            fecha: "Hace 5 Meses",
            tipo: "Negocios",
            comentario: "Hotel muy práctico en el Sur de Guadalajara. Muy cómodos y limpias las habitaciones. Tienes 4 almohadas por cama y eso es de mucha ayuda si requieres alguna en especial. Recomendable"
        }
    ];

    return (
        <div className='w-full mx-auto mt-10 px-[30px] w-full py-6'>
            {/* Contenedor grid para 2 columnas en PC y 1 en móvil */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
                {comentarios.map((comentario, index) => (
                    <div key={`com-${index}`} className="bg-white p-6 rounded-lg ">
                        <div className="flex flex-row items-center gap-8">
                            <div className="rounded-full w-[64px] overflow-hidden">
                                <img 
                                    src={comentario.user_img} 
                                    alt={`Imagen de ${comentario.nombre}`} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div>
                                <div className="ft-1 font-medium">{comentario.nombre}</div>
                                <div className="-ft-1">{`${comentario.ciudad}, ${comentario.pais}`}</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-8 mt-4">
                            <div className="-ft-1">{comentario.calificacion}</div>
                            |
                            <div className="-ft-1">{comentario.fecha}</div>
                            {/*|*/}
                            {/*<div className="-ft-1">{comentario.tipo}</div>*/}
                        </div>
                        <div className="mt-8 ft-0">{comentario.comentario}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewList;