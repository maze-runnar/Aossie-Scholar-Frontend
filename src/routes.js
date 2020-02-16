import React from 'react';
import {Route} from 'react-router-dom';
import LoadMoreList from './components/Scholars';
import RegistrationForm from './components/AuthorRegistrationForm';
import SearchForm from './components/AuthorSearchForm';
import Index from './containers/Index';
import Info from './containers/Info';

const BaseRouter =()=>(
    <div>
      <Route exact path='/metrics' component = {LoadMoreList}/>
      <Route exact path='/registration' component = {RegistrationForm}/>
      <Route exact path='/search' component = {SearchForm}/>
      <Route exact path='/' component = {Index}/>
      <Route exact path='/info' component = {Info}/>

    </div>
);

export default BaseRouter;
