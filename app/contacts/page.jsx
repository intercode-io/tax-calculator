import Footer from "../../components/Footer/Footer";
import style from './Contacts.module.scss';
import {ContactForm} from "../../components/Forms/ContactPageForm/ContactForm";
import {eUkraineFont} from "../../common/fonts/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className={style.contacts_section}>
                <div className={style.section_inner}>
                    <ContactForm/>
                    <div className={style.content}>
                        <img src="/ContactsImage/plane.svg" alt="image"/>
                        <h5 className={eUkraineFont.Regular.className}>Наші контакти:</h5>
                        <div className={style.content__contacts}>
                            <div className={eUkraineFont.Regular.className}>
                                <img src="/ContactsImage/phone.svg" alt="phone"/>
                                <a href={"tel:+380 (099) 533-85-61"}>+380 (099) 533-85-61</a>
                            </div>
                            <div className={eUkraineFont.Regular.className}>
                                <img src="/ContactsImage/mail.svg" alt="mail"/>
                                <a href={"mailto:info@leasing-motors.com"}>info@leasing-motors.com</a>
                            </div>
                        </div>
                        <div className={style.social_block}>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/yt.svg"}
                                       alt={"socialImage"}/>
                            </a>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/fb.svg"}
                                       alt={"socialImage"}/>
                            </a>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/wp.svg"}
                                       alt={"socialImage"}/>
                            </a>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/vb.svg"}
                                       alt={"socialImage"}/>
                            </a>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/tg.svg"}
                                       alt={"socialImage"}/>
                            </a>
                            <a href="#" target={"_blank"}>
                                <Image width={32} height={32} src={"/SocialIcons/colored_icons/inst.svg"}
                                       alt={"socialImage"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

