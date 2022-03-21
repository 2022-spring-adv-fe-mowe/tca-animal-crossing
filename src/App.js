import { logo } from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

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
