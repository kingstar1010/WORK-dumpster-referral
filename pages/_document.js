import { Html, Head, Main, NextScript } from 'next/document'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Your Dumpster Pro",
  "url": "https://yourdumpster.pro",
  "logo": "https://www.yourdumpsterguydumpsterrentals.com/share.jpg",
  "image": "https://www.yourdumpsterguydumpsterrentals.com/share.jpg",
  "description": "Your preferred dumpster rental company service Metro Detroit and the surrounding areas!",
  "priceRange": "$$",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "22007 Virginia Ave",
     "addressLocality": "Eastpoint",
     "addressRegion": "MI",
     "postalCode": "48021",
     "addressCountry": "United States"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.4597352,
    "longitude": -82.9567065
  },
  "email": "yourguy@youdumpsterguydumpsterrentals.com",
  // schema.org mentions this one
  "openingHours": "Mo 00:00-23:55 Tu 00:00-23:55 We 00:00-23:55 Th 00:00-23:55 Fr 00:00-23:55 Sa 00:00-23:55 Su 00:00-23:55",
  // But Google says it only supports this one
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:55"
    }
  ],
  "telephone": "+1 586-943-5752"
};

export default function MyDocument() {
  return <Html lang="en">
    <Head>
      <link rel="canonical" href="https://yourdumpster.pro" />

      {/* Crawling metas */}
      <meta name="keywords" content="dumpster,rental,michigan,detroit,junk,removal,waste,management" />
      <meta name="author" content='Your Dumpster Pro' />
      <meta name="description" content="Local dumpster rental and complete cleaning services made to get you a rental or contract work FAST" />
      <link property="image" href="/share.jpg" />

      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Local dumpster rental and complete cleaning services made to get you a rental or contract work FAST" />
      <meta property="og:image" name="thumb" content="/share.jpg" />
      <meta property="og:title" content='Your Dumpster Pro' />
      <meta property="og:url" content="https://yourdumpster.pro" />
      <meta property="og:site_name" content='Your Dumpster Pro' />

      {/* JSON+LD for the entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Favicon branding */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* Google Analytics */}
      {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-RDXV7CG97T" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDXV7CG97T', { page_path: window.location.pathname });
          `,
        }}
      />*/}

    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
};
