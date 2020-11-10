import React from 'react';
import { Row, Col, Image } from 'antd';

const About = () => {
  return (
    <Row style={{ padding: '20px' }} align='middle' justify='center'>
      <Col sm={16} sm-offset={8} md={12} lg={9}>
        <Image
          src='/Images/steph-morrissey.jpeg'
          placeholder={<Image src='/Images/steph-morrissey.jpeg' width={200} />}
        />
      </Col>
      <Col sm={24} md={12} lg={12}>
        <div style={{ backgroundColor: '#FFF', padding: '5px' }}>
          <h1>Hello,</h1>
          <p>I'm Steph! Welcome to my website.</p>
          <p>
            My specialist software development skills include: HTML5, CSS, CSS
            Frameworks (Bootstrap, Semantic UI, Tailwind), JavaScript, jQuery,
            NodeJs, MySQL, MongoDB, Express, Handlebars JS and React JS.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default About;
