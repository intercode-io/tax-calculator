import style from './Buttons.module.scss';

export function PrimaryButton({children, handleClick}) {
    return (
        <button onClick={handleClick} className={style.primary_button}>{children}</button>
    );
}
