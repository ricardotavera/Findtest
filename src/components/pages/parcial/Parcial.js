import React from 'react';
import '../exams/StyleExams.css';
import List2 from './List2';
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';

const Parcial = (props) => {

  if (!props.location.asignature) {
    
   return <Redirect  to="/" />
   
  }

  if(!props.location.params.length){
    var invisbleTag = <h4 className='empty'> Esta asigantura no posee parciales hasta el momento</h4> 
  }else{
    var invisbleTag = null
  }
  {window.scrollTo(0, 0)}

  return props ? (
    <div className="app">

        <h2 className='title2'> {props.location.asignature}</h2>
        <List2 items={props.location.params}/>
        {invisbleTag}
         
      </div>
  ) : ''
}

export default Parcial
