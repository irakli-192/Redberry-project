import React from 'react'
import Previous from '../../img/Previous.png';
import Next from '../../img/Next.png';

function FourthPageFooter() {
  return (
    <div>
         <footer className='Third_Footer'>
            <img onClick={props.BackSecondPage} src={Previous} alt="previous" className='Third_Previous'/>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet'></div>
            <div className='bullet'></div>
            <img onClick={nextPage} src={Next} alt="Next" className='Third_Next'/>                    
        </footer>
    </div>
  )
}

export default FourthPageFooter