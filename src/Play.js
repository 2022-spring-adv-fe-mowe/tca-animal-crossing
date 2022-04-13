import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select  from "@mui/material/Select";
import Button from "@mui/material/Button";

import localforage from 'localforage';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import React from 'react';

export const Play = ({villagers}) => {

	//Generate today's date
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	console.log(currentDate);

	//Sort villagers alphabetically
	villagers.sort();

	//Use state to note gift exchange type on play screen 
  const [villagersGiftExchange, setVillagersGiftExchange] = useState(villagers.map(x => ({
		name: x,
		giftExchange: '',
		date: date
	})));
	
	const handleChange = (villager, newGiftExchange) => {
		setVillagersGiftExchange(
			villagersGiftExchange.map(x => ({
				...x, 
				giftExchange: x.name === villager ? newGiftExchange : x.giftExchange
			}))
		);
	};

	//After "Submit" button is entered, update villager data with new gift exchange interaction
  const handleClick = () => {
		const newResults = villagersGiftExchange.filter(x => x.giftExchange !== "");

		//Send user to Stats page to view villager stats

		console.log (newResults);
	};

	
	return(
		<>
			<h1>Gift Exchange</h1>
			<h2> {date} </h2>

			{villagers.map(x => 
				<FormControl 
					sx={{ m: 1, minWidth: 340 }}
				>
					<InputLabel>{x}</InputLabel>
					<Select
						labelId="gift-exchange-label"
						id="gift-exchange"
						value={villagersGiftExchange.filter(y => y.name === x).giftExchange}		
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
			variant="contained"
			color="success"
			size="large"
			onClick={handleClick}
		>
			Submit
		</Button>
		</>
	);
};