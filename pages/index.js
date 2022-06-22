import Head from 'next/head'
import {useState} from "react";
import style from '../styles/styles.module.css';


const options = {
    0: 2.2,
    1: 1.9,
    2: 1.65,
    3: 1.55,
    4: 1.45,
    5: 1.35,
    6: 1,
    7: 0.9,
    8: 0.85,
    9: 0.8,
    10: 0.75,
    11: 0.7,
}

export default function Home() {

    const [yearOfManufacture, setYearOfManufacture] = useState();
    const [volumeCar, setVolumeCar] = useState();
    const [fuelRatio, setFuelRatio] = useState(1);
    const [isExclusiveCar, setIsExclusiveCar] = useState(1);
    const currentYear = new Date().getFullYear();
    const [finalPrice, setFinalPrice] = useState(0);


    const calculatePrice = () => {

        const coefficient = Number(volumeCar) * Number(fuelRatio) * Number(isExclusiveCar);
        const ageOfCar = currentYear - yearOfManufacture;

        let rate = 0.7;
        if (ageOfCar < 11) rate = options[ageOfCar];

        const rateVal = rate * coefficient;
        const akz = Number(rateVal) / 2;
        const PDV = Number(rateVal) * 3.5 * 0.2;

        setFinalPrice(akz + PDV)

    }

    const clearForm = () => {
        setYearOfManufacture('');
        setVolumeCar('');
        setFinalPrice('');
    }

    return (
        <>
            <Head>
                <title>Калькулятор розмитнення</title>
            </Head>
            <main>
                <section>
                    <h1>Калькулятор розмитнення</h1>
                </section>

                <section>
                    <div className={style.inputs}>
                        <span>Рік випуску{": "}</span>
                        <input type="number" max={currentYear} min={1800} value={yearOfManufacture}
                               onChange={(event) => setYearOfManufacture(event.target.value)}/>
                    </div>
                    <div className={style.inputs}>
                        <span>Обєм двигуна{": "}</span>
                        <input type="number" value={volumeCar} onChange={event => setVolumeCar(event.target.value)}/>
                    </div>
                    <div className={style.inputs}>
                        <span>Тип палива{": "}</span>
                        <select onChange={event => {
                            setFuelRatio(event.target.value);
                        }}>
                            <option value={1}>Бензин</option>
                            <option value={1.2}>Дизель</option>
                            <option value={0.5}>Гібрид</option>
                        </select>
                    </div>
                    <div className={style.inputs}>
                        <span>Ексклюзивність{": "}</span>
                        <select
                            onChange={event => setIsExclusiveCar(event.target.value)}
                        >
                            <option value={1.0}>No</option>
                            <option value={2.0}>Yes</option>
                        </select>
                    </div>
                </section>
                <div>
                    <button className={style.button} onClick={calculatePrice}>Порахувати</button>
                    <button className={style.button} onClick={clearForm}>Очистити</button>
                </div>
                <div className={style.inputs}>
                    <span>Ціна мита : {finalPrice.toFixed(3)} €</span>
                </div>
            </main>
        </>
    )
}
