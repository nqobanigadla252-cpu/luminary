import type { Metadata } from 'next'
import { PageHero } from '@/components/site/shared'

export const metadata: Metadata = {
  title: 'PAIA & POPIA | Zulu Armed Response',
  description: 'Promotion of Access to Information Act and Protection of Personal Information Act compliance for Zulu Armed Response.',
}

const sections = [
  {
    h: '1. Overview',
    p: 'Zulu Armed Response is committed to compliance with the Promotion of Access to Information Act, 2000 (PAIA) and the Protection of Personal Information Act, 2013 (POPIA). This page outlines how you may request access to records held by us and how we protect your personal information.',
  },
  {
    h: '2. Information Officer',
    p: 'Our Information Officer is responsible for handling requests for access to information and ensuring compliance with PAIA and POPIA. Requests must be submitted in writing to the Information Officer at zuluarmedresponse@gmail.com or 1251 Sibiya Street, Phumula, Ermelo, 2351.',
  },
  {
    h: '3. PAIA — Right of access',
    p: 'In terms of PAIA, any person may request access to records held by a private body. Requests must be made on the prescribed form, provide sufficient detail to identify the record, and indicate the form of access required. The Information Officer will respond within the statutory timeframes.',
  },
  {
    h: '4. Records available',
    p: 'Records that may be requested include: company registration documents, service agreements (where you are a party), and records required by law to be made available. Certain records are protected from disclosure under PAIA exemptions.',
  },
  {
    h: '5. POPIA — Protection of personal information',
    p: 'POPIA requires us to process personal information lawfully and reasonably. We collect personal information only for legitimate purposes related to our security services, and we protect it through appropriate technical and organisational measures.',
  },
  {
    h: '6. Processing of personal information',
    p: 'We process personal information for the following purposes: providing security services, responding to enquiries, managing client accounts, complying with legal obligations, and maintaining records required by PSIRA and other regulatory bodies.',
  },
  {
    h: '7. Your rights under POPIA',
    p: 'You have the right to: be notified when your personal information is collected, access and correct your personal information, object to the processing of your information, request deletion of your information (subject to legal retention requirements), and lodge a complaint with the Information Regulator.',
  },
  {
    h: '8. Data subject consent',
    p: 'By using our website and services, you consent to the processing of your personal information as described in this policy and our Privacy Policy. You may withdraw consent at any time, subject to our contractual and legal obligations.',
  },
  {
    h: '9. Complaints',
    p: 'If you believe we have processed your personal information unlawfully, you may lodge a complaint with the Information Regulator of South Africa. Contact details: complaints@inforegulator.org.za or visit www.inforegulator.org.za.',
  },
  {
    h: '10. Contact us',
    p: 'For PAIA requests or POPIA enquiries, contact our Information Officer at zuluarmedresponse@gmail.com or 076 872 2862. Address: 1251 Sibiya Street, Phumula, Ermelo, 2351.',
  },
]

export default function PaiaPopiaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>PAIA & <em>POPIA</em></>}
        sub="Access to information and protection of personal information compliance."
        crumb="PAIA & POPIA"
        image="/images/response.webp"
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
