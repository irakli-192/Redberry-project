import React,{Fragment,useState} from 'react'
import WelcomePage from './components/WelcomePage';
import FirstPage from './components/firstPage';
import SecondPage from './components/SecondPage';


function App() {

    const[IsValidWelcomePage,setIsWalidWelcomePage]=useState(true);
    const[IsValidFirstPage,setIsWalidFirstPage]=useState(false);
    const[IsValidSecondPage,setIsWalidSecondPage]=useState(false);
    const GoFirstPage=()=>{
      setIsWalidWelcomePage(false);
      setIsWalidFirstPage(true);
    }
    const BackWelcomePage=()=>{
      setIsWalidWelcomePage(true);
      setIsWalidFirstPage(false);
    }
    const GoSecondPage=()=>{
      setIsWalidFirstPage(false);
      setIsWalidSecondPage(true);
    }
    const BackFirstPage=()=>{
      setIsWalidSecondPage(false);
      setIsWalidFirstPage(true);

    }

  return(
    <Fragment>
      {IsValidWelcomePage&&<WelcomePage GoFirstPage={GoFirstPage}/>}
      {IsValidFirstPage&&<FirstPage BackWelcomePage={BackWelcomePage} GoSecondPage={GoSecondPage}/>}
      {IsValidSecondPage&&<SecondPage BackFirstPage={BackFirstPage}/>}
    </Fragment>
  )
}

export default App;