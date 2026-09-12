import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { Faq, PageHero, QuoteForm, SectionLabel } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'Contact | Zulu Armed Response',
  description:
    'Request a quote or speak to our team — call 076 872 2862 or email zuluarmedresponse@gmail.com. Head office: 1251 Sibiya Street, Phumula, Ermelo.',
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams

  return (
    <main>
      <PageHero
        eyebrow="Start a conversation"
        image="/images/inspection.webp"
        title={
          <>
            Ready when
            <br />
            <em>you are.</em>
          </>
        }
        sub="Tell us what you need protected and we will help you find the right security solution."
        crumb="Contact"
      />
      <section className="contact-section contact-page">
        <div className="container contact-grid">
          <div data-reveal>
            <SectionLabel>Get protected</SectionLabel>
            <h2>
              Talk to
              <br />
              <em>our team.</em>
            </h2>
            <p>
              Call us for urgent requests, or send the form and we will get back to you. For emergencies, always phone
              first.
            </p>
            <a className="button button-ghost-dark" href="tel:0768722862">
              <Phone size={16} /> 076 872 2862
            </a>
          </div>
          <div className="contact-card" data-reveal style={{ transitionDelay: '120ms' }}>
            <div className="contact-row">
              <span>Call us directly</span>
              <a href="tel:0768722862">076 872 2862</a>
            </div>
            <div className="contact-row">
              <span>Also available</span>
              <a href="tel:0787360691">078 736 0691</a>
            </div>
            <div className="contact-row">
              <span>Email</span>
              <a href="mailto:zuluarmedresponse@gmail.com">zuluarmedresponse@gmail.com</a>
            </div>
            <div className="contact-row">
              <span>Head office</span>
              <strong>
                1251 Sibiya Street, Phumula
                <br />
                Ermelo, 2351
              </strong>
            </div>
            <QuoteForm service={service} />
          </div>
        </div>
      </section>
      <Faq />
    </main>
  )
}
