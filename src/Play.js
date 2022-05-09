import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import './App.css';

import { useNavigate } from 'react-router-dom';

import { useState, useRef } from 'react';
import React from 'react';

export const Play = ({
	addNewGiftExchanges, 
	giftExchanges,
	mostRecentGiftExchanges
}) => {

	const nav = useNavigate();
	const select = useRef(null);

	//Generate today's date
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	//
	//This is 'local' state to store selected options for each villager
	//It is not the gift exchange state. That state has been 'lifted'
	//into the App.js
	//
  const [villagersGiftExchangeSelections, setVillagersGiftExchangeSelections] = useState(giftExchanges.map(x => ({
		name: x.name,
		giftExchange: '',
		picture: x.picture,
		active: x.active,
		giftsGot: x.giftsGot
	})));
	
	const handleChange = (villager, newGiftExchange) => {
		setVillagersGiftExchangeSelections(
			villagersGiftExchangeSelections.map(x => ({
				...x, 
				giftExchange: x.name === villager.name ? newGiftExchange : x.giftExchange,
			}))
		);
	};

	//
	// Here is where the 'lifted' state is updated by 
	// calling the function that App.js passed into Play.js
	//
  const submitResults = () => {
		// 
		// Get the gift exchange that the user has made
		//
		// Note: blanks assume the user did not interact with that villager
		//
		const giftExchangeSelectionsMade = villagersGiftExchangeSelections.filter(x => x.giftExchange !== "");

		console.log("giftExchangeSelectionsMade", giftExchangeSelectionsMade);

		//Add each selection made to the lifted state.
		addNewGiftExchanges(giftExchangeSelectionsMade.map(x => (
		
			{
				...x, //A JS object with name and giftExchange properties
				date: date,  //and add the date
				picture: x.giftExchange === "Gift with villager picture in return" ? true : x.picture,
				active: x.active,
				giftsGot: x.giftExchange !== "Unable to gift villager" ? 1 : 0
			}
		))); 

		nav('/Stats');
	};

	//remove inactive villagers for Play functionality
	const activeGiftExchanges = mostRecentGiftExchanges.filter(x => x.active === true);

	return(
		<>
			<div className="play">
				<h1>Gift Exchange</h1>
				<h2> {date} </h2>
				<p><span id="pink">Pink border</span> indicates picture has not yet been recieved from villager</p>

				{activeGiftExchanges.map(x =>  
					<FormControl 
						sx={{ 
							m: 1, 
							minWidth: 250 
						}}
						key={x.name}
					>
						<InputLabel>{x.name}</InputLabel>
						<Select
							labelId="gift-exchange-label"
							inputRef={select}
							className={x.picture !== true ? "picture-needed" : "gift-exchange"} 
							value={villagersGiftExchangeSelections.filter(y => y.name === x).giftExchange}	
							label="Gift Exchange"
							onChange={(e) => handleChange(x, e.target.value)}
						>
							<MenuItem value={"Gift with gift in return"}>
								Gift with gift in return
							</MenuItem>
							<MenuItem value={"Gift with no gift in return"}>
								Gift with no gift in return						
							</MenuItem>
							<MenuItem value={"Gift with villager picture in return"}>
								Gift with villager picture in return
							</MenuItem>
							<MenuItem value={"Unable to gift villager"}>
								Unable to gift villager
							</MenuItem>
						</Select>

					</FormControl>				
				)}
				<br />
				<Button
					className="play-screen-buttons"
					onClick={submitResults}			
				>
					Submit
				</Button>
				<Button
						className="play-screen-buttons"
						onClick={() => nav('/')}
					> Go Back 
					</Button>
			</div>
		</>
	);
};