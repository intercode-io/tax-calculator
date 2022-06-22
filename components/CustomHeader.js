import React from 'react';
import {Col, Row, Typography} from "antd";

const {Title} = Typography;

const CustomHeader = () => {
    return (
        <Row>
            <Col span={24}  style={{padding: "2%", display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                <Title level={2}>Калькулятор розмитенення</Title>
                <p>Обрахуйте вартість розмитнення авто</p>
            </Col>
        </Row>
    );
};

export default CustomHeader;