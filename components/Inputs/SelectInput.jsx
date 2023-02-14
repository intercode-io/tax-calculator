'use client'
import style from './Inputs.module.scss';
import {eUkraineFont} from "../../common/fonts/fonts";

const engineTypes = [
    {
        value: 1,
        type: 'Бензин'
    },
    {
        value: 1.2,
        type: 'Дизель'
    },
    {
        value: 0.5,
        type: 'Гібрид'
    },
    {
        value: 0,
        type: 'Електро'
    }
]

export function SelectInput(props) {
    return (
        <div className={style.select_box}>

            <select onChange={(event) => props.onChange.onChange(event.target.value)}>
                <option disabled selected>Оберіть зі списку</option>
                {props.dataArray.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>

        </div>
    );
}


export function SelectInputTypes(props) {
    return (
        <div className={style.select_box}>
            <select onChange={(event) => props.onChange.onChange(event.target.value)}>
                <option disabled selected>Оберіть зі списку</option>
                {engineTypes.map((item, index) => (
                    <option value={item.value} key={index}>{item.type}</option>
                ))}
            </select>
        </div>
    );
}


export function ToggleSwitch(props) {
    const data = props.value;
    return (
        <div className={style.toggle_switch}>
            <input
                type="checkbox"
                checked={data.value}
                onChange={() => data.onChange(!props.value.value)}
                className={style.toggle_switch_checkbox}
                id="toggleSwitch"
            />
            <label className={style.toggle_switch_label} htmlFor="toggleSwitch" style={{
                background: data.value ? 'var(--primaryColor)' : '#CDDBEE',
            }}>
                <span className={style.toggle_switch_inner}/>
                <span className={style.toggle_switch_switch}/>
            </label>
        </div>
    );
};