import React,{Fragment} from 'react';
import Previous from '../../img/Previous.png';
import Next from '../../img/Next.png';
import './ThirdPageFooter.css';


function ThirdPageFooter() {
  return (
    <Fragment>
         <footer className='Third_Footer'>
            <img  src={Previous} alt="previous" className='Third_Previous'/>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet'></div>
            <div className='bullet'></div>
            <img src={Next} alt="Next" className='Third_Next'/>                    
        </footer>
    </Fragment>
  )
}

export default ThirdPageFooter