import React,{Fragment} from 'react';
import stars from '../img/stars.png';
import rocketman from '../img/rocketman.png';
import './WelcomePage.css';

function WelcomePage(props) {
 
  return (
    <Fragment>
        <img src={stars} className="stars_image"/>
        <div className='content'>
            <h1 className='main_title'>welcome rocketeer!</h1>
            <div className='button'>
              <button onClick={props.GoFirstPage} className='start_button'>start questionnaire</button>
            </div>
            <h3 className='submitted_app_button'>submitted applications</h3>
            <img className='rocketman' src={rocketman} alt="rocketman"/>
            
        </div>
        
    </Fragment>
  )
}

export default WelcomePage;