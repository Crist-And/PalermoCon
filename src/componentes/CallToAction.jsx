import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa'; // Cambiado a FaWhatsapp

// Definimos el color de acento
const ACCENT_COLOR_HEX = '#27C840'; 

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="py-20 px-6 bg-gray-900 text-gray-200"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Título del CTA */}
        <h2 
          className="text-3xl sm:text-4xl font-extrabold mb-4 text-white"
        >
          ¿Listo para empezar tu proyecto?
        </h2>
        
        {/* Subtítulo o Mensaje de Valor */}
        <p className="text-xl leading-relaxed mb-10 text-gray-300">
          Pedí tu presupuesto sin compromiso. Nos encargamos de la seguridad y eficiencia de tus instalaciones.
        </p>

        {/* Contenedor del Botón */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Botón Principal (Solicitar Presupuesto - lleva al formulario #contact) */}
          <a
            href="#contact" 
            className="flex items-center justify-center px-8 py-3 text-lg font-bold rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02]"
            style={{ 
              backgroundColor: ACCENT_COLOR_HEX, 
              color: 'black', 
            }}
          >
            <FaPaperPlane className="mr-3 text-xl" />
            Solicitar Presupuesto
          </a>

          {/* Botón Secundario: ENLACE A WHATSAPP */}
          <a
            // CLAVE: Usar el formato wa.me/CODIGODEPÁISNÚMERO
            // Ejemplo: wa.me/5491155551234
            // ¡REEMPLAZA ESTE NÚMERO CON EL REAL!
            href="https://wa.me/5491140834472" 
            target="_blank" // Abrir en una nueva pestaña
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg border-2 transition duration-300 hover:bg-gray-800"
            style={{ 
              borderColor: ACCENT_COLOR_HEX, 
              color: ACCENT_COLOR_HEX 
            }}
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Escribinos por WhatsApp
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default CallToAction