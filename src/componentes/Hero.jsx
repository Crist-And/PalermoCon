const Hero = () => {
  return (
    <header
      id="hero"
      data-aos="fade-up"
      data-aos-duration="1200"
      // Centrado vertical: 'flex items-center'
      className="relative w-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] xl:min-h-[70vh] flex items-center"
    >
      {/* 1. Imagen de fondo */}
      <img
        src="https://res.cloudinary.com/du9ywopnu/image/upload/v1759535664/Frame_70_tr2vnb.png"
        alt="Fondo Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. Capa oscura */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 3. Contenedor del Logo/Isologo (Contenedor de desplazamiento) */}
      <div
        className="z-20 p-6 md:w-2/4 md:mr-auto" 
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        {/* Contenedor de los Logos (Alineación interna) */}
        <div 
          className="flex flex-col items-center gap-2 md:gap-4"
        >
          
          {/* Isologo (EL ÍCONO) - TAMAÑO GRANDE */}
          <img
            src="https://res.cloudinary.com/du9ywopnu/image/upload/v1759603275/isologo_palermocon_s69d5m.png"
            alt="isoLogo Palermo Con"
            // CLAVE: Reducido de h-20 a h-16 para hacerlo visiblemente más pequeño en mobile
            className="h-16 md:h-24 lg:h-28 xl:h-32 object-contain" 
          />
          
          {/* Logo (EL TEXTO/NOMBRE) - TAMAÑO PEQUEÑO */}
          <div className="flex flex-col leading-tight">
            <img
              src="https://res.cloudinary.com/du9ywopnu/image/upload/v1759603135/logo_palermo_con_1_jzy2d6.png"
              alt="Logo Palermo Con"
              // CLAVE: Reducido de h-12 a h-10 para hacerlo visiblemente más pequeño en mobile
              className="h-10 md:h-16 lg:h-20 xl:h-24 object-contain" 
            />
          </div>
        </div>
      </div>

      {/* 4. Texto institucional inferior derecho (permanece fijo en la esquina) */}
      <div
        className="hidden md:block absolute bottom-6 right-6 z-20"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <img
          className="h-12 md:h-16 lg:h-20"
        />
      </div>
    </header>
  );
};

export default Hero;