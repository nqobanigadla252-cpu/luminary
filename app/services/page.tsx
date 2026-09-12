import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, SectionLabel } from '@/components/site/shared'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services | Zulu Armed Response',
  description:
    'Armed response, static guarding, event security, patrols, access control, VIP protection, armed escorts and bouncers across South Africa.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        image="/images/campaign.webp"
        title={
          <>
            Security that stands
            <br />
            <em>between you and risk.</em>
          </>
        }
        sub="From a single residence to a busy commercial site, our trained teams bring presence, professionalism and precision to every assignment."
        crumb="Services"
      />
      <section className="section services-section">
        <div className="container">
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, image, slug }, index) => (
              <article className="service-card" key={title} data-reveal style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
                <img className="card-bg" src={image} alt="" aria-hidden="true" loading="lazy" />
                <span className="card-accent" />
                <span className="service-number">0{index + 1}</span>
                <Icon className="service-icon" size={30} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="card-cta" href={`/services/${slug}`} aria-label={`Learn more about ${title}`}>
                  <span>Learn more</span>
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
          <div className="preview-more" data-reveal>
            <SectionLabel>Not sure what you need?</SectionLabel>
            <p className="preview-note">
              Tell us about your site or event and we will recommend the right level of protection.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
