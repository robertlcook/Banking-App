import './App.css';
import SignOn from './components/SignOnPage';
import HomePage from './components/HomePage';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        < SignOn />
        < HomePage />
        <nav>
          <ul>
            <li><Link to="/">SignOn</Link> </li>
            <li><Link to="/HomePage">HomePage</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" component={SignOn} />
        <Route path="/HomePage" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
