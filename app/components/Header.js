import React from 'react';
import { Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default () => (
    <Header
        style={{
          background: '#555',
          color: '#FFF',
          fontSize: '1.8em',
          margin: '2px 0'
        }}
        type="flex"
        justify="space-around"
        align="middle"
    >
    <Icon type="rocket" theme="outlined" /> <Link to = '/' style={{color: '#FFF'}}>React Boilerplate</Link>
    </Header>
)