'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight, Phone, Star } from 'lucide-react'
import { Counter, SectionLabel } from '@/components/site/shared'
import { services } from '@/lib/data'

const images = {
  hero: '/images/hero.webp',
  response: '/images/response.webp',
  guard: '/images/guard.webp',
  patrol: '/images/patrol.webp',
}

const dispatchFeed = [
  'Unit 04 · Patrol check-in · Ermelo CBD',
  'Unit 11 · Alarm response cleared · Phumula',
  'Unit 02 · Escort detail en route · N17 corridor',
  'Unit 09 · Site inspection complete · Industrial area',
  'Unit 07 · Event security on post · Mkhondo',
]

const testimonials = [
  'They arrived within minutes when our alarm went off at 2am. Professional, calm and in full control of the situation.',
  'The guards on our site are disciplined and visible. Incidents dropped noticeably within the first month.',
  'We use them for every event. Their team manages crowds firmly but respectfully — exactly what we need.',
  'One phone call and there was an officer at our gate. That kind of response gives our family real peace of mind.',
]

function OpsBar() {
  const [feedIndex, setFeedIndex] = useState(0)
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString('en-ZA', {
          timeZone: 'Africa/Johannesburg',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    tick()
    const clockId = setInterval(tick, 1000)
    const feedId = setInterval(() => setFeedIndex((i) => (i + 1) % dispatchFeed.length), 4000)
    return () => {
      clearInterval(clockId)
      clearInterval(feedId)
    }
  }, [])

  return (
    <div className="ops-bar">
      <div className="container ops-bar-inner">
        <span className="ops-status">
          <span className="ops-dot" /> Control room online
        </span>
        <span className="ops-feed" key={feedIndex}>
          {dispatchFeed[feedIndex]}
        </span>
        <span className="ops-clock">{clock} SAST</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="hero-tag">24/7 Armed Response</span>
          <h1>
            Your safety.
            <br />
            <em>Our priority.</em>
          </h1>
          <p className="hero-intro">
            Trusted protection, rapid response and peace of mind — backed by a team that is ready when you need us most.
          </p>
          <div className="hero-actions">
            <Link className="button button-amber" href="/contact">
              Get protected today <ArrowRight size={17} />
            </Link>
            <a className="button button-ghost" href="tel:0768722862">
              <Phone size={16} /> 076 872 2862
            </a>
          </div>
        </div>
        <div className="hero-note">
          <BadgeCheck size={19} />
          <span>
            Professional <b>•</b> Reliable <b>•</b> Ready
          </span>
        </div>
      </div>
      <div className="hero-badge" aria-hidden="true">
        <img src="/star.png" alt="" />
        <span className="hero-badge-text">ZULU ARMED RESPONSE</span>
      </div>
      <OpsBar />
    </section>
  )
}

const stats = [
  { value: <Counter to={24} suffix="/7" />, label: 'Response availability', image: '/images/ladder.webp' },
  { value: <Counter to={100} suffix="%" />, label: 'Committed to your safety', image: '/images/guard.webp' },
  { value: 'NATIONWIDE', label: 'Protection across South Africa', image: '/images/patrol.webp' },
  { value: 'READY', label: 'When it matters most', image: '/images/response.webp' },
]

