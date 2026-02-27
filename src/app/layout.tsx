import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "History of the Coronado Yacht Club | Est. 1913",
  description:
    "From six yachtsmen in a boathouse to Olympic champions and a $18.5M redevelopment. Explore the full history of the Coronado Yacht Club on Glorietta Bay, Coronado, California.",
  keywords: [
    "Coronado Yacht Club",
    "CYC history",
    "Glorietta Bay",
    "Coronado California",
    "yacht club history",
    "sailing history",
    "San Diego yachting",
  ],
  openGraph: {
    title: "History of the Coronado Yacht Club | Est. 1913",
    description:
      "From six yachtsmen in a boathouse to Olympic champions. The full story of the Coronado Yacht Club.",
    type: "website",
    locale: "en_US",
    siteName: "Coronado Yacht Club History",
  },
  twitter: {
    card: "summary_large_image",
    title: "History of the Coronado Yacht Club | Est. 1913",
    description:
      "From six yachtsmen in a boathouse to Olympic champions. The full story of the Coronado Yacht Club.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coronado Yacht Club",
              foundingDate: "1913",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1631 Strand Way",
                addressLocality: "Coronado",
                addressRegion: "CA",
                postalCode: "92118",
                addressCountry: "US",
              },
              description:
                "A historic yacht club on Glorietta Bay in Coronado, California, founded in 1913 and reconstituted in 1932.",
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
