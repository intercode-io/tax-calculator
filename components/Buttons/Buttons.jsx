import style from './Buttons.module.scss';
import {codecColdFont} from "../../common/fonts/fonts";

export function PrimaryButton({children, handleClick}) {
    return (
        <button onClick={handleClick}
                className={style.primary_button + " " + codecColdFont.Regular.className}
        >
            {children}
        </button>
    );
}
