import React from 'react';
import style from "../../../app/Homepage/Homepage.module.scss";
import {codecColdFont, eUkraineFont} from "../../../common/fonts/fonts";
import {useFetchData} from "../../../hooks/useFetchData";

export default function ServiceBanner() {
    const getServiceBannerData = useFetchData('/homepage', ['ServicesBanner.ServiesList']);
    const bannerData = getServiceBannerData?.ServicesBanner;

    return (
        <div className={style.services_banner}>
            <img src="/Banners/Service_banner.jpg" alt="Service_banner"/>
            <div className={style.answers_block}>
                <h3 className={eUkraineFont.Regular.className}>{bannerData?.Header}</h3>
                <p className={eUkraineFont.Regular.className}>{bannerData?.Description}</p>
                <div className={style.blue_line}/>
                <div className={style.answers_block_answer + ' ' + eUkraineFont.Regular.className}>
                    {bannerData.ServiesList.map((item) => (
                        <p key={item.id}>{item.ListItem}</p>
                    ))}
                </div>
                <h5 className={codecColdFont.Regular.className}>{bannerData?.Link}</h5>
            </div>
        </div>
    );
}

