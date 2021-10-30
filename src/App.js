
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './WebPages/Login-Page/Login';
import ContactUs from './WebPages/Contact-Us/ContactUs';
import Footer from './WebPages/Footer/Footer';
import Header from './WebPages/Header/Navbar/Header';
import Home from './WebPages/Home/Home';
import PrivateRoute from './WebPages/PrivateRoute/PrivateRoute';
import TouristPlace from './WebPages/Tourist-Place/TouristPlace';
import TravelGuide from './WebPages/Travel-Guide/TravelGuide';
import ServiceList from './WebPages/ServiceList/ServiceList';
import TourPlaceList from './WebPages/Tourist-Place/TourPlaceList';

function App() {
  return (
    <div>
      <AuthProvider>
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
        <PrivateRoute path="/travel">
          <TravelGuide></TravelGuide>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/ServiceList/:listId">
      <ServiceList></ServiceList>
        </Route>
        <Route path="/TourList/:listId">
      <TourPlaceList></TourPlaceList>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
