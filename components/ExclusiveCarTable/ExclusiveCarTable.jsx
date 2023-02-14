import style from './Table.module.scss';
import {eUkraineFont} from "../../common/fonts/fonts";
import exclusiveCar from '../../lib/ExclusiveCar.json';
import Image from "next/image";


export default function ExclusiveCarTable(props) {
    return (
        <div className={style.table_container}>
            <div className={style.table_inner}>
                <div className={style.table_inner__heading}>
                    <div>
                        <h3 className={eUkraineFont.Medium.className}>Перелік ексклюзивних авто</h3>
                        <p className={eUkraineFont.Light.className}>
                            Перелік легкових автомобілів, які підлягають оподаткуванню транспортним податком у 2022
                            році.Перелік не повний, він формується для сплати податку на розкіш через запит МЕРТ до
                            офіційних дилерів преміальних авто на основі вартості — 275 мін ЗП.
                        </p>
                    </div>
                    <div onClick={props.closeTable}>
                        <Image width={50} height={50} src="/close_table.svg" alt="close table"/>
                    </div>
                </div>

                <div className={style.table}>
                    <table >
                        <tr className={eUkraineFont.Light.className}>
                            <th>Марка</th>
                            <th>Модель</th>
                            <th>Рік випуску</th>
                            <th>Об&lsquo;єм двигуна</th>
                            <th>Тип палива</th>
                        </tr>
                        {exclusiveCar.map((item, index) => (
                            <tr className={eUkraineFont.Light.className} key={index}>
                                <td>{item.Label}</td>
                                <td>{item.Model}</td>
                                <td>{item.Year}</td>
                                <td>{item.Volume}</td>
                                <td>{item.Fuel}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

