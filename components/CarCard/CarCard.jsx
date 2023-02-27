import style from './CarCard.module.scss';
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";


export default function CarCard({car_photo, car_name, car_price, car_characteristics, myKey}) {
    return (
        <div className={style.card_container} key={myKey}>
            <img src={car_photo} alt={car_photo}/>
            <div className={style.card_container__info_block}>
                <h5 className={eUkraineFont.Regular.className}>{car_name}</h5>
                <div className={style.characteristics + ' ' + codecColdFont.Regular.className}>
                    <div className={style.characteristics__block}>
                        <div className={style.characteristics_item}>
                            <div className={style.characteristics_item__image}>
                                <img src="/Cars/Characteristics_icon/year.svg" alt="year"/>
                                <p>{car_characteristics?.Year}</p>
                            </div>
                            <div className={style.characteristics_item__text}>
                                <img src="/Cars/Characteristics_icon/mileage.svg" alt="mileage"/>
                                <p>{car_characteristics?.Mileage}</p>
                            </div>
                        </div>
                        <div className={style.characteristics_item}>
                            <div className={style.characteristics_item__image}>
                                <img src="/Cars/Characteristics_icon/fuel_type.svg" alt="fuel_type"/>
                                <p>{car_characteristics?.FuelType}</p>
                            </div>
                            <div className={style.characteristics_item__text}>
                                <img src="/Cars/Characteristics_icon/engine.svg" alt="engine"/>
                                <p>{car_characteristics?.EngineVolume}</p>
                            </div>
                        </div>
                        <div className={style.characteristics_item}>
                            <div className={style.characteristics_item__image}>
                                <img src="/Cars/Characteristics_icon/KP.svg" alt="KP"/>
                                <p>{car_characteristics?.Transmissions}</p>
                            </div>
                            <div className={style.characteristics_item__text}>
                                <img src="/Cars/Characteristics_icon/turbine.svg" alt="turbine"/>
                                <p>{car_characteristics?.kBt}</p>
                            </div>
                        </div>
                        <div className={style.characteristics_item}>
                            <div className={style.characteristics_item__image}>
                                <img src="/Cars/Characteristics_icon/suspension.svg" alt="suspension"/>
                                <p>{car_characteristics?.Suspension}</p>
                            </div>
                            <div className={style.characteristics_item__text}>
                                <img src="/Cars/Characteristics_icon/car_type.svg" alt="car_type"/>
                                <p>{car_characteristics?.CarType}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className={eUkraineFont.Regular.className}>{car_price} €</h4>
                <hr/>
            </div>
        </div>
    );
}
