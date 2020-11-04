import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';



function App() {
  return (
    <div>
      <Router>

        <Header />
       
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
