import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, BadgeCheck, Phone } from 'lucide-react'
import { PageHero, SectionLabel } from '@/components/site/shared'
import { services } from '@/lib/data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | Zulu Armed Response`,
    description: service.intro,
  }
}

const steps = [
  {
    title: 'Tell us what you need',
    text: 'Call us or send the quote form — describe your site, event or concern.',
  },
  {
    title: 'We assess the risk',
    text: 'A supervisor reviews your situation and recommends the right level of cover.',
  },
  {
    title: 'Officers deployed',
    text: 'Trained, supervised personnel on post — monitored by our control room 24/7.',
  },
]

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = services.findIndex((s) => s.slug === slug)
  const service = services[index]
  if (!service) notFound()

  const prev = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]

  return (
    <main>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, '0')} of ${String(services.length).padStart(2, '0')}`}
        title={
          <>
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <em>{service.title.split(' ').slice(-1)}</em>
          </>
        }
        sub={service.text}
        crumb={service.title}
        image={service.image}
      />

      <section className="svc-split">
        <div className="container svc-split-grid">
          <div className="svc-media" data-reveal>
            <div className="svc-frame">
              <img src={service.image} alt={`${service.title} — Zulu Armed Response`} />
            </div>
            <div className="svc-badge">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>
                Service
                <br />
                <strong>detail</strong>
              </p>
            </div>
          </div>
          <div className="svc-copy" data-reveal style={{ transitionDelay: '120ms' }}>
            <SectionLabel>What you get</SectionLabel>
            <h2>
              {service.title} <em>done right.</em>
            </h2>
            <p className="lead">{service.intro}</p>
            <ul className="svc-features">
              {service.features.map((f) => (
                <li key={f}>
                  <BadgeCheck size={18} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="svc-actions">
              <Link className="button button-primary" href={`/contact?service=${encodeURIComponent(service.title)}`}>
                Get a quote <ArrowRight size={16} />
              </Link>
              <a className="button button-ghost-dark" href="tel:0768722862">
                <Phone size={15} /> 076 872 2862
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <SectionLabel>How it works</SectionLabel>
              <h2>
                Three steps to
                <br />
                <em>being protected.</em>
              </h2>
            </div>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={step.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="step-num">0{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
                {i < steps.length - 1 && <ArrowRight className="step-arrow" size={17} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="more-services">
        <div className="container">
          <SectionLabel>More services</SectionLabel>
          <div className="svc-chips" data-reveal>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`svc-chip${s.slug === slug ? ' on' : ''}`}
              >
                <s.icon size={14} />
                {s.title}
              </Link>
            ))}
          </div>
          <div className="svc-pn" data-reveal>
            <Link href={`/services/${prev.slug}`} className="svc-pn-link">
              <ArrowLeft size={16} />
              <span>
                <small>Previous</small>
                {prev.title}
              </span>
            </Link>
            <Link href={`/services/${next.slug}`} className="svc-pn-link right">
              <span>
                <small>Next</small>
                {next.title}
              </span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
