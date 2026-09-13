import type { Metadata } from 'next'
import { PageHero } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Zulu Armed Response',
  description: 'The terms and conditions governing the use of Zulu Armed Response services and website.',
}

const sections = [
  {
    h: '1. Acceptance of terms',
    p: 'By accessing this website or engaging the services of Zulu Armed Response ("we", "us", "our"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.',
  },
  {
    h: '2. Services',
    p: 'Zulu Armed Response provides armed response, static guarding, event security, patrol services, access control, alarm response, VIP protection, armed escort and bouncers/guards. Specific service terms, pricing and scope will be agreed upon in writing or via quotation before deployment.',
  },
  {
    h: '3. Quotes and pricing',
    p: 'All quotations are valid for 30 days unless otherwise stated. Prices are subject to change based on operational requirements, risk assessments and scope adjustments. A formal quotation does not constitute a binding contract until accepted and signed by both parties.',
  },
  {
    h: '4. Client responsibilities',
    p: 'Clients must provide accurate information about their site, requirements and any known risks. Clients are responsible for ensuring that Zulu Armed Response personnel have lawful access to the premises and that all necessary permissions are in place for security operations.',
  },
  {
    h: '5. Payment terms',
    p: 'Invoices are payable within the terms stated on the invoice. Late payments may result in the suspension of services. A deposit may be required for new contracts. Disputed charges must be raised in writing within 7 days of the invoice date.',
  },
  {
    h: '6. Liability',
    p: 'Zulu Armed Response takes all reasonable measures to provide professional security services. However, we do not guarantee that incidents will not occur. Our liability is limited to the value of the services rendered and does not extend to consequential or indirect losses.',
  },
  {
    h: '7. Confidentiality',
    p: 'Both parties agree to keep confidential all information exchanged during the provision of services, including site details, security procedures and client information. This obligation survives termination of any agreement.',
  },
  {
    h: '8. Termination',
    p: 'Either party may terminate services with written notice as specified in the service agreement. Zulu Armed Response may suspend or terminate services immediately in the event of non-payment, breach of terms, or safety risks to our personnel.',
  },
  {
    h: '9. Force majeure',
    p: 'Zulu Armed Response is not liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including natural disasters, civil unrest, government action or labour disputes.',
  },
  {
    h: '10. Governing law',
    p: 'These Terms & Conditions are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the South African courts, unless otherwise agreed in writing.',
  },
  {
    h: '11. Changes to terms',
    p: 'We may update these Terms & Conditions at any time. The current version will always be available on this page with the updated date shown below.',
  },
  {
    h: '12. Contact',
    p: 'For questions about these Terms & Conditions, contact us at zuluarmedresponse@gmail.com or 076 872 2862. Address: 1251 Sibiya Street, Phumula, Ermelo, 2351.',
  },
]

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>Terms & <em>Conditions</em></>}
        sub="The terms governing the use of our services and website."
        crumb="Terms & Conditions"
        image="/images/guard.webp"
      />
      <section className="legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: January 2026</p>
          {sections.map((s) => (
            <div className="legal-block" key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
