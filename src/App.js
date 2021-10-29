
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './WebPages/Contact-Page/Login';
import ContactUs from './WebPages/Contact-Us/ContactUs';
import Footer from './WebPages/Footer/Footer';
import Header from './WebPages/Header/Navbar/Header';
import Home from './WebPages/Home/Home';
import TouristPlace from './WebPages/Tourist-Place/TouristPlace';
import TravelGuide from './WebPages/Travel-Guide/TravelGuide';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/tourist-place">
          <TouristPlace></TouristPlace>
        </Route>
        <Route path="/travel">
          <TravelGuide></TravelGuide>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
