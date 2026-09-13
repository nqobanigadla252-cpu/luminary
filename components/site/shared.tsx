'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ArrowUp, ChevronDown, Menu, Minus, Phone, Plus, X } from 'lucide-react'
import { faqs, services } from '@/lib/data'

function brandIcon(children: React.ReactNode, filled = false) {
  return function BrandIcon({ size = 16 }: { size?: number }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={filled ? 'currentColor' : 'none'}
        stroke={filled ? 'none' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    )
  }
}

const FacebookIcon = brandIcon(
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
)
const InstagramIcon = brandIcon(
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>
)
const XIcon = brandIcon(
  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />,
  true
)
const LinkedinIcon = brandIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>
)
const YoutubeIcon = brandIcon(
  <>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </>
)

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/coverage', label: 'Coverage' },
]

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Zulu Armed Response home">
      <img className="brand-logo" src="/logo.png" alt="Zulu Armed Response" />
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>Control room always on · Nationwide</span>
          <a href="tel:0768722862">
            <Phone size={12} /> In case of anything · 076 872 2862
          </a>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
            {NAV_LINKS.map((l) =>
              l.href === '/services' ? (
                <Fragment key={l.href}>
                  <div className="nav-item">
                    <Link
                      href="/services"
                      className={pathname.startsWith('/services') ? 'active' : ''}
                      aria-haspopup="true"
                    >
                      Services <ChevronDown size={13} className="caret" />
                    </Link>
                    <div className="nav-drop">
                      <div className="nav-drop-inner">
                        <Link href="/services" className="drop-all">
                          All services
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className={pathname === `/services/${s.slug}` ? 'active' : ''}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="m-item">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                    >
                      Services{' '}
                      <ChevronDown size={15} className={`caret${servicesOpen ? ' up' : ''}`} />
                    </button>
                    <div className={`m-sub${servicesOpen ? ' open' : ''}`}>
                      <Link href="/services">All services</Link>
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`}>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
                  {l.label}
                </Link>
              )
            )}
            <Link href="/contact" className="nav-cta">
              <Phone size={15} /> Get protected
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export function SiteChrome() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setShowTop(window.scrollY > 700)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <a className="float-call" href="tel:0768722862">
        <Phone size={16} /> Call now
      </a>
      <button
        type="button"
        className={`float-top${showTop ? ' show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={19} />
      </button>
    </>
  )
}

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: XIcon, label: 'X (Twitter)' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: YoutubeIcon, label: 'YouTube' },
]

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!localStorage.getItem('zar-cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const dismiss = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('zar-cookie-consent', choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <p>
          We use cookies to improve your experience and analyse site traffic. See our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link> for details.
        </p>
        <div className="cookie-actions">
          <button type="button" className="cookie-deny" onClick={() => dismiss('rejected')}>
            Decline
          </button>
          <button type="button" className="cookie-accept" onClick={() => dismiss('accepted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-angle" aria-hidden="true" />
      <div className="footer-cta">
        <div className="container footer-cta-grid">
          <div className="footer-cta-media" data-reveal>
            <img src="/images/patrol.webp" alt="Zulu Armed Response patrol vehicle at night" loading="lazy" />
          </div>
          <div className="footer-cta-copy" data-reveal style={{ transitionDelay: '120ms' }}>
            <h2>
              Call us, in case of <em>anything.</em>
            </h2>
            <p>One number. Day or night. A trained response team on the other end of the line.</p>
            <div className="footer-cta-actions">
              <a className="button button-primary" href="tel:0768722862">
                <Phone size={16} /> 076 872 2862
              </a>
              <Link className="button button-ghost" href="/contact">
                Get protected today <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-brandcol">
          <Logo />
          <p>Professional armed response and security services, from Ermelo to anywhere in South Africa.</p>
          <div className="footer-social">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={`Zulu Armed Response on ${label}`}>
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="footer-psira">
            <img src="/psira.png" alt="PSIRA Registered" />
            <span>PSIRA Registered<br />Security Provider</span>
          </div>
        </div>
        <nav className="footer-col" aria-label="Explore">
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/coverage">Coverage</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav className="footer-col" aria-label="Services">
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </nav>
        <nav className="footer-col" aria-label="Need help">
          <h4>Need help</h4>
          <Link href="/contact">Contact us</Link>
          <Link href="/contact#faq">FAQ</Link>
          <a href="tel:0768722862">076 872 2862</a>
          <a href="tel:0787360691">078 736 0691</a>
          <a href="mailto:zuluarmedresponse@gmail.com">zuluarmedresponse@gmail.com</a>
        </nav>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Zulu Armed Response. All rights reserved.</span>
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">PAIA &amp; POPIA</a>
        </div>
      </div>
    </footer>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  )
}

export function PageHero({
  eyebrow,
  title,
  sub,
  crumb,
  image,
}: {
  eyebrow: string
  title: React.ReactNode
  sub: string
  crumb: string
  image?: string
}) {
  return (
    <section className="page-hero">
      {image && <img className="page-hero-img" src={image} alt="" aria-hidden="true" />}
      <div className="page-hero-shade" />
      <div className="container page-hero-inner">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1>{title}</h1>
        <p className="page-hero-sub">{sub}</p>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>{crumb}</strong>
        </nav>
      </div>
      <svg className="page-hero-curve" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 110 L0 70 C 380 100 950 -15 1440 12 L 1440 110 Z" fill="#e1a937" />
      </svg>
    </section>
  )
}

export function Counter({ to, suffix = '', duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq-section" id="faq">
      <div className="container faq-grid">
        <div data-reveal>
          <SectionLabel>Questions</SectionLabel>
          <h2>
            Before you
            <br />
            <em>call us.</em>
          </h2>
          <p className="faq-intro">
            Straight answers about how we work. Anything else — our team is one phone call away.
          </p>
          <a className="button button-ghost-dark" href="tel:0768722862">
            <Phone size={16} /> Ask us directly
          </a>
        </div>
        <div className="faq-list" data-reveal style={{ transitionDelay: '120ms' }}>
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <span className="faq-icon">{open === i ? <Minus size={18} /> : <Plus size={18} />}</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuoteForm({ service }: { service?: string }) {
  const [form, setForm] = useState({ name: '', phone: '', service: service ?? '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (service) setForm((f) => ({ ...f, service }))
  }, [service])

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please add your name and phone number so we can call you back.')
      return
    }
    setError('')
    const subject = encodeURIComponent(`Quote request${form.service ? ` — ${form.service}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || 'Not specified'}\n\n${form.message}`
    )
    window.location.href = `mailto:zuluarmedresponse@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form className="quote-form" onSubmit={submit} noValidate>
      <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} aria-label="Your name" />
      <input type="tel" placeholder="Phone number" value={form.phone} onChange={update('phone')} aria-label="Phone number" />
      <select value={form.service} onChange={update('service')} aria-label="Service needed" className="field-full">
        <option value="">Which service do you need?</option>
        {services.map((s) => (
          <option key={s.title} value={s.title}>
            {s.title}
          </option>
        ))}
        <option value="Other">Something else</option>
      </select>
      <textarea
        placeholder="Tell us what you need protected"
        value={form.message}
        onChange={update('message')}
        aria-label="Your message"
      />
      {error && <p className="form-error">{error}</p>}
      {sent && <p className="form-success">Opening your email app — or call us now on 076 872 2862.</p>}
      <button type="submit" className="button button-light">
        Send request <ArrowRight size={17} />
      </button>
    </form>
  )
}
