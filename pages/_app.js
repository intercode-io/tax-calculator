import 'antd/dist/antd.css';
import MainLayout from "../components/MainLayout";

import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import Script from "next/script";


function MyApp({Component, pageProps}) {
    return (
        <>
            <DefaultSeo {...SEO}/>
            <MainLayout>
                <Script strategy='lazyOnload'
                        src="https://www.googletagmanager.com/gtag/js?id=G-SWREFLQE88"
                />
                <Script id="scripts1" strategy='lazyOnload'>
                    {`window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-SWREFLQE88');
                    `}
                </Script>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default MyApp
