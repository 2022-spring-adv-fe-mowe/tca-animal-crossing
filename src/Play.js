import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses }  from "@mui/material/Select";
import Button from "@mui/material/Button";

import './App.css';

import { useNavigate } from 'react-router-dom';

import { useState, useRef } from 'react';
import React from 'react';

export const Play = ({
	villagers,
	// villagerNames, 	// You were never passing these into the Play component.
	// giftExchanges,		// Currently not using in the Play component
	addNewGiftExchangeToState,
}) => {

	const nav = useNavigate();
	const select = React.useRef(null);

	//Generate today's date
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	//Sort villagers alphabetically
	//villagers.sort();
	//villagerNames.sort();

	//
	// This is 'local' state, just to store the selected options for
	// each villager. It isn't the gift exchange state. That has been
	// 'lifted' into the App.js.
	//
  	const [villagersGiftExchangeSelections, setVillagersGiftExchangeSelections] = useState(villagers.map(x => ({
		name: x,
		giftExchange: '',
	})));
	
	const handleChange = (villager, newGiftExchange) => {
		setVillagersGiftExchangeSelections(
			villagersGiftExchangeSelections.map(x => ({
				...x, 
				giftExchange: x.name === villager ? newGiftExchange : x.giftExchange
			}))
		);
	};

	//After "Submit" button is entered, update villager data with new gift exchange interaction
	//
	// Here is where we want to update the 'lifted' state by calling
	// the function that App passed into Play...
	//
  	const submitResults = () => {

		//
		// Get the gift exchange selections that the user has made.
		//
		// Note, blanks assume the user did not interact with that 
		// villager.
		//
		const giftExchangeSelectionsMade = villagersGiftExchangeSelections.filter(x => x.giftExchange !== "");
		
		// Get the timestamp once and use it for each villager's gift exchange.
		const timestampWhenUserSubmitted = new Date().toISOString();

		// Add each selection made to the the lifted state.
		giftExchangeSelectionsMade.forEach(x => addNewGiftExchangeToState({
			x									// A JS object with name and giftExchange properties
			, date: timestampWhenUserSubmitted	// And add the timestamp of when it happened
		}));
	};


	//object destructuring? const {villager} <InputLabel>{x.name} etc etc? See whiteboard from cloud class
	return(
		<>
			<div className="play">
			<h1>Gift Exchange</h1>
			<h2> {date} </h2>

			{villagers.map(x => 
				<FormControl 
					sx={{ m: 1, minWidth: 340 }}
				>
					<InputLabel>{x.name}</InputLabel>
					<Select
						labelId="gift-exchange-label"
						inputRef={select}
						id="gift-exchange"
						value={villagersGiftExchangeSelections.filter(y => y.name === x).giftExchange}		
						label="Gift Exchange"
						onChange={(e) => handleChange(x, e.target.value)}
					>
						<MenuItem value={"GIR"}>
							Gift with gift in return
						</MenuItem>
						<MenuItem value={"NIR"}>
							Gift with no gift in return						
						</MenuItem>
						<MenuItem value={"PIR"}>
							Gift with villager picture in return
						</MenuItem>
						<MenuItem value={"na"}>
							Unable to gift villager
						</MenuItem>
					</Select>
				</FormControl>				
			)}
			<br />
			<Button
				className="submitButton"
				variant="contained"
				color="success"
				size="large"
				onClick={submitResults}			
			>
				Submit
			</Button>
			<Button
				variant="contained"
				color="success"
				size="large"
				onClick={() => nav('/stats')}
			>
				Stats
			</Button>
			<Button
				className="frustrationButton"
				variant="contained"
				color="secondary"
				size="large"
				onClick={() => nav('/crying')}
			> Frustration Button 
			</Button>
			<Button
				variant="contained"
				size="large"
				onClick={() => nav('/')}
			> Home 
			</Button>
		</div>
		</>
	);
};