"use client"
import style from "./Navbar.module.scss";
import Link from "next/link";
import {eUkraineFont} from "../../common/fonts/fonts";
import {useState} from "react";
import {useFetchData} from "../../hooks/useFetchData";
import Loader from "../CircleLoader/Loader";


export default function Navbar() {
    const [isShowMenu, setShowMenu] = useState(false);
    const {finallyData, loader} = useFetchData('/global', ['NavbarLinks']);
    const navbarData = finallyData?.NavbarLinks;

    return (
        <div className={style.navbar_container} id={"navbar"}>
            <span className={style.navbar_inner}>
                <div>
                <Link href={'/'}>
                    <img src="/NavbarImages/logo.svg" alt="logo"/>
                </Link>
            </div>
                {loader
                    ? <Loader/>
                    : <>
                        <img onClick={() => setShowMenu(!isShowMenu)} className={style.menu_button}
                             src="/NavbarImages/open_menu.svg"
                             alt="close_button"/>
                        <ul className={style.links_block}>
                            {navbarData?.map((link) => (
                                <li className={eUkraineFont.Regular.className} key={link?.id}><Link
                                    href={link?.Hyperlink}>{link?.LinkName}</Link></li>
                            ))}
                        </ul>
                    </>
                }
            </span>
            {isShowMenu
                ? <div className={style.mobile_link_block}>
                    <ul className={style.mobile_links}>
                        {navbarData.map((link) => (
                            <li className={eUkraineFont.Regular.className} key={link?.id}><Link
                                href={link?.Hyperlink}>{link?.LinkName}</Link></li>
                        ))}
                    </ul>
                </div>
                : null}
        </div>
    );
};