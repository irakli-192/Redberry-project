import React,{Fragment} from 'react'
import './ThirdPageForm.css';
import ThirdPageFooter from './ThirdPageFooter';


function ThirdPageForm() {
  return (
    <Fragment>
        <form>
            <div className='Question'>
                <h3 className='First_Question_Title'>how would you prefer to work?</h3>
                <div>
                    <input type='radio' name='First_Question' className='radio' id='From Sairme Office'/>
                    <label className='Third_Label' for='From Sairme Office'>From Sairme Office</label>
                </div>
                <div>
                    <input type='radio' name='First_Question' className='radio' id='From Home'/>
                    <label className='Third_Label' for='From Home'>From Home</label>  
                </div>
                <div>
                    <input type='radio' name='First_Question' className='radio' id='Hybrid'/>
                    <label className='Third_Label' for='Hybrid'>Hybrid</label>   
                </div>
            </div>
            <div className='Question'>
                <h3>Did you contact covid 19? :(</h3>
                <div>
                    <input type='radio' name='Second_Question' className='radio' id='Yes'/>
                    <label className='Third_Label' for='Yes'>Yes</label>
                </div>
                <div>
                    <input type='radio' name='Second_Question' className='radio' id='No'/>
                    <label className='Third_Label' for='No'>No</label>  
                </div>
            </div>
            <div className='Question'>
                <h3>When</h3>
                <input className='Date_Input' type='date'/>
            </div>
            <div className='Question'>
                <h3>Have you been vaccinated?</h3>
                <div>
                    <input type='radio' name='fourth_Question' className='radio' id='Yes'/>
                    <label className='Third_Label' for='Yes'>Yes</label>
                </div>
                <div>
                    <input type='radio' name='fourth_Question' className='radio' id='No'/>
                    <label className='Third_Label' for='No'>No</label>  
                </div>
            </div>
            <div className='Question'>
                <h3>When did you get your last covid vaccine?</h3>
                <input className='Date_Input' type='date'/>
            </div>
            <ThirdPageFooter/>
        </form>
    </Fragment>
  )
}

export default ThirdPageForm;