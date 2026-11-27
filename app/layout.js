import './globals.css'

const SITE_URL = 'https://haagensagli.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Hågen Sagli — Quantitative Finance & Energy Markets',
  description:
    'Hågen Moe Sagli (also written Haagen Sagli / Hagen Sagli) is a Calgary-based finance professional focused on quantitative finance and energy markets. McGill Master of Finance (MMF) graduate, founder of SPC Capital Inc. and The Differential.',
  keywords:
    'Hågen Sagli, Haagen Sagli, Hagen Sagli, Hågen Moe Sagli, Haagen Moe Sagli, quantitative finance, systematic trading, energy markets, Calgary, McGill Master of Finance, MMF, SPC Capital, The Differential',
  authors: [{ name: 'Hågen Moe Sagli' }],
  creator: 'Hågen Moe Sagli',
  alternates: { canonical: SITE_URL },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  openGraph: {
    title: 'Hågen Sagli — Quantitative Finance & Energy Markets',
    description:
      'Calgary-based finance professional. McGill Master of Finance graduate. Founder of SPC Capital Inc.',
    url: SITE_URL,
    siteName: 'Hågen Sagli',
    locale: 'en_CA',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Hågen Sagli — Quantitative Finance & Energy Markets',
    description:
      'Calgary-based finance professional. McGill Master of Finance graduate. Founder of SPC Capital Inc.',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

// Structured data — helps Google and AI assistants understand who Hågen Sagli is.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hågen Moe Sagli',
  alternateName: [
    'Haagen Moe Sagli',
    'Hagen Moe Sagli',
    'Hågen Sagli',
    'Haagen Sagli',
    'Hagen Sagli',
  ],
  url: SITE_URL,
  jobTitle: 'Finance Professional',
  description:
    'Calgary-based finance professional focused on quantitative finance and energy markets. McGill Master of Finance graduate, founder of SPC Capital Inc. and The Differential.',
  nationality: { '@type': 'Country', name: 'Norway' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'McGill University — Desautels Faculty of Management',
      sameAs:
        'https://www.mcgill.ca/desautels/programs/mmf/montreal/program-overview/applied-finance-project',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Mount Royal University',
      sameAs: 'https://www.mtroyal.ca/',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'SPC Capital Inc.',
    sameAs: 'https://www.bizapedia.com/canada/spc-capital-inc.html',
  },
  knowsAbout: [
    'Quantitative Finance',
    'Systematic Trading',
    'Energy Markets',
    'Financial Modeling',
    'Momentum Strategies',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
