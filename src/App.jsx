import { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import Gift from './components/Gift'
import Location from './components/Location'

export default function App() {
  const soundRef = useRef(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/Style.mp3'],
      loop: true,
      volume: 0.6,
      onplayerror: () => {
        soundRef.current.once('unlock', () => soundRef.current.play())
      },
    })

    soundRef.current.play()

    return () => {
      soundRef.current?.unload()
    }
  }, [])

  return (
    <main>
      <Hero photoUrl={null} />
      <Invitation />
      <DressCode />
      <Countdown />
      <Gift />
      <Location />
    </main>
  )
}
