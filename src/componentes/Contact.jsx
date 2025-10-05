import React, { useState, useEffect } from 'react';
// La importación de 'react-icons/fa' está deshabilitada ya que genera errores recurrentes en este entorno.
// Usamos un SVG nativo para asegurar la compilación.
import { FaEnvelopeOpenText } from 'react-icons/fa'; 

// Definimos el color de acento
const ACCENT_COLOR_HEX = '#27C840'; 
const FORMSPREE_URL = "https://formspree.io/f/myznppeb";

const Contact = () => {
  // 1. ESTADO: Definimos el estado inicial de los campos del formulario
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // Para mostrar mensajes de éxito/error

  // 2. EFECTO: Oculta el mensaje de éxito después de 5 segundos
  useEffect(() => {
    if (statusMessage && statusMessage.type === 'success') {
      const timer = setTimeout(() => {
        setStatusMessage(null);
      }, 3000); // 5000 milisegundos = 5 segundos

      // Función de limpieza para evitar fugas de memoria si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  // Maneja los cambios en los inputs y actualiza el estado
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage(null); // Limpiamos el mensaje si el usuario empieza a escribir de nuevo
  };

  // Maneja el envío del formulario con FETCH
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 🔥 LIMPIEZA DEL FORMULARIO: Reseteamos el estado a valores vacíos.
        setFormData({ name: '', email: '', message: '' });
        setStatusMessage({ type: 'success', text: '¡Gracias! Tu mensaje ha sido enviado con éxito.' });
      } else {
        // Manejo de errores de Formspree
        const data = await response.json();
        // Intentamos obtener el error de Formspree o mostramos un mensaje genérico
        const errorMessage = data?.errors?.[0]?.message || 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
        setStatusMessage({ type: 'error', text: errorMessage });
      }
    } catch (error) {
      // Manejo de errores de red
      setStatusMessage({ type: 'error', text: 'Error de conexión. Verifica tu red.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
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
          onSubmit={handleSubmit} // Usamos el handler de React
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
              // Controlado por React
              value={formData.name}
              onChange={handleChange}
              autoComplete="name" // Mantener la accesibilidad del navegador
              // Estilo uniforme: bg-zinc-800, borde gris claro, enfoque con el color de acento.
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2"
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
              // Controlado por React
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
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
              // Controlado por React
              value={formData.message}
              onChange={handleChange}
              autoComplete="off" // No queremos autocompletar mensajes largos
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2"
              style={{ 
                '--tw-ring-color': ACCENT_COLOR_HEX 
              }}
            ></textarea>
          </div>
          
          {/* Mensaje de Estado (Éxito/Error) */}
          {statusMessage && (
            <p className={`text-center py-3 rounded-lg font-semibold transition-opacity duration-500 ease-out 
                ${statusMessage.type === 'error' ? 'bg-red-700 text-white' : 'text-black'}`} // El éxito usa ACCENT_COLOR_HEX para el fondo
                style={{
                  backgroundColor: statusMessage.type === 'success' ? ACCENT_COLOR_HEX : undefined
                }}
            >
              {statusMessage.text}
            </p>
          )}

          {/* Botón de Envío */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting} // Deshabilitamos durante el envío
              className="w-full px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-[1.01]"
              style={{ 
                backgroundColor: ACCENT_COLOR_HEX,
                color: 'black',
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
