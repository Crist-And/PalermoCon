import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Definimos el color de acento
const ACCENT_COLOR_HEX = '#27C840'; 

// Datos de ejemplo para los testimonios
const testimonialsData = [
  {
    quote: "La instalación de mi nuevo tablero eléctrico fue rápida y sin problemas. Se nota la profesionalidad y la atención al detalle. ¡Totalmente recomendados por la seguridad!",
    name: "Martín P.",
    title: "Propietario Residencial",
    rating: 5,
  },
  {
    quote: "Necesitábamos una solución eficiente para la iluminación de nuestro local. Palermo Con nos asesoró perfectamente y el cambio nos generó un ahorro increíble en el consumo.",
    name: "Ana Laura M.",
    title: "Dueña de Comercio",
    rating: 5,
  },
  {
    quote: "Excelente servicio de mantenimiento. Lograron detectar un problema que otros electricistas no veían. Mi tranquilidad se conectó, ¡tal como dicen!",
    name: "Javier R.",
    title: "Administrador de Edificio",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 scroll-mt-16 bg-gray-900 text-gray-200"
      data-aos="fade-up"
    >
      {/* 1. Contenedor ancho para soportar la grilla de 3 columnas */}
      <div className="max-w-6xl mx-auto"> 
        
        {/* Título de la Sección */}
        <h2
          // 2. Título: permite que el texto se rompa en móvil, pero lo mantiene en una línea en desktop.
          className="text-4xl font-extrabold mb-10 flex items-center gap-3 border-b-2 pb-3 mx-auto text-center justify-center 
          md:whitespace-nowrap" 
          style={{
            borderColor: ACCENT_COLOR_HEX,
            color: ACCENT_COLOR_HEX,
          }}
        >
          <FaQuoteLeft className="text-3xl" />
          Lo que dicen nuestros clientes
        </h2>
        
        {/* Contenedor de la Rejilla (Grid) de Testimonios */}
        <div 
          // Responsivo: 1 columna (móvil), 2 columnas (tablet), 3 columnas (desktop)
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              // Tarjeta: flex vertical con altura completa
              className="bg-zinc-800 p-6 rounded-xl shadow-2xl flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Cita */}
              <p 
                // Asegura que el texto largo se ajuste y la cita ocupe el espacio disponible
                className="text-lg italic leading-relaxed text-gray-300 mb-6 flex-grow break-words"
              >
                {testimonial.quote}
              </p>
              
              {/* Información del Cliente */}
              <div className="mt-auto pt-4 border-t border-zinc-700">
                {/* Estrellas de Calificación */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className="w-4 h-4 mr-1" 
                      style={{ color: i < testimonial.rating ? ACCENT_COLOR_HEX : '#4A5568' }}
                    />
                  ))}
                </div>
                
                {/* Nombre y Título */}
                <p 
                  className="text-xl font-bold"
                  style={{ color: ACCENT_COLOR_HEX }}
                >
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;