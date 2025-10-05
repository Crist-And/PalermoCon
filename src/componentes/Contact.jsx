import { FaEnvelopeOpenText } from 'react-icons/fa';

// Definimos el color de acento
const ACCENT_COLOR_HEX = '#27C840'; 

const Contact = () => {
  // Colores inferidos basados en el About:
  // var(--color-night)  -> bg-gray-900
  // var(--custom-gray) -> text-gray-400 o text-gray-200
  // var(--secondary-color) -> ACCENT_COLOR_HEX

  return (
    <section
      id="contact"
      // Usamos clases de Tailwind para fondo oscuro y texto
      className="py-24 px-6 scroll-mt-16 bg-gray-900 text-gray-400"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Título de la Sección */}
        <h2
          className="text-4xl font-extrabold mb-12 flex items-center gap-3 border-b-2 pb-2"
          // Aplicamos el color de acento
          style={{
            borderColor: ACCENT_COLOR_HEX,
            color: ACCENT_COLOR_HEX,
          }}
        >
          <FaEnvelopeOpenText className="text-3xl" />
          Solicitar Presupuesto
        </h2>

        <form
          action="https://formspree.io/f/myznppeb"
          method="POST"
          className="space-y-6"
        >
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              // Estilo uniforme: bg-zinc-800, borde gris claro, enfoque con el color de acento.
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2"
              // Ajustamos el color del anillo (ring) en el foco
              style={{ 
                '--tw-ring-color': ACCENT_COLOR_HEX 
              }} 
            />
          </div>

          {/* Campo Correo electrónico */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2"
              style={{ 
                '--tw-ring-color': ACCENT_COLOR_HEX 
              }} 
            />
          </div>
          
          {/* Campo Mensaje */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2"
              style={{ 
                '--tw-ring-color': ACCENT_COLOR_HEX 
              }}
            ></textarea>
          </div>

          {/* Botón de Envío */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-[1.01]"
              // Estilo del botón: fondo con color de acento y texto negro para alto contraste
              style={{ 
                backgroundColor: ACCENT_COLOR_HEX,
                color: 'black', // Usamos black para un alto contraste
              }}
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;