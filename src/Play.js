import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select  from "@mui/material/Select";
import Button from "@mui/material/Button";

import React from "react";
import { useState } from "react";

export const Play = ({villagers, date, giftExchange}) => {
	
	//generate today's date
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	//sort villagers alphabetically
	villagers.sort();
	
	//sets the new gift exchange for user review
	const handleChange = e => {
		setNewGiftExchange(e.target.value)
	};

	const submitResults = (giftExchange) => {
		
		setGiftExchange([{
			date: date,
			villager: x,
			giftExchange: newGiftExchange
		}]);
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
						value={newGiftExchange}		
						label="Gift Exchange"
						onChange={handleChange}
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
			onClick={() => submitResults(x, newGiftExchange)}
		>
			Submit
		</Button>
		</>
	);
};


/* <FormGroup>
					<h3>{x}</h3>
					<FormControlLabel
						label="Gift w/ no gift in return"
						control={<Checkbox />} 
					/>
					<FormControlLabel
						label="Gift w/ gift in return"
						control={<Checkbox />} 
					/>
					<FormControlLabel
						label="Gift w/ picture in return"
						control={<Checkbox />} 
					/>
						<FormControlLabel
						label="Unable to gift villager"
						control={<Checkbox />} 
					/>
				</FormGroup> */

/* <FormLabel>{x}</FormLabel>
					<RadioGroup>
						<FormControlLabel 
							value="GIR"
							control={<Radio />}
							label="Gift with gift in return"
						/>
						<FormControlLabel 
							value="NIR"
							control={<Radio />}
							label="Gift with no gift in return"
						/>
						<FormControlLabel 
						value="PIR"
						control={<Radio />}
						label="Gift with villager photo in return"
						/>
						<FormControlLabel 
						value="na"
						control={<Radio />}
						label="Unable to gift villager"
						/>
					</RadioGroup> */