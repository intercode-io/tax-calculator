import 'antd/dist/antd.css';
import MainLayout from "../components/MainLayout";

import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";

function MyApp({Component, pageProps}) {
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
