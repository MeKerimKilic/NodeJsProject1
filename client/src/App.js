import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import HomeScreen from "./Screens/Home";
import AuthSigninScreen from "./Screens/AuthSignin";
import AuthSignupScreen from "./Screens/AuthSignup";
import {useState} from "react";



function App() {
    const [user, setUser] =useState(null);
  return (

      <Router>
          <Header user={user} setUser={setUser}/>
          <main className='py-3'>
              <Container>
                  <Routes>
                      <Route path='/' element={<HomeScreen user={user}/>} exact></Route>
                      <Route path='/auth/signin' element={<AuthSigninScreen setUser={setUser}/>} ></Route>
                      <Route path='/auth/signup' element={<AuthSignupScreen/>} ></Route>
                  </Routes>
              </Container>
          </main>
      </Router>
  );
}

export default App;
