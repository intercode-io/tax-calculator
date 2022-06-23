import React from 'react';
import {Col, Row, Typography} from "antd";

const {Title} = Typography;

const CustomHeader = () => {
    return (
        <Row>
            <Col span={22} style={{padding: "3% 0 0 10%", display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                <Title level={2}>Калькулятор розмитенення</Title>
                <p>Обрахуйте вартість розмитнення авто</p>
            </Col>
        </Row>
    );
};

export default CustomHeader;