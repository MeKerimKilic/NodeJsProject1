import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import HomeScreen from "./Screens/Home";
import AuthSigninScreen from "./Screens/AuthSignin";
import AuthSignupScreen from "./Screens/AuthSignup";

function App() {
  return (

      <Router>
          <Header/>
          <main className='py-3'>
              <Container>
                  <Routes>
                      <Route path='/' element={<HomeScreen/>} exact></Route>
                      <Route path='/auth/signin' element={<AuthSigninScreen/>} ></Route>
                      <Route path='/auth/signup' element={<AuthSignupScreen/>} ></Route>
                  </Routes>
              </Container>
          </main>
      </Router>
  );
}

export default App;
