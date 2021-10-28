
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './WebPages/Header/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
        
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
