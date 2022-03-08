import React,{Fragment} from 'react';
import ThirdPageForm from './ThirdPageForm';
import './ThirdPage.css'

function ThirdPage(props) {
  return (
    <Fragment>
      <div className="Wrapp">
          <div className='left'>
            <h1 className='Third_Page_Title'>Covid Stuff</h1>
            <ThirdPageForm BackSecondPage={props.BackSecondPage}/>
          </div>
          <div className='right'>
            <h1 className='Right_Title'>Redberry Covid Policies</h1>
            <p className='Third_Page_Parag'>As this infamous pandemic took over the world, we adjusted 
              our working practices so that our employees can be as safe and 
              comfortable as possible. We have a hybrid work environment, so
               you can either work from home or visit our lovely office on 
               Sairme Street. If it was up to us, we would love you to see us 
               in the office because we think face-to-face communications > 
               Zoom meetings. Both on the fun and productivity scales. 
            </p>
          </div>
      </div>
    </Fragment>
  )
}

export default ThirdPage