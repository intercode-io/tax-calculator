import Head from 'next/head'
import {useEffect, useState} from "react";
import {Card, Col, InputNumber, Row} from "antd";
import {useInput} from "../hooks/useInput";
import yearCoefficient from "../common/year-coefficient"
import style from "../styles/Main.module.css"
import {CalendarOutlined, CarOutlined, DollarCircleTwoTone, IdcardTwoTone, ToolTwoTone} from "@ant-design/icons";


export default function Home() {
    const yearOfManufacture = useInput(0);
    const volumeCar = useInput(0);
    const [fuelRatio, setFuelRatio] = useState(1);
    const [isExclusiveCar, setIsExclusiveCar] = useState(1);
    const currentYear = new Date().getFullYear();
    const [finalPrice, setFinalPrice] = useState(0);
    const [rate, setRate] = useState(0.7);
    const [coefficient, setCoefficient] = useState();
    const [ageOfCar, setAgeOfCar] = useState();

    useEffect(() => {
        const coefficient = Number(volumeCar.value) * Number(fuelRatio) * Number(isExclusiveCar);
        setCoefficient(coefficient);
        setAgeOfCar(currentYear - yearOfManufacture.value);
        if (ageOfCar < 12) setRate(yearCoefficient[ageOfCar]);
    }, [yearOfManufacture, volumeCar.value, fuelRatio, isExclusiveCar, rate])


    const calculatePrice = () => {
        const rateVal = rate * coefficient;
        const excise = Number(rateVal) / 2;
        const PDV = Number(rateVal) * 3.5 * 0.2;
        setFinalPrice(excise + PDV);
    }


    return (
        <div>
            <Head>
                <title>Калькулятор розмитнення</title>
            </Head>
            <div className={style.firstMainBlock}>
                <div style={{margin: "2%"}}>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={20}>
                            <span className={style.inputText}>Рік випуску{": "}</span>
                            <InputNumber className={style.inputStyle} min={1900}
                                         max={currentYear} {...yearOfManufacture}
                                         prefix={<CalendarOutlined/>}
                            />
                            <input type="range"
                                   className={style.rangeInput}
                                   min={1900}
                                   max={currentYear}
                                   value={yearOfManufacture.value}
                                   onChange={event => yearOfManufacture.onChange(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={20}>
                            <span className={style.inputText}>Обєм двигуна{": "}</span>
                            <InputNumber className={style.inputStyle}
                                         {...volumeCar}
                                         prefix={<CarOutlined/>}
                            />
                            <input type="range"
                                   className={style.rangeInput}
                                   max={15000}
                                   value={volumeCar.value}
                                   onChange={event => volumeCar.onChange(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <div style={{display: "flex"}}>
                        <Row justify="center" style={{marginBottom: 20}}>
                            <Col span={16}>
                                <span className={style.selectText}><IdcardTwoTone/> Тип палива{": "}</span>
                                <select className={style.selectStyle} onChange={event => {
                                    setFuelRatio(event.target.value);
                                }}>
                                    <option value={1}>Бензин</option>
                                    <option value={1.2}>Дизель</option>
                                    <option value={0.5}>Гібрид</option>
                                </select>
                            </Col>
                        </Row>
                        <Row justify="center" style={{marginBottom: 20}}>
                            <Col span={8}>
                                <span className={style.selectText}> <ToolTwoTone/> Ексклюзивність{": "}</span>
                                <select className={style.selectStyle}
                                        onChange={event => setIsExclusiveCar(event.target.value)}
                                >
                                    <option value={1.0}>No</option>
                                    <option value={2.0}>Yes</option>
                                </select>
                            </Col>
                        </Row>
                    </div>
                    <Row justify="center" style={{marginTop: 50}}>
                        <button className={style.button} onClick={calculatePrice}><span>Порахувати</span></button>
                    </Row>
                </div>
                <div>
                    <Row justify="center" style={{marginBottom: 8}}>
                        <Card className={style.cardStyle}>
                            <div>
                                <h1 style={{color: "cornflowerblue"}}><DollarCircleTwoTone spin={true}/> Фінальна ціна:
                                </h1>
                                <span style={{fontSize: "30px"}}> {finalPrice.toFixed(3)} €</span>
                            </div>
                            <div>
                                <span>Rate: {rate}</span>
                            </div>
                        </Card>
                    </Row>
                </div>
            </div>
        </div>
    )
}
