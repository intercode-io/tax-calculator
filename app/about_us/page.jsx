'use client'
import React from 'react';
import Footer from "../../components/Footer/Footer";
import ConsultationBanner from "../../components/Banners/ConsultationBanner/ConsultationBanner";
import style from './AboutUs.module.scss';
import Advantages from "../../components/AdvantagesSerction/Advantages";
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";

function Page() {
    return (
        <>
            <img className={style.main_image}  src="/AboutUs_page/auto.jpg" alt="auto"/>
            <div className={style.section_wrapper}>
                <div className={style.section_container}>
                    <div className={style.about_company_block}>
                        <div className={style.about_company_block__text}>
                            <h3 className={eUkraineFont.Regular.className}>Компанія Leasing Motors</h3>
                            <p className={codecColdFont.Regular.className}>
                                Наша компанія є провідним постачальником автомобілів з Європи на український ринок понад
                                10 років. Ми пропонуємо широкий вибір автомобілів різних марок та моделей, які пройшли
                                всі необхідні перевірки та дозвільні процедури, щоб відповідати всім стандартам і
                                вимогам.
                                <br/>
                                <br/>
                                Наші експерти з величезним досвідом у автомобільній галузі працюють від замовлення авто
                                та його підбору до оформлення необхідних документів та доставки прямо до ваших дверей.
                                Ми дбаємо про те, щоб наші клієнти отримали найкращу якість та послуги, а також
                                максимальну зручність та ефективність.
                                <br/>
                                <br/>
                                Наша мета полягає у забезпеченні наших клієнтів високоякісними автомобілями з Європи за
                                доступними цінами, які задовольнять їх потреби та очікування. Ми завжди готові допомогти
                                вам з вибором автомобіля, відповісти на всі запитання та забезпечити повну підтримку на
                                кожному етапі процесу.
                            </p>
                        </div>
                        <div className={style.about_company_block__video}>
                            <img src="/AboutUs_page/video_preview.jpg" alt="video_preview"/>
                        </div>
                    </div>
                    <Advantages/>
                    <ConsultationBanner/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Page;