// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';

import Home from './components/Home';
import Forecast from './components/Forecast';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast" component={Forecast} />
          <Route exact path="/500" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
