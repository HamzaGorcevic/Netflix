import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import SignInNetflix from './Netflix/signupnft';
import ShowHome from './Netflix/showhome';
import SignUp from './Netflix/createacc';
import Accout from './Netflix/accountnetflix';
import Provide from './ContextProvider';
import LayoutN from './Netflix/layoutnft';
function App() {
  return (

    <Provide>
        <ShowHome/>
        <Routes>
            
            <Route path ='/login' element={<SignInNetflix/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
    </Provide>

          
      
    
    

)}

export default App;
