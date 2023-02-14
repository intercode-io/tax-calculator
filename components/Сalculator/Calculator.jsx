'use client'
import style from './Calculator.module.scss';
import {eUkraineFont, codecColdFont} from "../../common/fonts/fonts";
import {useInput} from "../../hooks/useInput";
import {useEffect, useState} from "react";
import {SelectInput, SelectInputTypes, ToggleSwitch} from "../Inputs/SelectInput";
import {PrimaryButton} from "../Buttons/Buttons";
import yearCoefficient from "../../common/year-coefficient";
import {calculatePrice} from "../../lib/calculatePrice";
import Loader from "../Loader/Loader";
import ExclusiveCarTable from "../ExclusiveCarTable/ExclusiveCarTable";

export default function Calculator() {
    const [result, setResult] = useState(0);
    const yearOfManufacture = useInput(0);
    const volumeCar = useInput(0);
    const engineType = useInput(0);
    const isExclusiveCar = useInput(false);
    const [rate, setRate] = useState(0.7);
    const [yearArray, setYearArray] = useState([]);
    const [volumeArray, setVolumeArray] = useState([]);
    const [ageOfCar, setAgeOfCar] = useState(0);
    const [coefficient, setCoefficient] = useState(0);
    const currentYear = new Date().getFullYear();
    const loading = useInput(false);
    const [resultInUAH, setResultInUAH] = useState(0);
    const [PDV, setPDV] = useState(0);
    const [PDVinUAH, setPDVinUAH] = useState(0);
    const [excise, setExcise] = useState(0);
    const [exciseInUAH, setExciseInUAH] = useState(0);
    const [isShowTable, setShowTable] = useState(false);


    useEffect(() => {
        setYearArray(generateYearArray(currentYear));
        setVolumeArray(generateVolumeArray());
    }, []);

    useEffect(() => {
        setAgeOfCar(calculateAgeOfCar(yearOfManufacture.value, currentYear));
        setRate(calculateRate(ageOfCar));
        setCoefficient(calculateCoefficient(volumeCar.value, engineType.value, isExclusiveCar.value));
    }, [yearOfManufacture, volumeCar.value, engineType.value, isExclusiveCar.value, ageOfCar]);

    const data = {
        yearOfManufacture: yearOfManufacture.value,
        volumeCar: volumeCar.value,
        engineType: engineType.value,
        ageOfCar, rate, coefficient,
        isExclusiveCar: isExclusiveCar.value,
        loading,
    };

    const handleCalculate = async () => {
        let UAH;
        loading.onChange(true);
        await getCurrencyData().then((res) => {
            UAH = res.conversion_rates.UAH;
            console.log(UAH)
        });

        await setTimeout(() => {
            setResult(calculatePrice(data).finalPrice);
            setPDV(calculatePrice(data).PDV);
            setExcise(calculatePrice(data).excise);
            setResultInUAH(calculatePrice(data).finalPrice * UAH);
            setExciseInUAH(calculatePrice(data).excise * UAH);
            setPDVinUAH(calculatePrice(data).PDV * UAH);
        }, 2000);
    }

    function generateYearArray(currentYear) {
        let yearCarArray = [];
        for (let year = currentYear; year >= 1950; year--) {
            yearCarArray.push(year);
        }
        return yearCarArray;
    }

    function generateVolumeArray() {
        let volumeCarArray = [];
        for (let volume = 0.1; volume <= 12; volume += 0.1) {
            volumeCarArray.push(Number(volume.toFixed(1)));
        }
        return volumeCarArray;
    }

    function calculateAgeOfCar(manufactureYear, currentYear) {
        return currentYear - manufactureYear;
    }

    function calculateRate(ageOfCar) {
        return ageOfCar < 12 ? yearCoefficient[ageOfCar] : 0.7;
    }

    function calculateCoefficient(volume, engine, isExclusive) {
        const exclusive = isExclusive ? 2 : 1;
        return Number(volume * 1000) * Number(engine) * Number(exclusive);
    }

    const getCurrencyData = async () => {
        const response = await fetch('https://v6.exchangerate-api.com/v6/09a1d28f3f6ebdec547b427d/latest/EUR');
        return await response.json();
    }

    const showTable = () => {
        setShowTable(!isShowTable);
    }

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (isShowTable) {
            document.body.style.overflow = 'hidden';
            navbar.style.display = 'none';
        } else {
            document.body.style.overflow = '';
            navbar.style.display = '';

        }
    }, [isShowTable])


    return (
        <div>
            {isShowTable ? <ExclusiveCarTable closeTable={showTable}/> : null}
            <div className={style.mobile_description}>
                <h4 className={eUkraineFont.Regular.className}>Калькулятор розмитнення авто</h4>
                <p className={eUkraineFont.UltraLight.className}>
                    Розрахунок вартості розмитнення автомобілів згідно закону №7418, з 1.07.2022. Формула
                    розмитнення у
                    відповідності до правил додатку ДІЯ.
                </p>
            </div>
            <div className={style.calculator_container}>
                <div className={style.calculator_container__description}>
                    <h4 className={eUkraineFont.Regular.className}>Калькулятор розмитнення авто</h4>
                    <p className={eUkraineFont.UltraLight.className}>
                        Розрахунок вартості розмитнення автомобілів згідно закону №7418, з 1.07.2022. Формула
                        розмитнення у
                        відповідності до правил додатку ДІЯ.
                    </p>
                </div>
                <div className={style.calculator_container__calculator_block}>
                    <div className={style.calculator + " " + eUkraineFont.Light.className}>
                        <div>
                            <p>Рік випуску</p>
                            <SelectInput dataArray={yearArray} onChange={yearOfManufacture}/>
                        </div>
                        <div>
                            <p>Об’єм двигуна</p>
                            <SelectInput dataArray={volumeArray} onChange={volumeCar}/>
                        </div>
                        <div>
                            <p>Тип двигуна</p>
                            <SelectInputTypes onChange={engineType}/>
                        </div>
                        <div className={style.exclusive_auto}>
                            <div
                                style={{textDecoration: 'underline'}}
                                onClick={() => showTable()}
                            >
                                Ексклюзивне авто
                            </div>
                            <ToggleSwitch value={isExclusiveCar}/>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <PrimaryButton handleClick={handleCalculate}>Розрахувати</PrimaryButton>
                        </div>
                    </div>
                    {loading.value
                        ? <div className={style.loader}>
                            <Loader/>
                        </div>
                        : <div className={style.result}>
                            <h5 className={eUkraineFont.Regular.className}>Загальна вартість:</h5>
                            <p className={eUkraineFont.UltraLight.className}>Включає ПДВ (податку на додану вартість) та
                                Акцизний податок</p>

                            <h4 className={eUkraineFont.Regular.className}>
                                {result.toFixed(2)} €
                                {resultInUAH === 0 ? null :
                                    <span className={eUkraineFont.Light.className}> ≈ {resultInUAH.toFixed(0)} ₴
                            </span>}
                                <hr/>
                                {result !== 0 ?
                                    <div className={style.additional_info}>
                                        <div>
                                            <p className={eUkraineFont.Thin.className}>Акциз:</p>
                                            <p>{excise.toFixed(2)} ≈ {exciseInUAH.toFixed(0)} ₴</p>
                                        </div>
                                        <div>
                                            <p className={eUkraineFont.Thin.className}>ПДВ:</p>
                                            <p>{PDV.toFixed(2)} ≈ {PDVinUAH.toFixed(0)} ₴</p>
                                        </div>
                                    </div>
                                    : null
                                }
                            </h4>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}
