import React from 'react';
import { Form, Input, Select, InputNumber, Button } from 'antd';
const { Option } = Select;


const RegistrationForm = () =>{
  return (
    <div>
  <Form style={{ padding : '50px'}}>

    <Form.Item label="Scholar URL" hasFeedback validateStatus="success">
      <Input style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Maximum Publications" hasFeedback validateStatus="success">
    <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Country" hasFeedback validateStatus="success">
    <Select defaultValue="Australia">
      <Option value="India" key ="1">India</Option>
      <Option value="Australia">Australia</Option>
      <Option value="Austria" >Austria</Option>
      <Option value="Jermany">Jermany</Option>
      <Option value="Brazil">Brazil</Option>
      <Option value="Urope">Urope</Option>
      <Option value="London">United Kingdom</Option>
      <Option value="USA">USA</Option>
    </Select>

    </Form.Item>
    <Button type="primary" icon="user-add" style={{height:'45px'}}>Register</Button>

  </Form>
  </div>
  );

}

export default RegistrationForm;
