import React,{Fragment,useState} from 'react';
import './SecondPage.css';
import Previous from '../img/Previous.png';
import Next from '../img/Next.png';
import Remove from '../img/Remove.png';
import RightSide from './RightSide';

let skillsCount=0;
let id=0;
let valid=0;
function SecondPage(props) {
    
    const[skillsArray,setSkillsArray]=useState([]);
    const[chosenSkill,setChosenSkill]=useState("skills");
    const[expChange,setExpChange]=useState('');
    const[skillsCount,setSkillsCount]=useState(false);
    
    const changeSkills=(event)=>{
        setChosenSkill(event.target.value);
    }
    const removeChosenSkill=(id)=>{
        const newArray=skillsArray.filter(item=>item.id!==id
        )
        skillsCount-=1;
        setSkillsCount(false);
        setSkillsArray(newArray);
    }

    const expChanges=event=>{
        setExpChange(event.target.value);
    }
    const clickButton=(event)=>{
        valid=0;
        event.preventDefault();
        id+=1;
        skillsArray.map(item=>{
            if(chosenSkill==item.progLanguage){
                valid+=1;
            }
        })
        if(chosenSkill!='skills'&&expChange>0&&valid==0){
            setSkillsArray([...skillsArray,
                {
                id:id,
                progLanguage:chosenSkill,
                title:"Years of Experience: ",
                years:expChange
            }])
            setSkillsCount(true);
            setExpChange('');
        }
    }
    
  return (
    <Fragment>
        <div className='Wrapper'>
            <div className='left_section'>
                <h1 className='left_title'>Tell us about your skills</h1>
                <form>
                    <select value={chosenSkill} onChange={changeSkills}>
                        <option>skills</option>
                        {props.skills.map(item=>{
                            return(
                                <option key={item.id}>{item.title}</option>
                            )
                        })}
                    </select>
                    <input value={expChange} onChange={expChanges}  type="text" placeholder="Experience Duration in Years"/>
                    <div className='button_div'>
                        <button onClick={clickButton} className='prog_language'>Add Programing Language</button>
                    </div>
                    <div className='skill_box'>
                        {skillsArray.map(item=>{
                            return(
                                <div className='skill' key={item.id}>
                                    {item.progLanguage} {item.title} {item.years} 
                                    <img onClick={()=>{
                                        removeChosenSkill(item.id)
                                    }} src={Remove}/> 
                                </div>
                            )
                        })}
                        
                    </div>
                </form>
                <footer className='nav'>
                    <img onClick={props.BackFirstPage} src={Previous} alt="previous" className='Previous'/>
                    <div className='bullet_main'></div>
                    <div className='bullet_main'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <img onClick={skillsCount ? props.GoThirdPage:undefined} src={Next} alt="Next" className='Next'/>
                </footer>
            </div>
            <RightSide title="A bit about our battles">    
                    As we said, Redberry has been on the field for quite some 
                    time now, and we have touched and embraced a variety of 
                    programming languages, technologies, philosophies, and 
                    frameworks. We are battle-tested in PHP Laravel Stack with 
                    Vue.js, refined in React, and allies with Serverside 
                    technologies like Docker and Kubernetes, and now we have 
                    set foot in the web3 industry.
            </RightSide>
        </div>
    </Fragment>
    
  )
}

export default SecondPage;