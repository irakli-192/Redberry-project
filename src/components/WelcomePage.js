import React,{Fragment} from 'react';
import stars from '../img/stars.png';
import rocketman from '../img/rocketman.png';
import './WelcomePage.css';

function WelcomePage() {
 
  return (
    <Fragment>
        <img className='stars_image' src={stars} alt="stars"/>
        <div className='content'>
            <h1 className='main_title'>welcome rocketeer!</h1>
            <div className='button'>
              <button className='start_button'>start questionnaire</button>
            </div>
            <h3 className='submitted_app_button'>submitted applications</h3>
            <img className='rocketman' src={rocketman} alt="rocketman"/>
            
        </div>
        
    </Fragment>
  )
}

export default WelcomePage;