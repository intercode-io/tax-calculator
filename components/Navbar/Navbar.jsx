"use client"
import style from "./Navbar.module.scss";
import Link from "next/link";
import {eUkraineFont} from "../../common/fonts/fonts";
import {useState} from "react";


const navbar_links = [
    {
        id: 0,
        link: '/',
        name: 'Головна'
    },
    {
        id: 1,
        link: '/', /*calculator*/
        name: 'Калькулятор'
    },
    {
        id: 2, /*about_us*/
        link: '/',
        name: 'Про Компанію'
    },
    {
        id: 3, /*contacts*/
        link: '/',
        name: 'Контакти'
    },
    {
        id: 4, /*faq*/
        link: '/',
        name: 'Питання-Відповіді'
    }
]

export default function Navbar(props) {
    const [isShowMenu, setShowMenu] = useState(false);
    return (

        <div className={style.navbar_container} id={"navbar"}>
            <span className={style.navbar_inner}>
                <div>
                <img src="/NavbarImages/logo.svg" alt="logo"/>
            </div>
            <img onClick={() => setShowMenu(!isShowMenu)} className={style.menu_button}
                 src="/NavbarImages/open_menu.svg"
                 alt="close_button"/>
            <ul className={style.links_block}>
                {navbar_links.map((link) => (
                    <li className={eUkraineFont.Regular.className} key={link.id}><Link
                        href={link.link}>{link.name}</Link></li>
                ))}
            </ul>
            </span>
            {isShowMenu
                ? <div className={style.mobile_link_block}>
                    <ul className={style.mobile_links}>
                        {navbar_links.map((link) => (
                            <li className={eUkraineFont.Regular.className} key={link.id}><Link
                                href={link.link}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>
                : null}
        </div>
    );
};