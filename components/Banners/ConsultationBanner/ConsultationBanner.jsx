import React from 'react';
import style from "../../../app/Homepage/Homepage.module.scss";
import {FeedbackForm} from "../../Forms/HomePageFeedbackForm/FeedbackForm";
import Image from "next/image";
import {codecColdFont, eUkraineFont} from "../../../common/fonts/fonts";
import {useFetchData} from "../../../hooks/useFetchData";
import Loader from "../../CircleLoader/Loader";

export default function ConsultationBanner() {
    const {
        finallyData,
        loader
    } = useFetchData('/homepage', ['ContactForm.SocialItems', 'ContactForm.SocialItems.SocialImage']);
    const bannerData = finallyData?.ContactForm;


    return (
        <div className={style.consultation_banner}>
            {loader ? <Loader/>
                : <div className={style.answers_block}>
                    <h3 className={eUkraineFont.Regular.className}>{bannerData?.Header}</h3>
                    <h5 className={eUkraineFont.Regular.className}>{bannerData?.Description}</h5>
                    <div className={style.blue_line}/>
                    <div className={style.contact_form}>
                        <div className={style.contact_form__inner_content}>
                            <FeedbackForm/>
                        </div>
                    </div>
                    <div className={style.answers_block__socials}>
                        <p className={codecColdFont.Regular.className}>Або напишіть нам в соціальних мережах</p>
                        <div className={style.social_items}>
                            {bannerData?.SocialItems.map((item) => (
                                <a href={item?.SocialLink} target="_blank" rel="noreferrer" key={item.id}>
                                    <Image width={32} height={32}
                                           src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item?.SocialImage?.data?.attributes?.url}`}
                                           alt={'social_image'}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            }
            <img src="/Banners/Consultation_banner.jpg" alt="Consultation_banner"/>
        </div>
    );
}