function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const cardStep = () => {
    const card = trackRef.current?.querySelector('.stat-card')
    return card ? card.getBoundingClientRect().width + 14 : 0
  }

  const goTo = (i: number) => {
    const n = (i + stats.length) % stats.length
    setIndex(n)
    trackRef.current?.scrollTo({ left: n * cardStep(), behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    const step = cardStep()
    if (!track || !step) return
    const i = Math.min(Math.round(track.scrollLeft / step), stats.length - 1)
    if (i !== index) setIndex(i)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => goTo(index + 1), 10000)
    return () => clearInterval(id)
  }, [paused, index])

  return (
    <section className="stats-strip">
      <div className="container">
        <div
          className="stat-card-grid"
          ref={trackRef}
          onScroll={onScroll}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {stats.map((s, i) => (
            <div className="stat-card" key={s.label} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={s.image} alt="" aria-hidden="true" loading="lazy" />
              <span className="stat-card-accent" />
              <strong>{s.value}</strong>
              <span className="stat-card-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="stat-nav">
          <button type="button" aria-label="Previous" onClick={() => goTo(index - 1)}>
            <ChevronLeft size={18} />
          </button>
          <div className="stat-dots">
            {stats.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className={i === index ? 'on' : ''}
                aria-label={`Show card ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button type="button" aria-label="Next" onClick={() => goTo(index + 1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function ServiceOrbit() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((i) => (i + 1) % services.length), 4500)
    return () => clearInterval(id)
  }, [paused])

  const s = services[active]
  const Icon = s.icon

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2>
              One team.
              <br />
              <em>Every angle covered.</em>
            </h2>
          </div>
          <p>
            Nine specialist services, one disciplined operation. Tap any point on the ring to see what it covers.
          </p>
        </div>
        <div
          className="orbit"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="orbit-ring" aria-hidden="true" />
          {services.map((item, i) => {
            const ItemIcon = item.icon
            return (
              <div
                className="orbit-spoke"
                key={item.title}
                style={{ '--a': `${i * 40 - 90}deg` } as React.CSSProperties}
              >
                <span className="orbit-line" aria-hidden="true" />
                <button
                  type="button"
                  className={`orbit-node n${i % 3}${i === active ? ' on' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={item.title}
                >
                  <ItemIcon size={26} strokeWidth={1.6} />
                </button>
                <span className="orbit-name">{item.title}</span>
              </div>
            )
          })}
          <div className="orbit-hub" key={active}>
            <span className="orbit-hub-icon">
              <Icon size={28} strokeWidth={1.6} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <Link href={`/contact?service=${encodeURIComponent(s.title)}`}>
              Get a quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutTeaser() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="about-images" data-reveal>
          <div className="image-frame image-large">
            <img src={images.response} alt="Zulu Armed Response officer beside a patrol vehicle at night" loading="lazy" />
          </div>
          <div className="image-frame image-small">
            <img src={images.guard} alt="Zulu Armed Response security officer on duty" loading="lazy" />
          </div>
          <div className="image-tag">
            <span>01</span>
            <p>
              Security
              <br />
              <strong>with purpose.</strong>
            </p>
          </div>
        </div>
        <div className="about-copy" data-reveal style={{ transitionDelay: '120ms' }}>
          <SectionLabel>Why Zulu Armed Response</SectionLabel>
          <h2>
            Protection built on <em>presence.</em>
          </h2>
          <p className="lead">
            We are committed to providing top-notch armed response and security services across the country.
          </p>
          <p>
            With years of experience and a highly trained team, we combine local knowledge with disciplined operations.
            Every call is treated with urgency. Every client is treated with respect.
          </p>
          <Link className="text-link" href="/about">
            More about us <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const cardStep = () => {
    const card = trackRef.current?.querySelector('.voice-card')
    return card ? card.getBoundingClientRect().width + 14 : 0
  }

  const goTo = (i: number) => {
    const n = (i + testimonials.length) % testimonials.length
    setIndex(n)
    trackRef.current?.scrollTo({ left: n * cardStep(), behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    const step = cardStep()
    if (!track || !step) return
    const i = Math.min(Math.round(track.scrollLeft / step), testimonials.length - 1)
    if (i !== index) setIndex(i)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => goTo(index + 1), 6000)
    return () => clearInterval(id)
  }, [paused, index])

  return (
    <section
      className="voices-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="voices-head" data-reveal>
          <div>
            <SectionLabel>Client voices</SectionLabel>
            <h2>
              Trusted when it
              <br />
              <em>matters most.</em>
            </h2>
          </div>
          <div className="voices-nav">
            <button type="button" aria-label="Previous testimonial" onClick={() => goTo(index - 1)}>
              <ChevronLeft size={18} />
            </button>
            <span className="voices-count">
              {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button type="button" aria-label="Next testimonial" onClick={() => goTo(index + 1)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="voices-track" ref={trackRef} onScroll={onScroll} data-reveal>
          {testimonials.map((quote) => (
            <figure className="voice-card" key={quote}>
              <div className="voice-stars" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={13} fill="currentColor" />
                ))}
              </div>
              <blockquote>{quote}</blockquote>
            </figure>
          ))}
        </div>
        <div className="voices-dots">
          {testimonials.map((t, i) => (
            <button
              key={t}
              type="button"
              className={i === index ? 'on' : ''}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServiceOrbit />
      <AboutTeaser />
      <Testimonials />
    </main>
  )
}
