import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    gsap.set(targets, { opacity: 0, y: options.y ?? 48 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 78%',
        once: true,
      },
    })

    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.9,
      stagger: options.stagger ?? 0.12,
      ease: 'power3.out',
    })

    return () => { tl.kill() }
  }, [])

  return sectionRef
}
