import {
  Clock3,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Siren,
  Users,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  slug: string
  title: string
  text: string
  intro: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: ShieldCheck,
    slug: 'armed-response',
    title: 'Armed Response',
    text: 'Rapid, professional intervention when every second counts.',
    intro:
      'When your alarm, panic button or phone call comes in, our control room dispatches the nearest armed response unit immediately. Officers secure the scene, assess the threat and stay with you until the situation is resolved.',
    image: '/images/response.webp',
    features: ['Alarm & panic activation response', 'Nearest unit dispatched 24/7', 'On-scene securing & backup'],
  },
  {
    icon: Users,
    slug: 'static-guarding',
    title: 'Static Guarding',
    text: 'Visible, trained protection for people, property and assets.',
    intro:
      'A trained officer physically stationed at your gate, entrance or site — controlling access, logging movement and acting as a visible deterrent around the clock.',
    image: '/images/guard.webp',
    features: ['Gate & access point duties', 'Patrol logs and incident reports', 'Armed or unarmed officers'],
  },
  {
    icon: Radio,
    slug: 'event-security',
    title: 'Event Security',
    text: 'Calm, capable teams who keep your event moving safely.',
    intro:
      'From private functions to large public gatherings, our event teams handle access control, crowd management and emergency response so your event runs safely from setup to close.',
    image: '/images/campaign.webp',
    features: ['Crowd management & screening', 'VIP and backstage protection', 'Pre-event risk assessment'],
  },
  {
    icon: Siren,
    slug: 'patrol-services',
    title: 'Patrol Services',
    text: 'Proactive mobile patrols that deter incidents before they happen.',
    intro:
      'Marked vehicles conduct scheduled and random patrols of your property or neighbourhood — checking gates, fences and entry points. A visible presence that stops trouble before it starts.',
    image: '/images/patrol.webp',
    features: ['Scheduled & random patrols', 'Visible deterrence presence', 'Supervisor check-ins each night'],
  },
  {
    icon: LockKeyhole,
    slug: 'access-control',
    title: 'Access Control',
    text: 'Disciplined entry management for safer sites and workplaces.',
    intro:
      'We manage who comes in and who goes out — visitor verification, sign-in procedures, boom and gate control. Disciplined entry management for estates, offices and industrial sites.',
    image: '/images/inspection.webp',
    features: ['Entry & exit screening', 'Visitor management', 'Perimeter integrity checks'],
  },
  {
    icon: Clock3,
    slug: 'alarm-response',
    title: 'Alarm Response',
    text: 'A dependable response team ready around the clock.',
    intro:
      'Linked to your alarm system, our response units investigate every activation — real or false — so you never have to check a triggered alarm on your own.',
    image: '/images/ladder.webp',
    features: ['Alarm monitoring response', 'Keyholding services', 'False-alarm verification'],
  },
  {
    icon: ShieldCheck,
    slug: 'vip-protection',
    title: 'VIP Protection',
    text: 'Discreet, highly focused protection for high-profile clients.',
    intro:
      'Discreet close protection for executives, public figures and families. Our officers plan routes, assess venues and stay close without getting in the way.',
    image: '/images/hero.webp',
    features: ['Close protection officers', 'Route & venue planning', 'Discreet low-profile detail'],
  },
  {
    icon: Radio,
    slug: 'armed-escort',
    title: 'Armed Escort',
    text: 'Professional movement support for people, goods and assets.',
    intro:
      'Armed escort for cash movements, valuable goods and high-risk travel — route planning, convoy procedures and trained officers who stay alert from pickup to drop-off.',
    image: '/images/patrol.webp',
    features: ['Cash & asset escorts', 'Convoy protection', 'High-risk movement support'],
  },
  {
    icon: Users,
    slug: 'bouncers-guards',
    title: 'Bouncers & Guards',
    text: 'Trained armed and unarmed personnel for every environment.',
    intro:
      'Licensed door supervisors and guards for venues, clubs and premises — firm, professional crowd control that keeps your patrons and your licence safe.',
    image: '/images/campaign.webp',
    features: ['Venue door supervision', 'Crowd control & ejections', 'Licensed, trained personnel'],
  },
]

export const faqs = [
  {
    q: 'How fast is your armed response?',
    a: 'Our control room dispatches the nearest unit immediately when an alarm or call comes in. Response times depend on your area, but our patrol network is built around reaching clients within minutes, not hours.',
  },
  {
    q: 'Are your officers PSIRA registered?',
    a: 'Yes. Our response officers are PSIRA-registered and undergo continuous training in firearms competency, first aid and conflict management.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We are headquartered in Ermelo and provide services across South Africa — from local residential cover to regional operations and event security nationwide.',
  },
  {
    q: 'Can I get guards for a once-off event?',
    a: 'Absolutely. We provide armed and unarmed guards, bouncers and access control teams for once-off events as well as long-term contracts.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the quote form or call us directly on 076 872 2862. Tell us what you need protected and we will put together a solution that fits your risk and budget.',
  },
]
