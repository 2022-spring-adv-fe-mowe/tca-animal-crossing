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
  },
  {
    name: "Ione",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true, 
    active: true,
    },
  {
    name: "Rodney",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true, 
    active: true,
  },
  {
    name: "Baabara",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true, 
    active: true,
  },
  {
    name: "Stinky",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true, 
    active: true,
  },
  {
    name: "Walker",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: false, 
    active: true,
  },
  {
    name: "Marlo",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: false, 
    active: false
  },
  {
    name: "Marshal",
    date: "04/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true, 
    active: true,
  },
  {
    name: "Gruff",
    date: "01/01/2022",
    giftExchange: "Gift with gift in return",
    picture: true,
    active: false
  },
  {
    name: "Cole",
    date: "04/20/2022",
    giftExchange: "Gift with gift in return",
    picture: false,
    active: true,
  },
]
/////////////END HARDCODED DATA//////////////
//Determine active villagers

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
    console.log(villagers);
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

  const updateVillagerActiveStatus = () => {
    console.log("update villager active status function says hi")
  };

  	//Shape data for display using .reduce (copied and pasted from Tom's code)
	const mostRecentGiftExchanges = [
		
		// Group by name and only save the most recent gift exchange.
		...giftExchangesState.reduce(
			(acc, x) => {
				const currentGiftExchangeForVillagerInMap = acc.get(x.name);

				acc.set(
					x.name
					, 
						currentGiftExchangeForVillagerInMap

						// If it already exists, update it only if a more
						// recent gift exchange
						? {
							name: x.name
							, date: x.date > currentGiftExchangeForVillagerInMap.date ? x.date : currentGiftExchangeForVillagerInMap.date
							, giftExchange: x.date > currentGiftExchangeForVillagerInMap.date ? x.giftExchange : currentGiftExchangeForVillagerInMap.giftExchange
							, picture: x.date > currentGiftExchangeForVillagerInMap.date ? x.picture : currentGiftExchangeForVillagerInMap.picture
							, active: x.date > currentGiftExchangeForVillagerInMap.date ? x.active : currentGiftExchangeForVillagerInMap.active
						}

						// If doesn't exist, add it.
						: {
							name: x.name
							, date: x.date
							, giftExchange: x.giftExchange
							, picture: x.picture
							, active: x.active
						}
				)

				return acc;
			}
			, new Map()
		)
	].map(x => x[1]); 

	// Spreading a Map into an array yields an array with two items, 
	//the object we want is the second item... Tricky Woo for sure ! ! !

  //Determine active gift exchanges?

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={
          <Stats 
            mostRecentGiftExchanges = {mostRecentGiftExchanges}
            giftExchanges = {giftExchangesState}
            updateVillagerActiveStatus = {updateVillagerActiveStatus}
          />
        } />
        <Route path="play" element={
          <Play
            giftExchanges = {giftExchangesState}
            mostRecentGiftExchanges = {mostRecentGiftExchanges}
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
