import React from 'react';
import SearchForm from '../components/AuthorSearchForm';
import RegistrationForm from  '../components/AuthorRegistrationForm';
import Contact from '../components/Contact';
import { Card, Col, Row, Button, Input, Icon } from 'antd';
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/AOSSIE.png';
import Image3 from '../assets/search.jpg';
import Image4 from '../assets/gitlab.png';
import scholar from 'google-scholar-extended';

const { Search } = Input;
// scholar.all('chairmouse')
//   .then(resultsObj => {
//     console.log(resultsObj) // this will have all ~112 results
//   })
const { Meta } = Card;
class Index extends React.Component {

state = { 
  visible: false ,
  value: '',
  copied: false
};

  render(){
  return(
    <div>
      <div style={{textAlign: 'center', backgroundAttachment: 'fixed',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundImage:"url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80') ", width: '100%'}}>
        <img src={Image2} style={{width:'30%'}}/>
        <br/><br/><br/><span style ={{color: "green", fontSize:'80px', alignContent:'center', fontFamily: 'cursive', fontStyle:'oblique', fontVariant: 'small-caps'}}><b><span style={{color:'yellow', fontFamily: 'cursive', fontStyle:'oblique', fontVariant: 'small-caps'}}>MY - </span>Scholar</b></span>
      </div>
      <div style={{textAlign:'center', padding:'20px'}}>
      </div>
      <br/>
      
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image3} />}
              bordered={false}     
            >
            <Meta title="What is Google Scholar?" description="Google Scholar is the one of the biggest platform to search articles, journals and papers." />
              
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image1} />}
              bordered={false}
           
            >
            <Meta title="Why My Scholar?" description="To get more accurate data and flawless metrces than Google Schlolar." />
              
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image4}  />}
              bordered={false}           
            >
            <Meta title="Contribute to My-Scholar" description="Visit https://gitlab.com/aossie/aossie-scholar" />              
            </Card>
          </Col>
        </Row>
      </div>

        <RegistrationForm/>
        <Contact/>
    </div>

  );
}
}
export default Index;
