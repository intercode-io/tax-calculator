import style from "../../app/Homepage/Homepage.module.scss";
import {FeedbackSlider, SmallFeedbackSlider} from "../Sliders/Sliders";
import {PrimaryButton} from "../Buttons/Buttons";
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";
import {useFetchData} from "../../hooks/useFetchData";

export default function FeedbackSection() {
    const getFeedbackData = useFetchData('/homepage', ['FedbackSlider.PhotoItem.PhotoItem ']);
    const feedbackData = getFeedbackData?.FedbackSlider;
    return (
        <div className={style.feedback}>
            <h3 className={eUkraineFont.Regular.className}>{feedbackData?.Header}</h3>
            <p className={codecColdFont.Regular.className}>{feedbackData?.Description}</p>
            <div className={style.feedback__instagram_card_container}>
                <img src="/instagram.svg" alt="instagram"/>
                <div>
                    <img src="/lm_logo.svg" alt="lm_logo"/>
                    <span>
                        <p className={style.name_link + ' ' + eUkraineFont.Medium.className}>leasing.motors</p>
                        <a className={eUkraineFont.Regular.className}
                           target={"_blank"}
                           rel={'noreferrer'}
                           href={'https://www.instagram.com/leasing.motors/'}>
                            Підписатись
                        </a>
                    </span>
                </div>
            </div>
            <div className={style.desktop_slider}>
                <FeedbackSlider feedbackPhoto={feedbackData?.PhotoItem}/>
            </div>
            <div className={style.mobile_slider}>
                <SmallFeedbackSlider feedbackPhoto={feedbackData?.PhotoItem}/>
            </div>
            <PrimaryButton>Зв’язатись з нами</PrimaryButton>
        </div>
    );
}

