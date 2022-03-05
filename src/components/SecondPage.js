import React,{Fragment} from 'react';
import './SecondPage.css';
import Previous from '../img/Previous.png';
import Next from '../img/Next.png';

function SecondPage(props) {
    
  return (
    <Fragment>
        <div className='Wrapper'>
            <div className='left_section'>
                <h1 className='left_title'>Tell us about your skills</h1>
                <form>
                    <select defaultValue="skills">
                        {props.skills.map(item=>{
                            return(
                                <option key={item.id}>{item.title}</option>
                            )
                        })}
                    </select>
                    <input type="text" placeholder="Experience Duration in Years"/>
                    <div className='button_div'>
                        <button className='prog_language'>Add Programing Language</button>
                    </div>
                    <div className='skill_box'>
                        <div className='skill'></div>
                        <div className='skill'></div>
                    </div>
                </form>
                <footer className='nav'>
                    <img onClick={props.BackFirstPage} src={Previous} alt="previous" className='Previous'/>
                    <div className='bullet'></div>
                    <div className='bullet_main'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <img src={Next} alt="Next" className='Next'/>
                </footer>
            </div>
            <div className='right_section'>
                <h1 className='right_title'>A bit about our battles</h1>
                <p className='right_p'>As we said, Redberry has been on the field for quite some 
                    time now, and we have touched and embraced a variety of 
                    programming languages, technologies, philosophies, and 
                    frameworks. We are battle-tested in PHP Laravel Stack with 
                    Vue.js, refined in React, and allies with Serverside 
                    technologies like Docker and Kubernetes, and now we have 
                    set foot in the web3 industry.
                </p>

            </div>
        </div>
    </Fragment>
    
  )
}

export default SecondPage;