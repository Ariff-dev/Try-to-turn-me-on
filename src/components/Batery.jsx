import React from 'react'

export const Batery = ({ state }) => {
  return (
    <div
      className='flex flex-col items-center justify-center'
      data-state={state}
    >
      {/* Contenedor principal de la batería */}
      <div
        className='
          relative bg-gray-800 
          // Tamaño base (móvil): la mitad
          w-12 h-24 border-2
          // Tamaño original en md:
          md:w-24 md:h-48 md:border-4

          rounded-md border-gray-700 shadow-lg
        '
      >
        {/* Decoración interna */}
        <div className='absolute inset-1 bg-gray-900 rounded-md'></div>
      </div>

      {/* Terminal de la batería */}
      <div
        className='
          bg-gray-700 mt-1 rounded

          // Tamaño base (móvil): la mitad
          w-5 h-[6px]
          // Tamaño original en md:
          md:w-10 md:h-3
        '
      ></div>
    </div>
  )
}
