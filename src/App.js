import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Bikes from './Components/Bikes/Bikes';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Pay from './Components/Pay/Pay';
import MyOrders from './Components/MyOrders/MyOrders';
import AddReview from './Components/Review/AddReview';
import Reviews from './Components/Review/Reviews';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/bikes'>
              <Bikes></Bikes>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/orders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/review'>
              <Reviews></Reviews>
            </Route>
            <Route path='/addreview'>
              <AddReview></AddReview>
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
