import React from 'react';
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;


const SearchForm = () =>{
  return (
    <div>
  <Form style={{textAlign: 'center', padding : '50px'}}>

        <span style ={{color: "green", fontSize:'60px', alignContent:'center'}}><b><span style={{color:'yellow'}}>Aossie </span>Scholar</b></span>
      <Form.Item hasFeedback validateStatus="success" >
      <Input style={{ width: '80%' , height: '45px' }} placeholder="scholar search..."/>
    </Form.Item>
    <Button type="primary" icon="search" style={{borderRadius:'0px', height:'45px'}}>Search</Button>
  </Form>
  </div>
  );

}

export default SearchForm;
