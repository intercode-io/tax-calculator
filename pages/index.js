import Head from 'next/head'
import {useEffect, useState} from "react";
import {Button, Card, Col, Row, Select, Switch} from "antd";
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
    const [yearArray, setYearArray] = useState([]);
    const [volumeArray, setVolumeArray] = useState([]);
    const [excise, setExcise] = useState(0);
    const [PDV, setPDV] = useState(0);


    useEffect(() => {
        let yearCarArray = [];
        let volumeCarArray = [];
        for (let year = 1950; year <= currentYear; year++) {
            yearCarArray.push(year);
        }
        for (let volume = 0.1; volume <= 12; volume += 0.1) {
            volumeCarArray.push(Number(volume.toFixed(1)));
        }
        setYearArray(yearCarArray);
        setVolumeArray(volumeCarArray);
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
            <div className={style.firstMainBlock}>
                <div style={{margin: "2%"}}>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={23}>
                            <CalendarOutlined/>
                            <span className={style.inputText}>Рік випуску{": "}</span>
                            <Select
                                showSearch
                                style={{width: "100%"}}
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
                    </Row>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={23}>
                            <CarOutlined/>
                            <span className={style.inputText}>Обєм двигуна{": "}</span>
                            <Select
                                showSearch
                                style={{width: "100%"}}
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
                    </Row>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={24}>
                            <span className={style.selectText}>
                                <IdcardTwoTone style={{padding: "5px"}}/>
                                Тип палива{": "}
                            </span>
                            <Select
                                showSearch
                                style={{width: "100%"}}
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
                            </Select>
                        </Col>
                    </Row>
                    <Row justify="center" style={{marginBottom: 20}}>
                        <Col span={24} style={{display: "flex"}}>
                            <span className={style.selectText} style={{paddingRight: "10px"}}>
                                <ToolTwoTone style={{padding: "5px"}}/>
                                Ексклюзивність{": "}
                            </span>
                            <Switch defaultChecked onChange={event => setIsExclusiveCar(event)}/>
                        </Col>
                    </Row>
                    <Row justify="center" style={{marginTop: 50}}>
                        <Button type="primary" style={{borderRadius: "2px"}} onClick={calculatePrice}>
                            <span>Порахувати</span>
                        </Button>
                    </Row>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Row justify="center" style={{marginBottom: 8}}>
                        <Card className={style.cardStyle}>
                            <div>
                                <h1 style={{color: "cornflowerblue"}}>
                                    <DollarCircleTwoTone spin={true}/> Фінальна ціна:
                                </h1>
                                <div style={{fontSize: "13px", color: "gray"}}>Фінальна ціна складається з ПДВ та
                                    Акцизи
                                </div>
                                <span style={{fontSize: "30px"}}> {finalPrice.toFixed(3)} €</span>
                            </div>
                            <div>
                                <span style={{paddingRight: "2%", fontSize: "18px", color: "gray"}}>
                                    Акциза: <b style={{color: "black"}}>{excise}</b>
                                </span>
                                <span style={{paddingRight: "2%", color: "gray", fontSize: "18px"}}>
                                    ПДВ: <b style={{color: "black"}}>{PDV}</b>
                                </span>
                            </div>
                        </Card>
                    </Row>
                </div>
            </div>
        </div>
    )
}
