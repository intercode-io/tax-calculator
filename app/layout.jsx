import './globals.css'
import Navbar from "../components/Navbar/Navbar";
import Script from "next/script";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Script id="google_analytics"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
        />
        <Script id="google_tag" strategy="lazyOnload">
            {` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WDVJGHD')`
            }
        </Script>
        <Script type="application/ld+json">
            {`
                "@context": "http://schema.org",
                "@type": "SoftwareApplication",
                "name": "Калькулятор розмитнення авто",
                "image": "http://www.googleusercontent.com/NavbarImages/logo.svg"
           `}
        </Script>
        <head/>
        <body>
        <main style={{
            display: "grid",
            justifyItems: 'center',
            width: "100%",
            background: '#EEF5FF'
        }}>
            <Navbar/>
            <div className="contentWrapper">
                {children}

            </div>
        </main>
        </body>
        </html>
    )
}
