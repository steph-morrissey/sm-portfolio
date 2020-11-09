import React from 'react';
import { Row, Col, Button } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const Contact = () => {
  return (
    <div>
      <Row align='middle' justify='center'>
        <Col>
          <Button type='text' href='https://github.com/steph-morrissey'>
            <GithubOutlined style={{ fontSize: '100px', padding: '5px' }} />
          </Button>
        </Col>
        <Col>
          <Button
            type='text'
            href='https://www.linkedin.com/in/stephanie-morrissey-b36170134/'
          >
            <LinkedinOutlined
              style={{ fontSize: '100px', padding: '5px', color: '#0072b1' }}
            />
          </Button>
        </Col>
        <Col>
          <Button type='text' href='mailto:sgmorrissey098@gmail.com'>
            <MailOutlined
              style={{ fontSize: '100px', padding: '5px', color: '#c71610' }}
            />
          </Button>
        </Col>
        <Col>
          <Button type='text'>
            <a href='stephanieMorrisseyCV.pdf' download>
              <FileSearchOutlined
                style={{ fontSize: '100px', padding: '5px' }}
              />
            </a>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
