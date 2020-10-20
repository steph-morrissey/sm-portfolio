import React from 'react';
import './App.less';
import { Layout, Typography, Row, Col, Image } from 'antd';

import Navbar from './components/Navbar';

const { Title } = Typography;

const App = () => {
  return (
    <div>
      <Layout>
        <Row style={{ backgroundColor: '#FFF', padding: '10px 0px 0px 10px' }}>
          <Title>Stephanie Morrissey</Title>
          <Navbar />
        </Row>

        <Row style={{ padding: '20px' }} align='middle' justify='center'>
          <Col sm={16} sm-offset={8} md={12} lg={9}>
            <Image
              src='/Images/steph-morrissey.jpeg'
              placeholder={
                <Image src='/Images/steph-morrissey.jpeg' width={200} />
              }
            />
          </Col>
          <Col sm={24} md={12} lg={12}>
            <div style={{ backgroundColor: '#FFF', padding: '5px' }}>
              <h1>Hello,</h1>
              <p>
                I'm Steph, an aspiring Software Developer. I have a graduate
                degree in BSc Information Technology and Management for Business
                from the University of Sheffield and have recently completed a
                Coding Bootcamp course with the University of Manchester. Both
                of which, have allowed me to create full stack dynamic web
                applications.
              </p>
              <p>
                Strengths include: ability to learn new skills and programming
                languages, responsive design, problem solving, Model View
                Controller (MVC) structure.
              </p>
              <p>
                Experience with: Git/GitHub, HTML, CSS, JavaScript, Node.js,
                Bootstrap, Tailwind, Foundation Sites, Handlebars, jQuery,
                Express, React, Sequelize and MongoDB.
              </p>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default App;
