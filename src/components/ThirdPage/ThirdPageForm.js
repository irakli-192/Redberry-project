import React,{Fragment,useReducer} from 'react'
import './ThirdPageForm.css';
import ThirdPageFooter from './ThirdPageFooter';

function reducer(state,action){
    switch(action.type){
        case 'First_Question':
            return {...state,first:action.payload}
        case 'Second_Question':
            return {...state,second:action.payload}
        case 'Third_Question':
            return {...state,third:action.payload}
        case 'Fourth_Question':
            return {...state,fourth:action.payload}
        case 'Five_Question':
            return {...state,five:action.payload}
        default:
            return state;
    }
}

function ThirdPageForm() {
    const[state,dispatch]=useReducer(reducer,{first:'',second:'',third:'',fourth:'',five:''})
    
    const First_Change=event=>{
        dispatch({type:'First_Question',payload:event.target.id})    
    }
    const Second_Change=event=>{
        dispatch({type:'Second_Question',payload:event.target.id})
    }
    const Third_Change=event=>{
        dispatch({type:'Third_Question',payload:event.target.value})
    }
    const Fourth_Change=event=>{
        dispatch({type:'Fourth_Question',payload:event.target.id})
    }
    const Five_Change=event=>{
        dispatch({type:'Five_Question',payload:event.target.value})
    }
  return (
    <Fragment>
        <form>
            <div className='Question'>
                <h3 className='First_Question_Title'>how would you prefer to work?</h3>
                <div>
                    <input onChange={First_Change} type='radio' name='First_Question' className='radio' id='From Sairme Office'/>
                    <label className='Third_Label' htmlFor='From Sairme Office'>From Sairme Office</label>
                </div>
                <div>
                    <input onChange={First_Change} type='radio' name='First_Question' className='radio' id='From Home'/>
                    <label className='Third_Label' htmlFor='From Home'>From Home</label>  
                </div>
                <div>
                    <input onChange={First_Change} type='radio' name='First_Question' className='radio' id='Hybrid'/>
                    <label className='Third_Label' htmlFor='Hybrid'>Hybrid</label>   
                </div>
            </div>
            <div className='Question'>
                <h3>Did you contact covid 19? :(</h3>
                <div>
                    <input onChange={Second_Change} type='radio' name='Second_Question' className='radio' id='Yes'/>
                    <label className='Third_Label' htmlFor='Yes'>Yes</label>
                </div>
                <div>
                    <input onChange={Second_Change} type='radio' name='Second_Question' className='radio' id='No'/>
                    <label className='Third_Label' htmlFor='No'>No</label>  
                </div>
            </div>
            <div className='Question'>
                <h3>When</h3>
                <input onChange={Third_Change} className='Date_Input' type='date'/>
            </div>
            <div className='Question'>
                <h3>Have you been vaccinated?</h3>
                <div>
                    <input onChange={Fourth_Change} type='radio' name='fourth_Question' className='radio' id='Yes'/>
                    <label className='Third_Label' htmlFor='Yes'>Yes</label>
                </div>
                <div>
                    <input onChange={Fourth_Change} type='radio' name='fourth_Question' className='radio' id='No'/>
                    <label className='Third_Label' htmlFor='No'>No</label>  
                </div>
            </div>
            <div className='Question'>
                <h3>When did you get your last covid vaccine?</h3>
                <input onChange={Five_Change} className='Date_Input' type='date'/>
            </div>
            <ThirdPageFooter state={state}/>
        </form>
    </Fragment>
  )
}

export default ThirdPageForm;