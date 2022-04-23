import './App.css';
import localforage from 'localforage';

import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';

import { Play } from './Play';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';

const villagers = [
/////////////START HARDCODED DATA//////////////
  {
    name: "Ione",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Rodney",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Baabara",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Stinky",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Shino",
    picture: false, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Walker",
    picture: false, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Marlo",
    picture: false, 
    active: false
  },
  {
    name: "Marshal",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Octavian",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Skye",
    picture: true, 
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
  {
    name: "Gruff",
    picture: true,
    active: false
  },
  {
    name: "Cole",
    picture: false,
    active: true,
    latestGiftedDate: "",
    latestGiftExchange: ""
  },
]

const interactions = [
  {
    villager: "Shino",
    date: "2022-02-26",
    interaction: 
      "GIR"
  },
  {
    villager: "Octavian",
    date: "2022-02-26",
    interaction: "GIR"
  },
  { 
    villager: "Skye",
    date: "2022-04-01",
    interaction: "na"
  }
]
/////////////END HARDCODED DATA//////////////

//Determine active villagers
const activeVillagers = villagers.filter(x => x.active === true);
const activeVillagerList = activeVillagers.map(x => x.name);

// Create a list of archived villagers (for stats purposes)
const archivedVillagers = villagers.filter(x => x.active === false);
const archivedVillagerList = archivedVillagers.map(x => x.name);

console.log(archivedVillagerList);

//Determine which villagers have yet to provide their photo
const villagersWithoutPicture = villagers.filter(x => x.picture === false);
const villagersWithoutPictureList = villagersWithoutPicture.map(x=> x.name);

console.log(villagersWithoutPictureList);

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={
          <Stats 
            villagers = {villagers}
          />
        } />
        <Route path="play" element={
          <Play
            villagers = {activeVillagerList}
            picturesNeeded = {villagersWithoutPictureList}
          />
        } />
        <Route path="addvillager" element={
          <AddVillager
            villagers = {activeVillagerList}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
