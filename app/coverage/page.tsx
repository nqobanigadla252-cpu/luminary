import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageHero, SectionLabel } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'Coverage | Zulu Armed Response',
  description:
    'Headquartered in Ermelo with protection across South Africa — local communities, regional operations and 24/7 dispatch.',
}

const areas = [
  'Ermelo & Phumula — home base, fastest response',
  'Mpumalanga — residential, retail and industrial sites',
  'Regional operations — escorts, events and deployments',
  'Nationwide — long-term contracts and special assignments',
]

export default function CoveragePage() {
  return (
    <main>
      <PageHero
        eyebrow="Our coverage"
        image="/images/response.webp"
        title={
          <>
            Local strength.
            <br />
            <em>Serious reach.</em>
          </>
        }
        sub="From local communities to operations across South Africa, Zulu Armed Response brings dependable protection wherever you need it."
        crumb="Coverage"
      />
      <section className="coverage-section">
        <div className="container coverage-grid">
          <div data-reveal>
            <SectionLabel>Where we operate</SectionLabel>
            <h2>
              One network.
              <br />
              <em>Every province.</em>
            </h2>
            <ul className="area-list">
              {areas.map((a) => (
                <li key={a}>
                  <MapPin size={15} />
                  {a}
                </li>
              ))}
            </ul>
            <Link className="button button-primary" href="/contact">
              Check your coverage <ArrowRight size={17} />
            </Link>
          </div>
          <div className="coverage-card" data-reveal style={{ transitionDelay: '120ms' }}>
            <div className="radar">
              <span />
              <span />
              <span />
              <div className="radar-dot dot-one" />
              <div className="radar-dot dot-two" />
              <div className="radar-center" />
            </div>
            <div className="coverage-list">
              <span>
                <i />
                South Africa
              </span>
              <span>
                <i />
                Regional operations
              </span>
              <span>
                <i />
                24/7 dispatch
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
