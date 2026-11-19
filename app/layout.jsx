import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kunal Paul | Full Stack Developer | Next.js, React, Node.js",
  description:
    "Portfolio of Kunal Paul, Full Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB. Explore production enterprise platforms, live web portals, and database architectures.",
  keywords: [
    "Kunal Paul",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Enterprise Portals",
    "Sikka Industries",
    "Web Developer Noida",
    "Portfolio",
  ],
  authors: [{ name: "Kunal Paul", url: "https://kunalpaul.dev" }],
  creator: "Kunal Paul",
  openGraph: {
    title: "Kunal Paul | Full Stack Developer",
    description:
      "Dedicated Full Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB. View production platforms and live enterprise portals.",
    url: "https://kunalpaul.dev",
    siteName: "Kunal Paul Portfolio",
    images: [
      {
        url: "/kunal-paul.jpg",
        width: 800,
        height: 1067,
        alt: "Kunal Paul - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Paul | Full Stack Developer",
    description:
      "Dedicated Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB.",
    images: ["/kunal-paul.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://kunalpaul.dev"),
};

export default function RootLayout({ children }) {
  // Schema.org Person JSON-LD structured data for rich search results
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kunal Paul",
    jobTitle: "Full Stack Developer",
    email: "paulk3226@gmail.com",
    telephone: "+91-9870321562",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gautam Buddha Nagar",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Mangalyatan University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Hi-Tech Institute of Engineering & Technology",
      },
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "PHP",
      "MySQL",
      "REST APIs",
      "Full Stack Development",
    ],
    url: "https://kunalpaul.dev",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans bg-[#f8fafc] dark:bg-[#0a0a0f] text-slate-900 dark:text-[#e5e7eb] antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}
