import 'antd/dist/antd.css';
import MainLayout from "../components/MainLayout";

import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import {useRouter} from "next/router";
import {useEffect} from "react";
import * as ga from "../lib/ga";


function MyApp({Component, pageProps}) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    return (
        <>
            <DefaultSeo {...SEO}/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default MyApp
