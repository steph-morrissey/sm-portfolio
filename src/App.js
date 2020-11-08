import React from 'react';
import './App.less';
import { Layout, Typography, Row } from 'antd';

import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';

const { Title } = Typography;

const App = () => {
  return (
    <div>
      <Layout>
        <Row style={{ backgroundColor: '#FFF', padding: '10px 0px 0px 10px' }}>
          <Title>Stephanie Morrissey</Title>
          <Navbar />
        </Row>
        <About />
      </Layout>
      <div>
        <Row justify='middle' align='center' style={{ paddingTop: '50px' }}>
          <Title>Projects</Title>
        </Row>
        <Row justify='middle' align='center'>
          <ProjectCard />
        </Row>
      </div>
      <div>
        <Row justify='middle' align='center' style={{ paddingTop: '50px' }}>
          <Title>Let's Connect!</Title>
        </Row>
        <Contact />
      </div>
    </div>
  );
};

export default App;
