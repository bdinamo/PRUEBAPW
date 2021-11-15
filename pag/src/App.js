
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Productdetail from "./components/Productdetail/Productdetail";
import AuthRoute from "./components/AuthRoute";
import Register from './components/register';
import Inicio from './components/Inicio';
import Notebooks from './components/Notebook';
import Monitores from './components/Monitores';
import Procesadores from './components/Procesadores';
import Abm from './components/Abm/abm';
import Carrito from './components/Cart/carrito';




function App() {

  return (
    <Router>
      <div>
        <Switch>
        <Route exact={true} path={`/register`}>
              <Register />
            </Route>
            <Route exact={true} path={`/carrito`}>
              <Carrito/>
            </Route>
            <AuthRoute exact={true} path={`/abm`}>
              <Abm />
            </AuthRoute>
            <AuthRoute exact={true} path={`/profile`}>
            <Profile />
          </AuthRoute>
          <Route exact={true} path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
            <Navbar />
            <Route exact={true} path={`/Products`}>
              <Products />
            </Route>
            <Route exact={true} path={`/products/detail/:id`}>
              <Productdetail/>
            </Route>
            <Route exact={true} path={`/Notebook`}>
              <Notebooks />
            </Route>
            <Route exact={true} path={`/Monitores`}>
              <Monitores />
            </Route>
            <Route exact={true} path={`/Procesadores`}>
              <Procesadores />
            </Route>
            <Route exact={true} path={`/Inicio`}>
              <Inicio />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
