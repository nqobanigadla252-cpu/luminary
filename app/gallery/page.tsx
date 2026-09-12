'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { PageHero } from '@/components/site/shared'

const photos = [
  { src: '/images/inspection.webp', alt: 'Zulu Armed Response officer inspecting a vehicle at an industrial site', caption: 'Site inspections' },
  { src: '/images/ladder.webp', alt: 'Zulu Armed Response officer securing a property at night', caption: 'Rapid response' },
  { src: '/images/patrol.webp', alt: 'Zulu Armed Response patrol vehicles operating at night', caption: 'Night patrols' },
  { src: '/images/campaign.webp', alt: 'Zulu Armed Response service team and security vehicle', caption: 'Ready for action' },
  { src: '/images/response.webp', alt: 'Zulu Armed Response officer beside a patrol vehicle at night', caption: 'On shift' },
  { src: '/images/guard.webp', alt: 'Zulu Armed Response security officer on duty', caption: 'Static guarding' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox('')
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main>
      <PageHero
        eyebrow="On the ground"
        image="/images/patrol.webp"
        title={
          <>
            Protection you can <em>see.</em>
          </>
        }
        sub="Real people. Real readiness. A visible security presence built for the moments that matter."
        crumb="Gallery"
      />
      <section className="gallery-section gallery-page">
        <div className="container">
          <div className="gallery-grid-full">
            {photos.map((p, i) => (
              <figure
                key={p.caption}
                className="photo-card"
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                onClick={() => setLightbox(p.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(p.src)}
                aria-label={`View larger photo: ${p.caption}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox('')} role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button type="button" className="lightbox-close" aria-label="Close photo viewer" onClick={() => setLightbox('')}>
            <X size={30} />
          </button>
          <img src={lightbox} alt="Zulu Armed Response in action" />
        </div>
      )}
    </main>
  )
}
