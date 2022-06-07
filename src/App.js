import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?format=json`)
    .then(res => res.json())
    .then(json => {
      console.log("People", json.results)
      setPeople(json.results)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  },[])

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?format=json`)
    .then(res => res.json())
    .then(json => {
      console.log("Planets", json.results)
      setPlanets(json.results)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  },[])

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
            <Route path="/people" element={<PeoplePage data={people} />} />
            <Route path="/planets" element={<PlanetPage data={planets} />}/>
          </Routes>
        {/*)} */}
      </Router>
    </div>
  );
}

export default App;
