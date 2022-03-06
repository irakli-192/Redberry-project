import React,{Fragment} from 'react';
import Previous from '../../img/Previous.png';
import Next from '../../img/Next.png';
import './ThirdPageFooter.css';


function ThirdPageFooter(props) {
  const nextPage=()=>{
    let a=0;
    let arr=Object.entries(props.state);
    arr.map(item=>{
        if(item[1].length>0){
          a++;
        }
        if(a===5){
          console.log(props.state);
        }
      })
      
  }
  return (
    <Fragment>
         <footer className='Third_Footer'>
            <img  src={Previous} alt="previous" className='Third_Previous'/>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet_main'></div>
            <div className='bullet'></div>
            <div className='bullet'></div>
            <img onClick={nextPage} src={Next} alt="Next" className='Third_Next'/>                    
        </footer>
    </Fragment>
  )
}

export default ThirdPageFooter