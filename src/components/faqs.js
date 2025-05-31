import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Qué certificaciones cubren?",
      a: "ISO, FSSC, SQF, BRCGS y más. Pregunta por tu sector y te confirmamos."
    },
    {
      q: "¿Cómo adaptan la capacitación a mi empresa?",
      a: "Analizamos tus necesidades y ajustamos el contenido para que sea 100% relevante para tu operación."
    },
    {
      q: "¿El curso es solo presencial?",
      a: "Por el momento sí, buscamos dar la mejor atención a cada uno de nuestros clientes."
    },
    {
      q: "¿Pueden capacitar a varios equipos en la empresa?",
      a: "Claro. Tenemos opciones para grupos pequeños, medianos y corporativos."
    },
    {
      q: "¿Cuál es el costo aproximado por la capacitación?",
      a: "Varía entre los $8,000 a los $15,000 MXN. Depende completamente del tipo de certificación."
    }
  ];

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}