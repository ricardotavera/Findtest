
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import AddExam from './components/pages/AddExam';
import Average from './components/pages/Average';
import Cicle from './components/pages/Cicle';
import Recomendations from './components/pages/Recomendations';
import SignUp from './components/pages/SignUP';
import Footer from './components/Footer';
import Exams from './components/pages/exams/Exams';
import Parcial from './components/pages/parcial/Parcial';
import Programming from './components/pages/Programming';
import Popup from './components/pages/Popup';



/* render={props => <Parcial asignature='Hello, I can pass as props' />} */

function App() {
  return (
    
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' component={AddExam}/>
          <Route path='/average' component={Average}/>
          <Route path='/cicle' component={Cicle}/>
          <Route path='/recomendations' component={Recomendations}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/exams' component={Exams} />
          <Route path='/parcial/'  component={Parcial}/> 
          <Route path='/coder' component={Programming}/>
          <Route path='/popup' component={Popup}/>
          

        </Switch>

        
        <Footer />
        
      
    </Router>
  );
}

export default App;
