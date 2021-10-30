
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Courses from "./components/Courses";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import AuthRoute from "./components/AuthRoute";
import Register from './components/register';
import Inicio from './components/Inicio';
import Notebooks from './components/Notebook';
import Monitores from './components/Monitores';
import Procesadores from './components/Procesadores';
import Accesorios from './components/Accesorios';

function App() {

  return (
    <Router>
      <div>
        <Switch>
        <Route exact={true} path={`/register`}>
              <Register />
            </Route>
          <Route exact={true} path={`/profile`}>
            <Profile />
          </Route>
          <Route exact={true} path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
            <Navbar />
            <Route exact={true} path={`/courses`}>
              <Courses />
            </Route>
            <Route exact={true} path={`/courses/detail/:id`}>
              <CourseDetail/>
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
            <Route exact={true} path={`/Accesorios`}>
              <Accesorios />
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
