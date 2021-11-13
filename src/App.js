import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Footer/Footer";
import Booking from "./Pages/Home/Booking/Booking";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Home/Products/Products";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <Router>
      <Switch>
      <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact  path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <PrivateRoute path="/booking">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>

          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
