import React from 'react';
import SearchForm from '../components/AuthorSearchForm';
import RegistrationForm from  '../components/AuthorRegistrationForm';

const Index =(props) => {
  return(
    <div>
      <div style={{textAlign: 'center', backgroundImage:"url('https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=370&w=1200') "}}>
        <img src="https://aossie.gitlab.io/img/AOSSIE_logo_11_cropped_15cm.png" style={{width:'20%'}}/>
        <SearchForm/>
      </div>
      <div style={{textAlign:'center', padding:'40px'}}>

        <h1 style={{fontFamily: 'inherit', fontWeight:'bold'}}>Register to continue with Aossie Scholar to get more accurate</h1>
        <h1 style={{fontFamily: 'inherit', fontWeight:'bold'}}> And precise data of Scholars</h1>
      </div>
        <RegistrationForm/>
      </div>

  );
}
export default Index;
