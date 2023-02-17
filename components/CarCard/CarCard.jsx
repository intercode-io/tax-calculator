import style from './CarCard.module.scss';
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";

export default function CarCard({car_photo, car_name, car_price, car_characteristics}) {
    return (
        <div className={style.card_container}>
            <img src={car_photo} alt={car_photo}/>
            <div className={style.card_container__info_block}>
                <h5 className={eUkraineFont.Regular.className}>{car_name}</h5>
                <div className={style.characteristics + ' ' + codecColdFont.Regular.className}>
                    {car_characteristics.map((item, index) => (
                        <>
                            <div className={style.characteristics_item}>
                                <div className={style.characteristics_item__image}>
                                    <img src="/Cars/Characteristics_icon/year.svg" alt="year"/>
                                    <p>{item.year}</p>
                                </div>
                                <div className={style.characteristics_item__text}>
                                    <img src="/Cars/Characteristics_icon/mileage.svg" alt="mileage"/>
                                    <p>{item.mileage}</p>
                                </div>
                            </div>
                            <div className={style.characteristics_item}>
                                <div className={style.characteristics_item__image}>
                                    <img src="/Cars/Characteristics_icon/fuel_type.svg" alt="fuel_type"/>
                                    <p>{item.fuel_type}</p>
                                </div>
                                <div className={style.characteristics_item__text}>
                                    <img src="/Cars/Characteristics_icon/engine.svg" alt="engine"/>
                                    <p>{item.engine}</p>
                                </div>
                            </div>
                            <div className={style.characteristics_item}>
                                <div className={style.characteristics_item__image}>
                                    <img src="/Cars/Characteristics_icon/KP.svg" alt="KP"/>
                                    <p>{item.KP}</p>
                                </div>
                                <div className={style.characteristics_item__text}>
                                    <img src="/Cars/Characteristics_icon/turbine.svg" alt="turbine"/>
                                    <p>{item.turbine}</p>
                                </div>
                            </div>
                            <div className={style.characteristics_item}>
                                <div className={style.characteristics_item__image}>
                                    <img src="/Cars/Characteristics_icon/suspension.svg" alt="suspension"/>
                                    <p>{item.suspension}</p>
                                </div>
                                <div className={style.characteristics_item__text}>
                                    <img src="/Cars/Characteristics_icon/car_type.svg" alt="car_type"/>
                                    <p>{item.car_type}</p>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
                <h4 className={eUkraineFont.Regular.className}>{car_price} €</h4>
                <hr/>
            </div>
        </div>
    );
}
