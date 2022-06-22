import React from 'react';
import {Col, Divider, Row, Typography} from "antd";

const {Title} = Typography;

const Header = () => {
    return (
        <Row>
            <Col flex span={24}>
                <Divider>
                    <Title level={4}>Калькулятор розмитенення</Title>
                </Divider>
            </Col>
        </Row>
    );
};

export default Header;