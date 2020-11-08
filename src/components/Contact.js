import React from 'react';
import { Row, Col } from 'antd';
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
          <GithubOutlined style={{ fontSize: '100px', padding: '5px' }} />
        </Col>
        <Col>
          <LinkedinOutlined
            style={{ fontSize: '100px', padding: '5px', color: '#0072b1' }}
          />
        </Col>
        <Col>
          <MailOutlined
            style={{ fontSize: '100px', padding: '5px', color: '#c71610' }}
          />
        </Col>
        <Col>
          <FileSearchOutlined style={{ fontSize: '100px', padding: '5px' }} />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
