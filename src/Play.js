import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select  from "@mui/material/Select";
import Button from "@mui/material/Button";

import localforage from 'localforage';

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import React from 'react';

export const Play = ({villagers, giftExchange}) => {
	
	//generate today's date
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	//sort villagers alphabetically
	villagers.sort();

	//Use state to note gift exchange type on play screen

  //sets the new gift exchange for user review
	// const setNewGiftExchange = e => {
	// 	newGiftExchange = (e.target.value)
	// };
  // const [newGiftExchange, setNewGiftExchange] = React.useState();

  // //Use state to save results
  // const [giftExchange, setGiftExchange] = React.useState([])

  // const setGiftExchange = async (giftExchange) => {
    
  //   const newGiftExchanges = [
  //     ...giftExchange,
  //     ...villagers,
  //   ];

  //   setGiftExchange(newGiftExchanges);

  //   await localforage.setItem("giftExchanges", newGiftExchanges)
  // };
	// const submitResults = () => {
		
		
	// };

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
						value={giftExchange}		
						label="Gift Exchange"
						// onChange={setNewGiftExchange}
					>
						<MenuItem value="GIR">
							Gift with gift in return
						</MenuItem>
						<MenuItem value="NIR">
							Gift with no gift in return						
						</MenuItem>
						<MenuItem value="PIR">
							Gift with villager picture in return
						</MenuItem>
						<MenuItem value="na">
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
			// onClick={submitResults(newGiftExchange)}
		>
			Submit
		</Button>
		</>
	);
};