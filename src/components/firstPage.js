import React,{Fragment} from 'react';
import './firstPage.css';
import Previous from '../img/Previous.png';
import Next from '../img/Next.png';

function FirstPage() {
  return (
    <Fragment>
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>hey, rocketeer, what are your coordinates?</h1>
                <form>
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                    <input type="email" placeholder='E Mail'/>
                    <input type="text" placeholder='+995 5_ _ _ _'/>          
                </form>
                <footer>

                    <img src={Previous} alt="previous" className='Previous'/>
                    <div className='bullet_main'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <div className='bullet'></div>
                    <img src={Next} alt="Next" className='Next'/>
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