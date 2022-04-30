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

//Used to initialize the state
const hardcodedGiftExchanges = [
  {
    name: "Shino",
    date: "04/01/2022",
    giftExchange: 
      "Gift with gift in return",
    picture: false,
    active: true
  },
  {
    name: "Octavian",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true,
    active: true
  },
  { 
    name: "Skye",
    date: "04/04/2022",
    giftExchange: "Unable to gift villager",
    picture: true, 
    active: true
  }
]
/////////////END HARDCODED DATA//////////////
//Determine active villagers
const activeVillagers = villagers.filter(x => x.active === true);

const App = () => {

  
  //The lifted state. App will control it, and pass it and functions that change it to other components
  const [giftExchangesState, setGiftExchangesState] = useState(hardcodedGiftExchanges);

  const addNewVillager = (newVillagerToAdd) => {
    setGiftExchangesState(
      [
        ...giftExchangesState,
        newVillagerToAdd
      ],
    );
    
  };

  //Call function returned by useState() to update the state
  const addNewGiftExchangesToState = (newGiftExchangesToAdd) => {

    //Call the function we got back from useState() to update the state
    setGiftExchangesState(
      [
        ...giftExchangesState, //Spread in existing gift exchanges
        ...newGiftExchangesToAdd //then add the new ones
      ]
    );
    
  };

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={
          <Stats 
            giftExchanges = {giftExchangesState}
          />
        } />
        <Route path="play" element={
          <Play
            villagers = {activeVillagers}
            giftExchanges = {giftExchangesState}
            addNewGiftExchangesToState = {addNewGiftExchangesToState}
          />
        } />
        <Route path="addvillager" element={
          <AddVillager
            addNewVillager = {addNewVillager}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
