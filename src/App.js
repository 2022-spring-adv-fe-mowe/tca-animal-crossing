import './App.css';
import localforage from 'localforage';

import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';

import { Play } from './Play';
import { Home } from './home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';
import { Crying } from './Crying'

const villagers = [
/////////////START HARDCODED DATA//////////////
  {
    name: "Ione",
    picture: true, 
    active: true,
    },
  {
    name: "Rodney",
    picture: true, 
    active: true,
  },
  {
    name: "Baabara",
    picture: true, 
    active: true,
  },
  {
    name: "Stinky",
    picture: true, 
    active: true,
  },
  {
    name: "Shino",
    picture: false, 
    active: true,
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
  },
]

const hardCodedGiftExchanges = [
  {
    name: "Shino",
    date: "2022-02-26",
    giftExchange: 
      "GIR"
  },
  {
    name: "Octavian",
    date: "2022-02-26",
    giftExchange: "GIR"
  },
  { 
    name: "Skye",
    date: "2022-04-01",
    giftExchange: "NA"
  }
]
/////////////END HARDCODED DATA//////////////

//Determine active villagers
const activeVillagers = villagers.filter(x => x.active === true);
const activeVillagerList = activeVillagers.map(x => x.name);

// Create a list of archived villagers (for stats purposes)
const archivedVillagers = villagers.filter(x => x.active === false);
const archivedVillagerList = archivedVillagers.map(x => x.name);

//Determine which villagers have yet to provide their photo
const villagersWithoutPicture = villagers.filter(x => x.picture === false);
const villagersWithoutPictureList = villagersWithoutPicture.map(x=> x.name);

const App = () => {

  const [giftExchangesState, setGiftExchangesState] = useState(hardCodedGiftExchanges);

  const addNewGiftExchangeToState = (newGiftExchangeToAdd) => {

    // Call the function we got back from useState() to update the state.
    setGiftExchangesState(
      [
        ...giftExchangesState   // Spread in existing gift exchanges.
        , newGiftExchangeToAdd  // Then add the new one.
      ]
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={
          <Stats 
            villagers = {activeVillagers}
            villagerNames = {activeVillagerList}
            giftExchanges = {giftExchangesState}
          />
        } />
        <Route path="play" element={
          <Play
            villagers = {activeVillagers}
            giftExchanges = {giftExchangesState}
            addNewGiftExchangeToState={addNewGiftExchangeToState}
          />
        } />
        <Route path="addvillager" element={
          <AddVillager/>
        } />
        <Route path="crying" element={
          <Crying/>
        } />
      </Routes>
    </div>
  );
};

export default App;
