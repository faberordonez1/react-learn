import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  /** useEffect: Se ejecuta en los siguientes casos
   * 1. Al renderizar el componente por primera vez(en dev se ejecuta 2 veces, por el modo estricto que ejecuta cleanup )
   * 2. Al cambiar el valor de las dependencias
   */
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      /* La escucha de eventos siempre debe ir dentro del useEffect, para evitar que se ejecute c/vez
      renderiza el componente */
      window.addEventListener('mousemove', handleMove)
    }

    /** Limpiar Efecto: Se ejecuta al eliminar el componente, al cambiar el valor de las dependencias
     o al ejecutar el ussefect de nuevo    */
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enable])
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }
  , [enable])

  return (
    <>
      {enable && <div style={{
        width: '50px',
        height: '50px',
        left: '-25',
        top: '-25',
        borderRadius: '50%',
        backgroundColor: ' #06777a',
        position: ' absolute',
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
                 />}
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'}</button>
    </>
  )
}

export default App
