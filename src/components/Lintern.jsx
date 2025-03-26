import React from 'react'

export const Lintern = ({ batery_one, batery_two, isOn }) => {
  return (
    <div
      // Por defecto (mobile): 50% del tamaño original
      // En md: el tamaño original (estilos que ya tenías)
      className='
        relative mx-auto text-center flex flex-col items-center

        // Tamaño contenedor
        w-40
        md:w-80
      '
    >
      {/* Efecto de luz de la linterna (si está encendida) */}
      {isOn && (
        <div
          className='
            absolute 
            // Tamaño y posición base (móvil)
            top-[-15px] w-30 h-30

            // Tamaño y posición en md (original)
            md:top-[-30px] md:w-60 md:h-60

            left-1/2 transform -translate-x-1/2
            bg-yellow-300 opacity-50 rounded-full blur-lg animate-pulse
          '
        ></div>
      )}

      {/* Parte superior (cabeza de la linterna) */}
      <div
        className={`
          // Base (móvil): 50% de ancho/alto y bordes más finos
          w-24 h-[2.25rem] border-[6px]
          // En md: valores originales
          md:w-48 md:h-[4.5rem] md:border-[12px]
          relative

          ${
            isOn
              ? // Encendida
                'bg-yellow-300 md:border-yellow-500 border-yellow-500'
              : // Apagada
                'bg-gray-300 md:border-gray-700 border-gray-700'
          }
        `}
        style={{
          // Forma de trapezoide
          clipPath: 'polygon(0% 100%, 100% 100%, 85% 0%, 15% 0%)',
        }}
      />

      {/* Mango de la linterna (color fijo, no depende de isOn) */}
      <div
        className='
          relative flex flex-col items-center p-2 -mt-1

          // Tamaño base (móvil)
          w-12 h-40 border-[6px]
          // Tamaño en md (original)
          md:w-24 md:h-72 md:border-[12px]

          border-gray-900 bg-gray-700
        '
      >
        {/* Espacios para baterías */}
        <div
          className='
            flex flex-col w-full

            // Espaciado y margen base (móvil)
            space-y-6 mt-[15px]
            // Espaciado y margen en md (original)
            md:space-y-6 md:mt-[30px]
          '
        >
          {/* Batería 1 */}
          <div
            className='
              flex items-center justify-center bg-white border-dashed border-gray-400

              // Base (móvil)
              h-7 border-[3px]
              // md (original)
              md:h-14 md:border-[6px]
            '
          >
            {batery_one !== null ? (
              <div
                className='
                  bg-green-500 rounded

                  // Batería pequeña en móvil
                  w-5 h-5
                  // Batería grande en md
                  md:w-10 md:h-10
                '
              />
            ) : (
              <span className='text-gray-400 text-sm'>Empty</span>
            )}
          </div>

          {/* Batería 2 */}
          <div
            className='
              flex items-center justify-center bg-white border-dashed border-gray-400

              // Base (móvil)
              h-7 border-[3px]
              // md (original)
              md:h-14 md:border-[6px]
            '
          >
            {batery_two !== null ? (
              <div
                className='
                  bg-green-500 rounded

                  // Batería pequeña en móvil
                  w-5 h-5
                  // Batería grande en md
                  md:w-10 md:h-10
                '
              />
            ) : (
              <span className='text-gray-400 text-sm'>Empty</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
