import React,{Fragment,useState} from 'react';
import './firstPage.css';
import Previous from '../img/Previous.png';
import Next from '../img/Next.png';

function FirstPage(props) {
    
    return (
    <Fragment>
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>hey, rocketeer, what are your coordinates?</h1>
                <form>
                    <input type="text" placeholder='Name' value={props.nameChangeHandler} onChange={props.nameChange}/>
                    <p className='require'>The field must contain at least 2 characters</p>
                    <input type="text" placeholder='Last Name' value={props.lastNameChangeHandler} onChange={props.lastNameChange}/>
                    <p className='require'>The field must contain at least 2 characters</p>
                    <input type="email" placeholder='Email' value={props.emailChangeHandler} onChange={props.emailChange} />
                    <p className='require'>Email is not valid</p>
                    <input type="text" placeholder='+995_ _ _ _' value={props.numberChangeHandler} onChange={props.numberChange}/>  
                    <p className='require'>phone number is not valid</p> 
                    
                </form>
                <footer>

                    <img onClick={props.BackWelcomePage} src={Previous} alt="previous" className='Previous'/>
                    <div className='bullet_main'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <img onClick={props.GoSecondPage} src={Next} alt="Next" className='Next'/>
                </footer>
                
            </div>
            <div className='arcticle'>
                <h1 className='title2'>redberry origins</h1>
                <p>
                    You watch “What? Where? When?” Yeah. Our founders used to play it. 
                    That’s where they got a question about a famous American author 
                    and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia 
                    forgot the exact name and he answered Ray Redberry. And at that 
                    moment, a name for a yet to be born company was inspired - Redberry 😇
                </p>
                
            </div>
           
                
                
           
        </div>
    </Fragment>
  )
}

export default FirstPage;