import type { Metadata } from 'next'
import { PageHero } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zulu Armed Response',
  description: 'How Zulu Armed Response collects, uses and protects your personal information.',
}

const sections = [
  {
    h: '1. Introduction',
    p: 'Zulu Armed Response ("we", "us", "our") respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) and the General Data Protection principles. This Privacy Policy explains how we collect, use, store and share your personal data when you use our website or engage our services.',
  },
  {
    h: '2. Information we collect',
    p: 'We may collect the following types of personal information: contact details (name, phone number, email address, physical address), service enquiry details, billing information, site or property details relevant to your security requirements, and technical data such as IP address, browser type and pages visited (via cookies).',
  },
  {
    h: '3. How we use your information',
    p: 'Your personal information is used to: respond to enquiries and quote requests, provide and manage security services, communicate with you about your account or service, comply with legal obligations, and improve our website and services. We do not sell your personal information to third parties.',
  },
  {
    h: '4. Cookies',
    p: 'Our website uses cookies to improve your browsing experience and analyse traffic. You can control cookie preferences through your browser settings or via our cookie consent banner. Essential cookies are required for the site to function; analytics cookies are optional.',
  },
  {
    h: '5. Data storage and security',
    p: 'We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss or destruction. Data is stored securely and access is restricted to authorised personnel who require it to perform their duties.',
  },
  {
    h: '6. Sharing of information',
    p: 'We may share your information with trusted service providers who assist us in operating our business (e.g. hosting, billing), and where required by law. All third parties are bound by confidentiality obligations consistent with POPIA.',
  },
  {
    h: '7. Your rights',
    p: 'You have the right to access, correct or request deletion of your personal information. You may also object to the processing of your data or withdraw consent at any time. To exercise these rights, contact us using the details below.',
  },
  {
    h: '8. Retention',
    p: 'We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. After this period, data is securely deleted or anonymised.',
  },
  {
    h: '9. Changes to this policy',
    p: 'We may update this Privacy Policy from time to time. The latest version will always be available on this page, with the updated date shown below.',
  },
  {
    h: '10. Contact us',
    p: 'If you have any questions about this Privacy Policy or how we handle your data, contact us at zuluarmedresponse@gmail.com or call 076 872 2862. Postal address: 1251 Sibiya Street, Phumula, Ermelo, 2351.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <em>Policy</em></>}
        sub="How we collect, use and protect your personal information."
        crumb="Privacy Policy"
        image="/images/inspection.webp"
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
