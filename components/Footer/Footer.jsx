import style from './Footer.module.scss';
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";
import Link from "next/link";
import {SocialIcon} from "../Icons/Icons";

export default function Footer() {
    return (
        <div className={style.footer_wrapper}>
            <div className={style.footer__inner}>
                <div className={style.logo}>
                    <img src="/NavbarImages/logo.svg" alt="logo"/>
                </div>
                <div className={style.navigation_block + ' ' + eUkraineFont.Regular.className}>
                    <Link href={"/"}><p>Головна</p></Link>
                    <Link href={"/"}><p>Калькулятор</p></Link>
                    <Link href={"/"}><p>Про Компанію</p></Link>
                    <Link href={"/"}><p>Контакти</p></Link>
                    <Link href={"/"}><p>Питання-Відповіді</p></Link>

                </div>
                <div className={style.contacts_block + ' ' + eUkraineFont.Regular.className}>
                    <p>Контакти:</p>
                    <span className={codecColdFont.Regular.className}>
                        <img src="/phone.svg" alt="phone"/>
                        <a href={"tel:+380 (099) 533-85-61"}>+380 (099) 533-85-61</a>
                    </span>
                    <span className={codecColdFont.Regular.className}>
                        <img src="/mail.svg" alt="phone"/>
                        <a href={"mailto:info@leasing-motors.com"}>info@leasing-motors.com</a>
                    </span>
                </div>
                <div className={style.social_network__block}>
                    <p className={eUkraineFont.Regular.className}>Наші соціальні мережі:</p>
                    <div className={style.social_network}>
                        <SocialIcon icon={'/SocialIcons/you_tube.svg'} link={"#"}/>
                        <SocialIcon icon={'/SocialIcons/Facebook.svg'} link={"#"}/>
                        <SocialIcon icon={'/SocialIcons/Tg.svg'} link={"#"}/>
                        <SocialIcon icon={'/SocialIcons/inst.svg'} link={"#"}/>
                        <SocialIcon icon={'/SocialIcons/whatsapp.svg'} link={"#"}/>
                        <SocialIcon icon={'/SocialIcons/viber.svg'} link={"#"}/>
                    </div>
                </div>
            </div>
            <p className={codecColdFont.Regular.className}>© Leasing Motors 2023. All right reserved.</p>
        </div>
    );
}
