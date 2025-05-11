import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Faber from './components/Faber.jsx'
import LikeButton from './components/LikeButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main style={{heigth:'300px', 
                  width:'80vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'}}>
      <Faber/>
      <div style={{display:'flex',gap:'.5rem'}}>
        <LikeButton msj="Like" />
        <LikeButton msj="Me gusta" />
        <LikeButton msj="Me encanta" />
      </div>
    </main>
  </StrictMode>,
)
