import { logo } from './logo.svg';
import './App.css';
import localforage from 'localforage';

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import React from 'react';

import { Play } from './Play';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';

const villagers = [
  {
    name: "Ione",
    picture: true, 
    active: true
  },
  {
    name: "Rodney",
    picture: true, 
    active: true
  },
  {
    name: "Baabara",
    picture: true, 
    active: true
  },
  {
    name: "Stinky",
    picture: true, 
    active: true
  },
  {
    name: "Shino",
    picture: false, 
    active: true
  },
  {
    name: "Walker",
    picture: false, 
    active: true
  },
  {
    name: "Marlo",
    picture: false, 
    active: false
  },
  {
    name: "Marshal",
    picture: true, 
    active: true
  },
  {
    name: "Octavian",
    picture: true, 
    active: true
  },
  {
    name: "Skye",
    picture: true, 
    active: true
  },
  {
    name: "Gruff",
    picture: true,
    active: false
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
  }
]

//Determine active villagers
const activeVillagers = villagers.filter(x => x.active === true);
const activeVillagerList = activeVillagers.map(x => x.name);

console.log(activeVillagerList);

// Create a list of archived villagers (for stats purposes)
const archivedVillagers = villagers.filter(x => x.active === false);
const archivedVillagerList = archivedVillagers.map(x => x.name);

console.log(archivedVillagerList);


//Determine which villagers have yet to provide their photo
const villagersWithoutPicture = villagers.filter(x => x.picture === false);
const villagersWithoutPictureList = villagersWithoutPicture.map(x=> x.name);

console.log(villagersWithoutPictureList);

const App = () => {

  // //Use state to note gift exchange type on play screen
  // const [newGiftExchange, setNewGiftExchange] = React.useState();

  // //sets the new gift exchange for user review
	// const setNewGiftExchange = e => {
	// 	newGiftExchange = (e.target.value)
	// };

  // //Use state to save results
  // const [giftExchange, setGiftExchange] = React.useState([])

  // const addGiftExchange = async (giftExchange) => {
    
  //   const newGiftExchanges = [
  //     ...giftExchange,
  //     ...villagers,
  //   ];

  //   setGiftExchange(newGiftExchanges);

  //   await localforage.setItem("giftExchanges", newGiftExchanges)
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={<Stats />} />
        <Route path="play" element={
          <Play
            villagers = {activeVillagerList}
            picturesNeeded = {villagersWithoutPictureList}

            // addGiftExchange={addGiftExchange}
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
