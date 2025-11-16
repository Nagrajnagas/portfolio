import React from 'react';
import { Image, Button,Space,Flex,Row, Divider,Col,Card, Slider } from 'antd';
import { useState } from 'react';
import './port.css'
import { useNavigate } from 'react-router-dom';
import { ConsoleSqlOutlined, FacebookOutlined, Html5Filled, InstagramOutlined, JavaScriptOutlined, LinkedinOutlined, PoweroffOutlined, PythonOutlined, SyncOutlined, WhatsAppOutlined, createFromIconfontCN  } from '@ant-design/icons';
import Projects from './projects';
import imageImg from '../assets/image.png';

const IconFont = createFromIconfontCN({
scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const style = {background:'#0092ff', padding: '8px 0' };

const My = () => {

    // Function
    const navigate = useNavigate();
    const [gapSize, setGapSize] = React.useState('small');
    const [customGapSize, setCustomGapSize] = React.useState(0);
    return (

        
        <div>

            {/* nav---------------------------------------------------------- */}
        <div className='btn'>
            
            
            <div ><Button id='link-btn' type='primary' href='tel:7483969076' target='_blank' >Phone</Button></div>
            <div ><Button id='link-btn' type='primary' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' target='_blank' >Gmail</Button></div>
            <div ><Button id='link-btn' type='primary' href='https://www.linkedin.com/in/nagaraj-s-a9a5b625b/' target='_blank' >LinkedIn</Button></div>
            <div ><Button id='link-btn' type='primary' href='https://github.com/' target='_blank' >GitHub</Button></div>
            <div ><Button id='link-btn' type='primary' onClick={()=> navigate('/projects')}>Projects</Button></div>
            <div><Button id='link-btn' type='primary' onClick={()=> navigate('/')}>Home</Button></div>
        </div>

            {/* image -------------------------------------------------*/}


            <div id="img-container">
                
                <Image
                width={200}
                src={imageImg}/>
            </div>

            {/* name --------------------------------------------------*/}
            <div className="name">
                <p>Welcome to my world</p>
                <h1>NAGARAJ S</h1>
            </div>
            
            {/* about ------------------------------------------------ */}
        <div className="SUMMARY">
            <h3 id='sum'>About Me</h3>
            <p>Enthusiastic Computer Science Engineering Graduate (B.E., 2021-2025) with hands-on experience in AI/ML, Cybersecurity, and Web Development through academic projects and internships. Skilled in Python, HTML, CSS, JavaScript, and familiar with libraries such as NumPy, pandas, and scikit-learn. Demonstrated ability to develop data-driven applications and full- stack solutions, including a voice-enabled crop disease detection system. Strong problem-solving, analytical, and teamwork skills with a commitment to continuous learning and delivering quality results.</p>
        </div>
{/* connect ------------------------------------------------------- */}
        <div className="SUMMARY">
            <h3 id='sum'>Find with me</h3>
            <div className="icons">
                <WhatsAppOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
            </div>
            
        </div>

        
{/* skills-------------------------------------------------------------------- */}
        <div className="SUMMARY"> 
            <h3 id='sum'>best skill on</h3>
            
            <div className="best">
            <p id='icons-skills'>Backend Technologies: <PythonOutlined /></p>
            <p id='icons-skills'>Frontend Technologies: <Html5Filled />, CSS (Basics), <JavaScriptOutlined /></p>
            <p id='icons-skills'>Database:<ConsoleSqlOutlined /></p>
            </div>
            
        </div>

        <div className="SUMMARY">
            <h3 id="sum">What I Do</h3>


            {/* <Divider orientation='left'>What I Do</Divider> */}
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                <div style={style}>App Development</div>
                </Col>

                <Col className="gutter-row" span={6}>
                <div style={style}>App Development</div>
                </Col>

                <Col className="gutter-row" span={6}>
                <div style={style}>App Development</div>
                </Col>

                <Col className="gutter-row" span={6}>
                <div style={style}>App Development</div>
                </Col>

            </Row>
    
        </div>

        </div>
    )
}

export default My;