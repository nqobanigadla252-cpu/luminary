import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Counter, PageHero, SectionLabel } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'About us | Zulu Armed Response',
  description:
    'Zulu Armed Response is a BBBEE-registered private security provider with PSIRA-registered officers, 24/7 supervision and nationwide coverage.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Zulu Armed Response"
        image="/images/guard.webp"
        title={
          <>
            Protection built on <em>presence.</em>
          </>
        }
        sub="We combine local knowledge with disciplined operations. Every call is treated with urgency. Every client is treated with respect."
        crumb="About us"
      />
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-images" data-reveal>
            <div className="image-frame image-large">
              <img src="/images/response.webp" alt="Zulu Armed Response officer beside a patrol vehicle at night" loading="lazy" />
            </div>
            <div className="image-frame image-small">
              <img src="/images/guard.webp" alt="Zulu Armed Response security officer on duty" loading="lazy" />
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
            <SectionLabel>Who we are</SectionLabel>
            <h2>
              Disciplined teams.
              <br />
              <em>Real accountability.</em>
            </h2>
            <p className="lead">
              We are committed to providing top-notch armed response and security services across the country.
            </p>
            <p>
              With years of experience and a highly trained team, we combine local knowledge with disciplined
              operations. Every call is treated with urgency. Every client is treated with respect.
            </p>
            <Link className="text-link" href="/contact">
              Meet your security partner <ArrowRight size={17} />
            </Link>
            <div className="about-points">
              <div>
                <BadgeCheck size={19} />
                <span>Trained, professional teams</span>
              </div>
              <div>
                <BadgeCheck size={19} />
                <span>Fast, accountable response</span>
              </div>
              <div>
                <BadgeCheck size={19} />
                <span>Service you can trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="commitment-section">
        <div className="container commitment-grid">
          <div data-reveal>
            <SectionLabel>The Zulu Armed Response standard</SectionLabel>
            <h2>
              Professional, compliant, <em>accountable.</em>
            </h2>
          </div>
          <div className="commitment-copy" data-reveal style={{ transitionDelay: '120ms' }}>
            <p>
              Zulu Armed Response is a BBBEE-registered private security services provider committed to professional
              and reliable security solutions tailored for your safety.
            </p>
            <div className="commitment-stats">
              <div className="psira-stat">
                <img src="/psira.png" alt="PSIRA Registered" />
                <span>PSIRA Registered officers</span>
              </div>
              <div>
                <strong>
                  <Counter to={24} suffix="/7" />
                </strong>
                <span>Supervision &amp; response</span>
              </div>
              <div>
                <strong>
                  <Counter to={3} suffix="×" />
                </strong>
                <span>Supervisor checks each night</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
