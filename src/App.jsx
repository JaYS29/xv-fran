import Hero from './components/Hero'
import Invitation from './components/Invitation'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import Location from './components/Location'

export default function App() {
  return (
    <main>
      <Hero photoUrl={null} />
      <Invitation />
      <DressCode />
      <Countdown />
      <Location />
    </main>
  )
}
