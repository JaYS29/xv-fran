import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import Gift from './components/Gift'
import Location from './components/Location'

export default function App() {
  const soundRef = useRef(null)
  const [overlayVisible, setOverlayVisible] = useState(true)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/Style.mp3'],
      loop: true,
      volume: 0.6,
      html5: true,
    })

    return () => {
      soundRef.current?.unload()
    }
  }, [])

  const handleOverlayClick = () => {
    soundRef.current.play()
    setOverlayVisible(false)
  }

  return (
    <>
      {overlayVisible && (
        <div onClick={handleOverlayClick} style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(12, 12, 12, 0.92)',
          cursor: 'pointer',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
            color: 'var(--light_bronze)',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}>
            Haz click para iniciar
          </p>
          <div style={{
            marginTop: '1rem',
            width: '40px',
            height: '1px',
            background: 'var(--light_bronze)',
            opacity: 0.5,
          }} />
        </div>
      )}
      <main>
        <Hero photoUrl={null} />
        <Invitation />
        <DressCode />
        <Countdown />
        <Gift />
        <Location />
      </main>
    </>
  )
}
