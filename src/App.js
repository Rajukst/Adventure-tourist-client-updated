
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './WebPages/Login-Page/Login';
import Footer from './WebPages/Footer/Footer';
import Header from './WebPages/Header/Navbar/Header';
import Home from './WebPages/Home/Home';
import MyBooking from './WebPages/MyBooking/MyBooking';
import ManageBooking from './WebPages/ManageBooking/ManageBooking';
import AddService from './WebPages/NewService/AddService';
import PrivateRoute from './WebPages/PrivateRoute/PrivateRoute';
import Booking from './WebPages/Booking/Booking';


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
        <PrivateRoute path="/my-booking">
      <MyBooking></MyBooking>
        </PrivateRoute>
        <PrivateRoute path="/booking/:serviceId">
        <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/manage-booking">
          <ManageBooking></ManageBooking>
        </PrivateRoute>
        <PrivateRoute path="/add-service">
          <AddService></AddService>
        </PrivateRoute>
      
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
