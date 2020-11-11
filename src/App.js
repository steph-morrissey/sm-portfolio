import React from 'react';
import './App.less';
import { Layout, Typography, Row } from 'antd';

import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';

const { Title } = Typography;
const { Header, Content } = Layout;
const App = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row
            style={{
              backgroundColor: '#FFF',
              padding: '20px 20px 0px 0px',
            }}
          >
            <Title>Stephanie Morrissey</Title>
            <Navbar />
          </Row>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <div id='about'>
            <About />
          </div>
          <div id='projects'>
            <Row justify='middle' align='center' style={{ paddingTop: '70px' }}>
              <Title>Projects</Title>
            </Row>
            <Row justify='middle' align='center'>
              <ProjectCard />
            </Row>
          </div>
          <div id='connect' style={{ backgroundColor: '#F9F8FD' }}>
            <Row justify='middle' align='center' style={{ paddingTop: '50px' }}>
              <Title>Let's Connect!</Title>
            </Row>
            <Contact />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
