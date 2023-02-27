'use client'
import style from './Inputs.module.scss';
import {codecColdFont} from "../../common/fonts/fonts";
import {useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";

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

export function Dropdown(props) {

    const dropDownRef = useRef(null);
    const button = useRef(null);
    const value = useRef(null);
    const [img, setImage] = useState(props.icon);
    useOutsideClick(dropDownRef, props.active.onChange);
    const handleClick = (event) => {
        const number = event.innerHTML;
        props.onChange.onChange(Number(number));
        props.active.onChange(false);
    }


    useEffect(() => {
        if (props.isValidate) {
            button.current.style.border = "1px solid red";
            setImage(props.error_icon)
        }
    }, [props.isValidate])


    useEffect(() => {
        if (props.onChange.value !== 0) {
            button.current.style.border = "1px solid #70B0FB";
            setImage(props.active_icon)
        }
    }, [props.onChange.value]);

    return (
        <>
            <div className={style.menu_container}>
                <button ref={button}
                        onClick={() => props.active.onChange(!props.active.value)}
                        style={{border: !props.active.value ? '1px solid #B1C0D4' : '1px solid #70B0FB'}}
                >
                    <div className={codecColdFont.Regular.className}>
                        <img src={img} alt="icon"/>
                        {props.onChange.value === 0
                            ? <p ref={value}>Оберіть зі списку</p>
                            : <p ref={value}>{props.onChange.value}</p>
                        }
                    </div>
                    {!props.active.value
                        ? <img src="/SelectInput/open_arrow.svg" alt="open_arrow"/>
                        : <img src="/SelectInput/close_arrow.svg" alt="close_arrow"/>
                    }
                </button>
                {props.active.value
                    ? <div id={"dropdown"} className={style.dropdown} ref={dropDownRef}>
                        {props.dataArray.map((item, index) => (
                            <p onClick={(event) => handleClick(event.target)} key={index}>{item}</p>
                        ))}
                    </div>
                    : null
                }
            </div>
            {props.isValidate && value.current.innerHTML === 'Оберіть зі списку'
                ? <p className={codecColdFont.Regular.className} style={{
                    fontSize: "14px",
                    fontWeight: '400',
                    color: "#FF7575",
                    position: "absolute"
                }}>
                    Це поле обов’язкове для заповнення!
                </p>
                : null
            }
        </>
    )
}

export function DropdownType(props) {
    const [img, setImage] = useState(props.icon);
    const button = useRef(null);
    const dropDownRef = useRef(null);
    const [text, setText] = useState(null);
    useOutsideClick(dropDownRef, props.active.onChange);
    const handleClick = (event) => {
        const number = event.getAttribute('data-value');
        const text = event.innerHTML;
        props.onChange.onChange(Number(number));
        setText(text);
        props.active.onChange(false);
    }

    useEffect(() => {
        if (props.onChange.value !== 0) {
            button.current.style.border = "1px solid #70B0FB";
            setImage(props.active_icon)
        }
    }, [props.onChange.value]);

    useEffect(() => {
        if (props.isValidate) {
            button.current.style.border = "1px solid red";
            setImage(props.error_icon)
        }
    }, [props.isValidate])


    return (

        <>
            <div className={style.menu_container}>
                <button ref={button}
                        onClick={() => props.active.onChange(!props.active.value)}
                        style={{border: !props.active.value ? '1px solid #B1C0D4' : '1px solid #70B0FB'}}
                >
                    <div className={codecColdFont.Regular.className}>
                        <img src={img} alt="icon"/>
                        {text === null ? <text ref={props.refer}>Оберіть зі списку</text> :
                            <p ref={props.refer}>{text}</p>}
                    </div>
                    {!props.active.value
                        ? <img src="/SelectInput/open_arrow.svg" alt="open_arrow"/>
                        : <img src="/SelectInput/close_arrow.svg" alt="close_arrow"/>
                    }
                </button>
                {props.active.value
                    ? <div id={"dropdown"} className={style.dropdown} ref={dropDownRef}>
                        {engineTypes.map((item, index) => (
                            <p onClick={(event) => handleClick(event.target)} data-value={item.value}
                               key={index}>{item.type}</p>
                        ))}
                    </div>
                    : null
                }
            </div>
            {props.isValidate && props.refer.current.innerHTML === 'Оберіть зі списку'
                ? <p className={codecColdFont.Regular.className} style={{
                    fontSize: "14px",
                    fontWeight: '400',
                    color: "#FF7575",
                    position: "absolute"
                }}>
                    Це поле обов’язкове для заповнення!
                </p>
                : null
            }
        </>

    )
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
}


export function Input(props) {
    return (
        <div className={style.defaultInput}>
            <img src={props.icon} alt=""/>
            <input type="text"
                   value={props.value}
                   onChange={props.handleChange}
                   placeholder={'Введіть ім’я'}
                   name={props.name}
                   className={codecColdFont.Regular.className}
            />
        </div>
    )
}