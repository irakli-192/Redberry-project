import React,{Fragment} from 'react'
import RightSide from '../../RightSide'
import './FourthPage.css'
import FourthPageFooter from './FourthPage'

function FourthPage() {
  return (
    <Fragment>
        <div className='Wrapper_Fourth'>
            <div className='leftSide'>
                <h1 className='leftSide_title'>What about you?</h1>
                <div className='Questionnaire'>
                    <div className='Question1'>
                        <h3 className='Devtalks'>Would you attend Devtalks and maybe also organize your own?</h3>
                        <div className='main_radio'>
                            <input  type='radio' name='First' className='radio' id='Yes'/>
                            <label className='Fourth_Label' htmlFor='Yes'>Yes</label>
                        </div>
                        <div>
                            <input  type='radio' name='First' className='radio' id='No'/>
                            <label className='Fourth_Label' htmlFor='No'>No</label>  
                        </div>
                    </div>
                    <div className='Question2'>
                        <h3 className='textarea_title1'>What would you speak about at Devtalk?</h3>
                        <textarea className="textarea2" placeholder='I would...'></textarea>
                    </div>   
                    <div className='Question3'>
                        <h3 className='textarea_title2'>Tell us something special</h3>
                        <textarea className="textarea2" placeholder='I...'></textarea>
                    </div>               
                </div>
            </div>
            <RightSide title='Redberrian Insights'>
                We were soo much fun before the pandemic 
                started! Parties almost every weekend and 
                lavish employee birthday celebrations! 
                Unfortunately, covid ruined that fun like 
                it did almost everything else in the world. 
                But we try our best to zhuzh it up a bit. For 
                example, we host biweekly Devtalks where our 
                senior and lead developers talk about topics 
                they are passionate about. Previous topics have 
                included Web3, NFT, Laravel 9, Kubernetes, etc.
                We hold these talks in the office but you can 
                join our Zoom broadcast as well. Feel free to 
                join either as an attendee or a speaker!
            </RightSide>
            <FourthPageFooter/>
            
        </div>
    </Fragment>
  )
}

export default FourthPage