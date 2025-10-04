# ⚡ Palermo Con | Instalaciones Eléctricas Profesionales

## 📥 Descarga Rápida y Acceso
Si deseas obtener una copia local de este proyecto para uso o referencia, puedes usar los siguientes enlaces  
*(actualiza los placeholders con las URL reales de tu repositorio de GitHub o GitLab)*:

---

## 💡 Introducción
Este proyecto es el sitio web oficial de **Palermo Con**, un servicio profesional especializado en **instalaciones, reparaciones y mantenimiento eléctrico** en **Palermo y toda CABA**.

El objetivo de la página es establecer una **presencia digital sólida, profesional y de alta conversión**, destacando la **seguridad y eficiencia** de los servicios a través de un **diseño moderno y oscuro**, con un **color de acento verde vibrante (`#27C840`)**.

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Herramienta |
|------------|-------------|
| **Frontend Framework** | React |
| **Styling Framework** | Tailwind CSS |
| **Animaciones** | AOS (Animate On Scroll) |
| **Iconos** | React Icons (Fa) |
| **Formularios** | Formspree (para el componente Contact) |

---

## 🚀 Inicio Rápido (Desarrollo Local)

Sigue estos pasos para poner a correr el proyecto en tu máquina local:

### 1. Clonar el Repositorio
```bash
git clone [URL_DE_TU_REPOSITORIO]
cd palermo-con-web

npm install
# O si usas Yarn:
yarn install

npm run dev
# O si usas Yarn:
yarn dev
```
## Estructura
src/
├── components/
│   ├── About.jsx           # Sección "Nosotros" y servicios
│   ├── CallToAction.jsx    # Llamada a la acción (CTA) con botón de WhatsApp
│   ├── Contact.jsx         # Formulario de Presupuesto
│   ├── Hero.jsx            # Banner principal (Logo y fondo)
│   ├── NavBar.jsx          # Navegación fija en el Top
│   └── Testimonials.jsx    # Sección de Testimonios (Responsiva en Grid)
├── styles/
│   └── index.css           # Archivo de configuración de Tailwind
└── App.jsx                 # Componente principal que ensambla todas las secciones

## Configuracion del Formulario de contacto
✉️ Configuración del Formulario de Contacto

El componente Contact.jsx utiliza Formspree para enviar correos electrónicos.

Para que el formulario sea funcional, sigue estos pasos:

Regístrate en Formspree.io
 y crea un nuevo formulario.

Obtén tu Endpoint ID (por ejemplo: /f/manjrbjn).

Reemplaza el valor del atributo action en Contact.jsx con tu propio endpoint:

<form action="[TU_ENDPOINT_AQUÍ]" method="POST">
  {/* ... */}
</form>

