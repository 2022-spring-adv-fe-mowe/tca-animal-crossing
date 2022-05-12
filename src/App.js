import './App.css';

import localforage from 'localforage';

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import React from 'react';

import { Play } from './Play';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';

const App = () => {
  
  //The lifted state. App will control it, and pass it and functions that change it to other components
  const [villagerEvents, setVillagerEvents] = useState([]);

  const loadVillagerEvents = async () => {
    setVillagerEvents(await localforage.getItem("villagerEvent") ?? [] );
  };

  useEffect(
    () => {
      loadVillagerEvents();
    }
    , []
  );
  //This function adds new villagers and updates active status
  const addNewEvent = async (villagerEvent) => {
    
    const newEventToAdd =
      [
        ...villagerEvents,
        villagerEvent
      ];

      setVillagerEvents(newEventToAdd);

      await localforage.setItem("villagerEvent", newEventToAdd);
  };

  //Call function returned by useState() to update the state
  const addNewGiftExchanges = async (newGiftExchanges) => {

    const newGiftExchangesToAdd =
      [
        ...villagerEvents, //Spread in existing gift exchanges
        ...newGiftExchanges //then add the new ones
      ];

    //Call the function we got back from useState() to update the state
    setVillagerEvents(newGiftExchangesToAdd);

    await localforage.setItem("villagerEvent", newGiftExchangesToAdd);
  }; 

  	//Shape data for display using .reduce (copied and pasted from Tom's code)
	const mostRecentGiftExchanges = [
		
		// Group by name and only save the most recent gift exchange.
		...villagerEvents.reduce(
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

  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={
          <Stats 
            mostRecentGiftExchanges = {mostRecentGiftExchanges}
            giftExchanges = {villagerEvents}
            updateVillagerActiveStatus = {addNewEvent}
          />
        } />
        <Route path="play" element={
          <Play
            giftExchanges = {villagerEvents}
            mostRecentGiftExchanges = {mostRecentGiftExchanges}
            addNewGiftExchanges = {addNewGiftExchanges}
          />
        } />
        <Route path="addvillager" element={
          <AddVillager
            addNewVillager = {addNewEvent}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
