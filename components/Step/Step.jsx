import style from './Step.module.scss';
import {eUkraineFont} from "../../common/fonts/fonts";

export default function Step({number, children}) {
    return (
        <div className={style.step_container}>
            <div className={style.step_container__step_number}>
                <h1 className={eUkraineFont.Medium.className}>
                    <span className={style.nubmer}>{number}</span>
                    <br/>
                    крок
                </h1>
            </div>
            <div className={style.step_container__step_text}>
                {children}
            </div>
        </div>
    );
}

