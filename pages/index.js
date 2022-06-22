import Head from 'next/head'
import {useState} from "react";
import {Col, InputNumber, Row} from "antd";
import {useInput} from "../hooks/useInput";
import yearCoefficient from "../common/year-coefficient"


export default function Home() {
    const yearOfManufacture = useInput(0);
    const volumeCar = useInput(0);
    const [fuelRatio, setFuelRatio] = useState(1);
    const [isExclusiveCar, setIsExclusiveCar] = useState(1);
    const currentYear = new Date().getFullYear();
    const [finalPrice, setFinalPrice] = useState(0);


    const calculatePrice = () => {
        const coefficient = Number(volumeCar.value) * Number(fuelRatio) * Number(isExclusiveCar);
        const ageOfCar = currentYear - yearOfManufacture.value;
        let rate = 0.7;
        if (ageOfCar < 11) rate = yearCoefficient[ageOfCar];
        const rateVal = rate * coefficient;
        const akz = Number(rateVal) / 2;
        const PDV = Number(rateVal) * 3.5 * 0.2;
        setFinalPrice(akz + PDV);
    }


    return (
        <>
            <Head>
                <title>Калькулятор розмитнення</title>
            </Head>
            <main style={{alignItems: "center"}}>
                <Row justify="center" style={{marginBottom: 8}}>
                    <Col span={8}>
                        <span>Рік випуску{": "}</span>
                        <InputNumber max={currentYear} style={{width: '100%'}} {...yearOfManufacture}/>
                    </Col>
                </Row>
                <Row justify="center" style={{marginBottom: 8}}>
                    <Col span={8}>
                        <span>Обєм двигуна{": "}</span>
                        <InputNumber style={{width: '100%'}} {...volumeCar}/>
                    </Col>
                </Row>
                <Row justify="center" style={{marginBottom: 8}}>
                    <Col span={8}>
                        <span>Тип палива{": "}</span>
                        <select onChange={event => {
                            setFuelRatio(event.target.value);
                        }}>
                            <option value={1}>Бензин</option>
                            <option value={1.2}>Дизель</option>
                            <option value={0.5}>Гібрид</option>
                        </select>
                    </Col>
                </Row>
                <Row justify="center" style={{marginBottom: 8}}>
                    <Col span={8}>
                        <span>Ексклюзивність{": "}</span>
                        <select
                            onChange={event => setIsExclusiveCar(event.target.value)}
                        >
                            <option value={1.0}>No</option>
                            <option value={2.0}>Yes</option>
                        </select>
                    </Col>
                </Row>
                <Row justify="center" style={{marginBottom: 8}}>
                    <button onClick={calculatePrice}>Порахувати</button>
                </Row>
                <Row justify="center" style={{marginBottom: 8}}>
                    <span>Ціна мита : {finalPrice.toFixed(3)} €</span>
                </Row>
            </main>
        </>
    )
}
