import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './pages/Home';
import PeoplePage from './pages/PeoplePage';
import PlanetPage from './pages/PlanetPage';

function App() {
  //const [loading, setLoading] = useState(true);


  //setLoading(false);

  return (
    <div className="App">
      <Router>
        {/*{loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : ( */}
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetPage />}/>
          </Routes>
        {/*)} */}
      </Router>
    </div>
  );
}

export default App;
