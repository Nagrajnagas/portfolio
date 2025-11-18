import { React, useState } from "react";

import { Image, Card, Space, Form, Input, Button, Checkbox, Upload, Col, Row, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import weatherImg from '../assets/weather.png';
import rickImg from '../assets/rick & morty.png';
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Paragraph from "antd/es/skeleton/Paragraph";
// import './projects.css'






const Projects = () => {
    const navigate = useNavigate();

    const onFinish = values => {
        // alert("Form Submitted Successfully");
        console.log('success:', values);
        navigate('/');
    };

    const onFinishFailed = errorInfo => {
        alert("Please fill all required fields before submitting!");
    };

    const normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (

        <div>

            <h3>My Projects are</h3>
            <div className="pro">
                
                <div className="pro1">
                    <Col span={6}>
                        <Card title="Weather Table" variant="borderless">
                            <img src={weatherImg} alt="download" />
                            Weather refers to the atmospheric conditions.
                        </Card>
                        <Button className="btn" type="primary" onClick={() => navigate('/table')}>Weather Project</Button>
                    </Col>
                </div>
                <div className="pro2">
                    <Col span={6}>
                        <Card title="Rick and Morty." variant="borderless">
                            <img src={rickImg} alt="download" />

                            The Rick and Morty API provides information
                            about characters, episodes, and locations
                            from the animated TV show Rick and Morty.

                        </Card>
                        <Button className="btn" type="primary" onClick={() => navigate('/poki')}>POKI</Button>
                    </Col>
                </div>

            </div>

            <div>

                <h3>For reaching Me</h3>
                <fieldset>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item label="Username"
                            name="username"
                            rules={[{ required: true, message: 'enter crt username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password"
                            name="Password"
                            rules={[{ required: true, message: 'enter crt password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="upload ur resume" valuePropName="fileList" getValueFromEvent={normFile} >
                            <Upload action="https://httpbin.org/post" listType="picture-card">
                                <button type="button" style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}>
                                    <PlusOutlined />
                                    <div >Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>

                        <Form.Item name="remember"
                            valuePropName="checked"
                            label={null}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            label={null}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>




                    </Form>
                </fieldset>
            </div>

        </div>





    )
}

export default Projects;