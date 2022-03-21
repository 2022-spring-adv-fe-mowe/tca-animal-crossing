import { logo } from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { AddData } from './AddData';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';


function App() {
  
  const Villagers = [
    {
      name: "Ione",
      picture: true
    },
    {
      name: "Rodney",
      picture: true
    },
    {
      name: "Baabara",
      picture: true
    },
    {
      name: "Stinky",
      picture: true
    },
    {
      name: "Shino",
      picture: false
    },
    {
      name: "Walker",
      picture: false
    },
    {
      name: "Marlo",
      picture: false
    },
    {
      name: "Marshal",
      picture: true
    },
    {
      name: "Octavian",
      picture: true
    },
    {
      name: "Skye",
      picture: true
    },
  ]

  const Interactions = [
    {
      villager: "Shino",
      date: "2022-02-26",
      interactions: [
        "chat", "chat", "gift-GIR"
      ]
    },
    {
      villager: "Octavian",
      date: "2022-02-26",
      interactions: [
        "chat", "chat"
      ]
    }
  ]

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
