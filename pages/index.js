import Head from 'next/head'
import {useEffect, useState} from "react";
import {Button, Col, Row, Select, Switch} from "antd";
import {useInput} from "../hooks/useInput";
import yearCoefficient from "../common/year-coefficient";
import style from "../styles/Main.module.css";
import iconStyle from "../styles/Icon.module.css";
import {
    CalendarTwoTone, DashboardTwoTone,
    DollarCircleTwoTone,
    SlidersTwoTone,
    ToolTwoTone,
} from "@ant-design/icons";


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
    const [yearArray, setYearArray] = useState([]);
    const [volumeArray, setVolumeArray] = useState([]);
    const [excise, setExcise] = useState(0);
    const [PDV, setPDV] = useState(0);


    useEffect(() => {
        let yearCarArray = [];
        let volumeCarArray = [];
        for (let year = currentYear; year >= 1950; year--) {
            yearCarArray.push(year);
        }
        for (let volume = 0.1; volume <= 12; volume += 0.1) {
            volumeCarArray.push(Number(volume.toFixed(1)));
        }
        setYearArray(yearCarArray);
        setVolumeArray(volumeCarArray);
        setIsExclusiveCar(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        let exclusive = isExclusiveCar ? 2 : 1;
        const coefficient = Number(volumeCar.value * 1000) * Number(fuelRatio) * Number(exclusive);
        setCoefficient(coefficient);
        setAgeOfCar(currentYear - yearOfManufacture.value);
        if (ageOfCar < 12) setRate(yearCoefficient[ageOfCar]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yearOfManufacture, volumeCar.value, fuelRatio, isExclusiveCar, rate])


    const calculatePrice = () => {
        const rateVal = rate * coefficient;
        const excise = Number(rateVal) / 2;
        setExcise(excise);
        const PDV = Number(rateVal) * 3.5 * 0.2;
        setFinalPrice(excise + PDV);
        setPDV(PDV);
    }

    return (
        <div>
            <Head>
                <title>Калькулятор розмитнення</title>
            </Head>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={style.cardStyle}>
                    <div className={style.mainContentBlockCard}>
                        <div className={style.cardGridStyle}>
                            <Row justify="center" style={{marginBottom: 8}}>
                                <Col span={19} style={{display: "flex", flexDirection: "column"}}>
                                    <span className={style.inputText}>
                                        <CalendarTwoTone className={iconStyle.iconStyle}/>
                                        Рік випуску{": "}
                                    </span>
                                    <Select
                                        showSearch
                                        className={style.inputStyle}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option.children).includes(input)
                                        }
                                        onChange={(event) => yearOfManufacture.onChange(event)}
                                    >
                                        {yearArray.map((year) => (
                                            <Select.Option key={year} value={year}>{String(year)}</Select.Option>
                                        ))}
                                    </Select>
                                </Col>
                                <Col span={19} style={{display: "flex", flexDirection: "column"}}>
                            <span className={style.inputText}>
                                <DashboardTwoTone className={iconStyle.iconStyle}/>
                                Обєм двигуна{": "}
                            </span>
                                    <Select
                                        showSearch
                                        className={style.inputStyle}

                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option.children).includes(input)
                                        }
                                        onChange={(event) => volumeCar.onChange(event)}
                                    >
                                        {volumeArray.map((volume) => (
                                            <Select.Option key={volume} value={volume}>{String(volume)}</Select.Option>
                                        ))}
                                    </Select>
                                </Col>
                                <Col span={19} style={{display: "flex", flexDirection: "column"}}>
                            <span className={style.inputText}>
                                <SlidersTwoTone className={iconStyle.iconStyle}/>
                                Тип палива{": "}
                            </span>
                                    <Select
                                        showSearch
                                        className={style.inputStyle}

                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option.children).includes(input)
                                        }
                                        onChange={(event) => setFuelRatio(event)}
                                    >
                                        <Select.Option value={1}>Бензин</Select.Option>
                                        <Select.Option value={1.2}>Дизель</Select.Option>
                                        <Select.Option value={0.5}>Гібрид</Select.Option>
                                        <Select.Option value={0}>Електро</Select.Option>
                                    </Select>
                                </Col>
                                <Col span={19}>
                                <span className={style.inputText}>
                                <ToolTwoTone className={iconStyle.iconStyle}/>
                                Ексклюзивність{": "}
                                    <Switch defaultChecked={false} onChange={event => setIsExclusiveCar(event)}/>
                                </span>
                                </Col>
                            </Row>
                            <Row justify="center" style={{marginBottom: 8, maxWidth:"100%"}}>
                                <Col span={12}>
                                    <Button type="primary" style={{borderRadius: "2px"}} onClick={calculatePrice}>
                                        <span>Порахувати</span>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className={style.cardGridStyle}>
                            <Row>
                                <Col>
                                    <h1 style={{color: "cornflowerblue"}}>
                                        <DollarCircleTwoTone spin={true}/> Фінальна ціна:
                                    </h1>
                                    <div style={{fontSize: "11px", color: "gray"}}>
                                        Включає ПДВ (податку на додану вартість) та Акцизний податок
                                    </div>
                                    <span style={{fontSize: "30px"}}> {finalPrice.toFixed(1)} €</span>
                                </Col>
                                <Col span={24}>
                                <span style={{paddingRight: "2%", fontSize: "16px", color: "gray"}}>
                                    Акциз: <b style={{color: "black"}}>{excise.toFixed(1)} €</b>
                                </span>
                                    <span style={{paddingRight: "2%", color: "gray", fontSize: "16px"}}>
                                    ПДВ: <b style={{color: "black"}}>{PDV.toFixed(1)} €</b>
                                </span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
