import React from 'react';
import {Col, Row, Typography} from "antd";

const {Title} = Typography;

const CustomHeader = () => {
    return (
        <Row>
            <Col style={{padding: "3% 0 0 10%", display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                <Title level={3}>Калькулятор розмитенення</Title>
                <p style={{
                    margin: "2% 2%",
                    fontSize: "11px",
                    color: "gray",
                }}>
                    Розрахунок вартості розмитнення автомобілів згідно закону №7418, з 1.07.2022. Формула розмитнення у
                    відповідності до правил додатка ДІЯ
                </p>
            </Col>
        </Row>
    );
};

export default CustomHeader;