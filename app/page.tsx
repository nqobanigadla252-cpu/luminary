'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock3,
  LockKeyhole,
  Menu,
  Phone,
  Radio,
  ShieldCheck,
  Siren,
  Users,
  X,
} from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_43_20%20AM-c30u6OkdivV3emywvaRmsEQtctCmuU.png',
  patrol: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_20_31%20AM-9vhUHnLS6dpw6t5uQ8FQUDSdvd1xs4.png',
  response: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_15_47%20AM-HOXiC4ziy5JhKkuGzk0HL45ZqsHEpO.png',
  guard: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_24_59%20AM-91ztWMLDhoS9jLg8zBr3f3SzZhuz6L.png',
  inspection: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_22_19%20AM-TIMboW7ZRaoqxm3FiAHLXKpvbHv9cG.png',
  campaign: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_28_29%20AM-NA9DBb4DZf2QWvvizEEm4RaYuuqPSs.png',
  ladder: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202026%2C%2009_35_42%20AM-NgR9fyIFxXzgH40m7z2CALy4Mxn9cY.png',
}

const services = [
  { icon: ShieldCheck, title: 'Armed Response', text: 'Rapid, professional intervention when every second counts.' },
  { icon: Users, title: 'Static Guarding', text: 'Visible, trained protection for people, property and assets.' },
  { icon: Radio, title: 'Event Security', text: 'Calm, capable teams who keep your event moving safely.' },
  { icon: Siren, title: 'Patrol Services', text: 'Proactive mobile patrols that deter incidents before they happen.' },
  { icon: LockKeyhole, title: 'Access Control', text: 'Disciplined entry management for safer sites and workplaces.' },
  { icon: Clock3, title: 'Alarm Response', text: 'A dependable response team ready around the clock.' },
  { icon: ShieldCheck, title: 'VIP Protection', text: 'Discreet, highly focused protection for high-profile clients.' },
  { icon: Radio, title: 'Armed Escort', text: 'Professional movement support for people, goods and assets.' },
  { icon: Users, title: 'Bouncers & Guards', text: 'Trained armed and unarmed personnel for every environment.' },
]

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Zulu Armed Response home">
      <span className="brand-mark" aria-hidden="true">
        <svg className="star-gun-logo" viewBox="0 0 64 64" role="img">
          <path className="logo-gun-shape" d="M10 47 26 31l3 3-16 16-3-3Zm12-17 4-4 5 5-4 4-5-5Zm-3 21 5-2-3-3-2 5Z" />
          <path className="logo-gun-shape" d="m54 47-16-16-3 3 16 16 3-3ZM42 30l-4-4-5 5 4 4 5-5Zm3 21-5-2 3-3 2 5Z" />
          <path className="logo-star-shape" d="m32 5 5.9 17.7h18.6L41.5 33.6l5.7 17.8L32 40.5 16.8 51.4l5.7-17.8L7.5 22.7h18.6L32 5Z" />
          <path className="logo-center" d="m32 25 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L32 25Z" />
        </svg>
      </span>
      <span className="brand-copy"><strong>ZULU</strong><small>ARMED RESPONSE</small></span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About us</a>
          <a href="#uniform" onClick={() => setOpen(false)}>Uniform</a>
          <a href="#coverage" onClick={() => setOpen(false)}>Coverage</a>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}><Phone size={15} /> Get protected</a>
        </nav>
      </div>
    </header>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Professional security services · Ermelo &amp; surrounding areas</p>
          <h1>Your safety.<br /><em>Our priority.</em></h1>
          <p className="hero-intro">Trusted protection, rapid response and peace of mind — backed by a team that is ready when you need us most.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Request a quote <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="tel:0768722862"><Phone size={16} /> 076 872 2862</a>
          </div>
        </div>
        <div className="hero-note"><BadgeCheck size={19} /><span>Professional <b>•</b> Reliable <b>•</b> Ready</span></div>
      </div>
      <div className="scroll-cue"><span /> Scroll to explore</div>
    </section>
  )
}

function TrustBar() {
  return <section className="trust-bar"><div className="container trust-grid"><div><strong>24/7</strong><span>Response availability</span></div><div><strong>100%</strong><span>Committed to your safety</span></div><div><strong>LOCAL</strong><span>Ermelo-based protection</span></div><div><strong>READY</strong><span>When it matters most</span></div></div></section>
}

function Services() {
  return <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><SectionLabel>What we do</SectionLabel><h2>Security that stands<br /><em>between you and risk.</em></h2></div><p>From a single residence to a busy commercial site, our trained teams bring presence, professionalism and precision to every assignment.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <article className="service-card" key={title}><span className="service-number">0{index + 1}</span><Icon className="service-icon" size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowRight size={17} /></a></article>)}</div></div></section>
}

function About() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-images"><div className="image-frame image-large"><img src={images.response} alt="Zulu Armed Response officer beside a patrol vehicle at night" /></div><div className="image-frame image-small"><img src={images.guard} alt="Zulu Armed Response security officer on duty" /></div><div className="image-tag"><span>01</span><p>Security<br /><strong>with purpose.</strong></p></div></div><div className="about-copy"><SectionLabel>Why Zulu</SectionLabel><h2>Protection built on <em>presence.</em></h2><p className="lead">We are committed to providing top-notch armed response services in Ermelo and surrounding areas.</p><p>With years of experience and a highly trained team, we combine local knowledge with disciplined operations. Every call is treated with urgency. Every client is treated with respect.</p><a className="text-link" href="#contact">Meet your security partner <ArrowRight size={17} /></a><div className="about-points"><div><BadgeCheck size={19} /><span>Trained, professional teams</span></div><div><BadgeCheck size={19} /><span>Fast, accountable response</span></div><div><BadgeCheck size={19} /><span>Service you can trust</span></div></div></div></div></section>
}

