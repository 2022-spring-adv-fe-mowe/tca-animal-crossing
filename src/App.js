import { logo } from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { func } from 'prop-types';
import { Fragment } from 'react';

import { Button } from '@mui/material/Button';

import { AddData } from './AddData';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={<Stats />} />
        <Route path="adddata" element={<AddData/>} />
        <Route path="addvillager" element={<AddVillager/>} />
      </Routes>
    </div>
  );
};

export default App;


/* function App() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={aclogo} className="ac-logo" alt="ac-logo" />

        <Button 
          variant="contained"
          onClick={AddData}
        >
          Add Data
        </Button>
        <Button 
          variant="contained"
        >
          View Data
        </Button>
        <Button variant="contained" >
          View Stats
        </Button>
      </header>
      </div>
    </>
  );
}
export default App;
 */
