import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select  from "@mui/material/Select";
import Button from "@mui/material/Button";

import React from "react";
import { useState } from "react";

export const Play = ({villagers}) => {
	
	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	villagers.sort();
	
	const [giftExchange, setGiftExchange] = React.useState('');

	const handleChange = e => {
		setGiftExchange(e.target.value)
	};

	const handleClick = e => {
		setGiftExchange(e.target.value)
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
						value={giftExchange}		
						label="Gift Exchange"
						onChange={handleChange}
						key={x}
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
			onClick={handleClick}
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