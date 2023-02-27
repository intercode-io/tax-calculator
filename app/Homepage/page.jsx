'use client'
import style from './Homepage.module.scss';
import Calculator from "../../components/Сalculator/Calculator";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import {useFetchData} from "../../hooks/useFetchData";
import ServiceBanner from "../../components/Banners/ServiceBanner/ServiceBanner";
import AutoCatalog from "../../components/AutoCatalogSection/AutoCatalog";
import Advantages from "../../components/AdvantagesSerction/Advantages";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import ConsultationBanner from "../../components/Banners/ConsultationBanner/ConsultationBanner";


export default function Homepage() {
    const homepageData = useFetchData('/homepage', ['*']);

    return (
        <>
            <div className={style.homepage_wrapper}>
                <div className={style.homepage_container}>
                    <Calculator header={homepageData?.Header} description={homepageData?.Description}/>
                </div>
                <div className={style.other_sections_wrapper}>
                    <div className={style.other_section_container}>
                        <AutoCatalog/>
                        <ServiceBanner/>
                        <Advantages/>
                        <FeedbackSection/>
                        <ConsultationBanner/>
                    </div>
                </div>
            </div>
        </>

    );
}

