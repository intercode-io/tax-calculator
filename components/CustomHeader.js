import React from 'react';
import {Col, Row, Typography} from "antd";

const {Title} = Typography;

const CustomHeader = () => {
    return (
        <Row>
            <Col span={22} style={{padding: "3% 0 0 10%", display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                <Title level={2}>Калькулятор розмитенення</Title>
                <p style={{
                    fontSize: "12px",
                    color: "gray",
                    paddingLeft: "2%"
                }}>
                    Розрахунок вартості розмитнення автомобілів згідно закону №7418, з 1.07.2022. Формула розмитнення у
                    відповідності до правил додатка ДІЯ
                </p>
            </Col>
        </Row>
    );
};

export default CustomHeader;