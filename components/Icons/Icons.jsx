import style from './Icon.module.scss';

export function SocialIcon({icon, link}) {
    return (
        <a href={link} className={style.social_icon}>
            <img src={icon} alt="asd"/>
        </a>
    )
}