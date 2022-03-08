import React,{Fragment} from 'react';
import Previous from '../../img/Previous.png';
import Next from '../../img/Next.png';
import './ThirdPageFooter.css';


function ThirdPageFooter(props) {
 
  
  const nextPage=()=>{
    let sum=0;
    let arr=Object.entries(props.state);
    arr.map(item=>{
        if(item[1].length>0){
          sum++;
        }
      })
      if(sum===5){
        console.log(props.state);
      }else if(!props.third_appear&&!props.five_appear&&sum===3){
        console.log(props.state);
      }else if((props.third_appear||props.five_appear)&&sum===4){
        console.log(props.state);
      }
      
  }
  return (
    <Fragment>
         <footer className='Third_Footer'>
            <img onClick={props.BackSecondPage} src={Previous} alt="previous" className='Third_Previous'/>
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