import React,{Fragment,useState} from 'react'
import WelcomePage from './components/WelcomePage';
import FirstPage from './components/firstPage';
import SecondPage from './components/SecondPage';


function App() {
  const [nameChangeHandler,setNameChangeHandler]=useState('');
  const [lastNameChangeHandler,setLastNameChangeHandler]=useState('');
  const [emailChangeHandler,setEmailChangeHandler]=useState('');
  const [numberChangeHandler,setnumberChangeHandler]=useState('');
  
  const telRegex=/\+\s*9\s*9\s*5\s*5\s*[976514]\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*/;
  const validNumber=numberChangeHandler.replace(/\s/g, "");
  const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameChange=(event)=>{
    setNameChangeHandler(event.target.value);
        
  }
  const lastNameChange=(event)=>{
      setLastNameChangeHandler(event.target.value);
  }
  const emailChange=(event)=>{
      setEmailChangeHandler(event.target.value);
  }
  const numberChange=(event)=>{
      setnumberChangeHandler(event.target.value);
  }
  let errorObj={
    name:"The field must contain at least 2 characters",
    lastname:"The field must contain at least 2 characters",
    email:"Email is not valid",
    phone:"Phone number is not valid"
  }
  
  const[nameError,setNameError]=useState(false);
  const[lastNameError,setLastNameError]=useState(false);
  const[emailError,setEmailError]=useState(false);
  const[phoneError,setPhoneError]=useState(false);


  const[IsWelcomePage,setIsWelcomePage]=useState(true);
  const[IsFirstPage,setIsFirstPage]=useState(false);
  const[IsSecondPage,setIsSecondPage]=useState(false);
  
  const GoFirstPage=()=>{
    setIsWelcomePage(false);
    setIsFirstPage(true);
  }
  const BackWelcomePage=()=>{
    setIsWelcomePage(true);
    setIsFirstPage(false);
  }
  const GoSecondPage=()=>{
    if(nameChangeHandler.trim().length>=2&&
    lastNameChangeHandler.trim().length>=2&&
    regex.test(emailChangeHandler)&&emailChangeHandler.trim().length>0&&
    (numberChangeHandler.length===0||(telRegex.test(numberChangeHandler)&&validNumber.length==13))){
      setIsFirstPage(false);
      setIsSecondPage(true);
    }
    if(nameChangeHandler.trim().length<2){
      setNameError(true);
    }else{
      setNameError(false);
    }
    if(lastNameChangeHandler.trim().length<2){
      setLastNameError(true);
    }else{
      setLastNameError(false);
    }
    if(!regex.test(emailChangeHandler)){
      setEmailError(true)
    }else{
      setEmailError(false);
    }
    if(numberChangeHandler.length>0&&
      (!telRegex.test(numberChangeHandler)||validNumber.length!==13)){
      setPhoneError(true);
    }else{
      setPhoneError(false);
    }

  }
  const BackFirstPage=()=>{
    setIsSecondPage(false);
    setIsFirstPage(true);

  }

return(
  <Fragment>
    {IsWelcomePage&&<WelcomePage GoFirstPage={GoFirstPage}/>}
    {IsFirstPage&&<FirstPage 
      BackWelcomePage={BackWelcomePage} 
      GoSecondPage={GoSecondPage} 
      nameChange={nameChange}
      lastNameChange={lastNameChange}
      emailChange={emailChange}
      numberChange={numberChange}
      nameChangeHandler={nameChangeHandler}
      lastNameChangeHandler={lastNameChangeHandler}
      emailChangeHandler={emailChangeHandler}
      numberChangeHandler={numberChangeHandler}
      errorName={nameError}
      errorLastName={lastNameError}
      errorEmail={emailError}
      errorNumber={phoneError}
      errorObj={errorObj}
      
    />}
    {IsSecondPage&&<SecondPage BackFirstPage={BackFirstPage}/>}
  
  </Fragment>
)
}

export default App;