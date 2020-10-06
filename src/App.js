import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Desc from './components/description';
import Home from './components/home';
function App() {

  return (
    
      <Router>
    <div >
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={()=><Desc />} />  
    </div>    
      </Router>
    
  );
}

export default App;