const uniformItems = ['Black combat trousers', 'Black combat boots', 'Black t-shirt with company logo', 'Black jacket with company logo', 'Black trousers and shoes', 'White branded t-shirt', 'Black tie and cap', 'Black jersey with company logo']

function Uniform() {
  return <section className="uniform-section" id="uniform"><div className="container uniform-grid"><div className="uniform-image"><img src={images.guard} alt="Zulu Armed Response officer wearing the branded black tactical uniform" /><div className="uniform-badge"><span className="mini-star">★</span><span>Zulu standard<br /><strong>Professional presence</strong></span></div></div><div className="uniform-copy"><SectionLabel>Our uniform</SectionLabel><h2>A uniform that signals <em>readiness.</em></h2><p className="lead">Every detail of our appearance is designed to communicate discipline, confidence and professional service.</p><p>Our teams report for duty in a consistent Zulu Armed Response uniform, carrying the company star-and-guns identity with pride while remaining visible and approachable in the community.</p><div className="uniform-list">{uniformItems.map((item) => <div key={item}><BadgeCheck size={17} /><span>{item}</span></div>)}</div></div></div></section>
}

function Commitment() {
  return <section className="commitment-section"><div className="container commitment-grid"><div><SectionLabel>The Zulu standard</SectionLabel><h2>Professional, compliant, <em>accountable.</em></h2></div><div className="commitment-copy"><p>Zulu Armed Response is a BBBEE-registered private security services provider committed to professional and reliable security solutions tailored for your safety.</p><div className="commitment-stats"><div><strong>PSIRA</strong><span>Member response officers</span></div><div><strong>24/7</strong><span>Supervision &amp; response</span></div><div><strong>3× NIGHT</strong><span>Supervisor checks each night</span></div></div></div></div></section>
}

function Gallery() {
  return <section className="gallery-section" aria-label="Zulu Armed Response in action"><div className="container"><div className="gallery-heading"><div><SectionLabel>On the ground</SectionLabel><h2>Protection you can <em>see.</em></h2></div><p>Real people. Real readiness. A visible security presence built for the moments that matter.</p></div><div className="photo-grid"><figure className="photo-card photo-card-wide"><img src={images.inspection} alt="Zulu Armed Response officer inspecting a vehicle at an industrial site" /><figcaption>Site inspections</figcaption></figure><figure className="photo-card"><img src={images.ladder} alt="Zulu Armed Response officer securing a property at night" /><figcaption>Rapid response</figcaption></figure><figure className="photo-card"><img src={images.patrol} alt="Zulu Armed Response patrol vehicles operating at night" /><figcaption>Night patrols</figcaption></figure><figure className="photo-card photo-card-feature"><img src={images.campaign} alt="Zulu Armed Response service team and security vehicle" /><figcaption>Ready for action</figcaption></figure></div></div></section>
}

function Coverage() {
  return <section className="coverage-section" id="coverage"><div className="container coverage-grid"><div><SectionLabel>Our coverage</SectionLabel><h2>Local strength.<br /><em>Serious reach.</em></h2><p>Wherever you are in Ermelo and the surrounding areas, Zulu Armed Response is close by and ready to act.</p><a className="button button-primary" href="#contact">Check your coverage <ArrowRight size={17} /></a></div><div className="coverage-card"><div className="radar"><span /><span /><span /><div className="radar-dot dot-one" /><div className="radar-dot dot-two" /><div className="radar-center" /></div><div className="coverage-list"><span><i />Ermelo</span><span><i />Surrounding areas</span><span><i />24/7 dispatch</span></div></div></div></section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="container contact-grid"><div><SectionLabel>Start a conversation</SectionLabel><h2>Ready when<br /><em>you are.</em></h2><p>Tell us what you need protected and we will help you find the right security solution.</p></div><div className="contact-card"><div className="contact-row"><span>Call us directly</span><a href="tel:0768722862">076 872 2862</a></div><div className="contact-row"><span>Also available</span><a href="tel:0787360691">078 736 0691</a></div><div className="contact-row"><span>Email</span><a href="mailto:zuluarmedresponse@gmail.com">zuluarmedresponse@gmail.com</a></div><div className="contact-row"><span>Head office</span><strong>1251 Sibiya Street, Phumula<br />Ermelo, 2351</strong></div><a className="button button-light" href="tel:0768722862"><Phone size={16} /> Speak to our team <ArrowRight size={17} /></a></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-top"><Logo /><div className="footer-links"><a href="#services">Services</a><a href="#about">About us</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a></div><a className="footer-phone" href="tel:0768722862"><Phone size={15} /> 076 872 2862</a></div><div className="container footer-bottom"><span>© 2026 Zulu Armed Response. All rights reserved.</span><span>Professional · Reliable · Ready</span></div></footer>
}

export default function Page() {
  return <main><Header /><Hero /><TrustBar /><Services /><About /><Uniform /><Commitment /><Gallery /><Coverage /><Contact /><Footer /></main>
}
