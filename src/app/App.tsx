import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles.scss';
import Home from './pages/Home/Home';
import '../config/api';
import Tracking from './pages/Tracking/Tracking';
import StandarTracking from './pages/StandarTracking/StandarTracking';


const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tracking" exact component={Tracking} />
    <Route path="/standarTracking" exact component={StandarTracking} />
  </Router>
);

export default App;
