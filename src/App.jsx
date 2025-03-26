import { useState } from 'react'
import { Batery } from './components/Batery'
import { Lintern } from './components/Lintern'
import { createStackBattery } from './TryOn'

function App() {
  const [stack] = useState(createStackBattery()) // Inicializa el stack solo una vez
  const [selectedBatteries, setSelectedBatteries] = useState([null, null])
  const [attempts, setAttempts] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const handleSelectBattery = (index) => {
    setSelectedBatteries((prev) => {
      if (prev.includes(index)) {
        // Si la batería ya está seleccionada, la deselecciona
        return prev.map((item) => (item === index ? null : item))
      } else if (prev[0] === null) {
        return [index, prev[1]]
      } else if (prev[1] === null) {
        return [prev[0], index]
      } else {
        return prev // No permite seleccionar más de dos baterías
      }
    })
  }

  const handleSwitch = () => {
    setAttempts((prev) => prev + 1) // Incrementa el contador de intentos
    if (selectedBatteries[0] !== null && selectedBatteries[1] !== null) {
      const batteryOne = stack[selectedBatteries[0]]
      const batteryTwo = stack[selectedBatteries[1]]
      if (batteryOne === 1 && batteryTwo === 1) {
        setIsOn(true) // Enciende la linterna
        setTimeout(() => {
          alert(
            `
Congratulations! You turned on the flashlight in ${attempts + 1} tries.`
          )
          window.location.reload() // Recarga la página después de un retraso
        }, 1000) // Retraso de 1 segundos
      } else {
        setIsOn(false) // Apaga la linterna si las baterías no son válidas
      }
    } else {
      setIsOn(false) // Apaga la linterna si no hay dos baterías seleccionadas
    }
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-around bg-gray-200 p-4'>
      {/* Logo flotante */}
      <div className='fixed top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-xl text-lg font-semibold tracking-wide w-1/4 text-center'>
        Try to turn me on
      </div>

      {/* Linterna */}
      <div>
        <Lintern
          batery_one={
            selectedBatteries[0] !== null ? stack[selectedBatteries[0]] : null
          }
          batery_two={
            selectedBatteries[1] !== null ? stack[selectedBatteries[1]] : null
          }
          isOn={isOn}
        />
      </div>

      {/* Pilas */}
      <div className='grid grid-cols-2 md:flex gap-8 mt-8'>
        {stack.map((battery, index) => (
          <button
            key={index}
            onClick={() => handleSelectBattery(index)}
            className={`p-2 rounded ${
              selectedBatteries.includes(index) ? 'bg-gray-400' : 'bg-white'
            }`}
          >
            <Batery state={battery} />
          </button>
        ))}
      </div>

      {/* Botón de encendido */}
      <div className='mt-4'>
        <button
          onClick={handleSwitch}
          className='px-6 py-4  bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded shadow hover:bg-gray-600'
        >
          Turn On
        </button>
        <p className='mt-2 text-gray-700 text-center'>Attempts: {attempts}</p>
      </div>
      <footer>
        Made with ❤️ by{' '}
        <span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>
          <a
            href='https://www.instagram.com/ariff_dev/'
            className='hover:text-red-600'
          >
            Ardev
          </a>
        </span>
      </footer>
    </main>
  )
}

export default App
