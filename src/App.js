import './App.scss';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { GlobalProvider } from './Context/GlobalContext';
import Watchlist from './Components/Watchlist';
import Watched from './Components/Watched';

function App() {
  return (
    <>
       <GlobalProvider>
       <Router>
        <div className="container_fluid">
            <Navbar/>
            <div className="container">
            <Switch >
                    <Route exact="true" path="/" component={Home}/>
                    <Route exact="true" path="/watchlist" component={Watchlist}/>
                    <Route exact="true" path="/watched" component={Watched}/>
            </Switch>
            </div>
          </div>   
        </Router>
       </GlobalProvider>
    </>
  );
}

export default App;
