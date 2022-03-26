import { FormControl, InputLabel, MenuItem, Select, FormGroup, Checkbox, FormControlLabel, RadioGroup, FormLabel, Radio, Button, createTheme } from "@mui/material";
import { spacing, positions } from "@mui/system";
import RadioGroupContext from "@mui/material/RadioGroup/RadioGroupContext";
import { useSelect } from '@mui/base/SelectUnstyled';

import React from "react";


export const Play = ({villagers}) => {
	const current = new Date();
	const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
	
	return(
		<>
			
			<h1>Gifting</h1>
			<h2> {date} </h2>
			{villagers.map(x => 
				<FormControl>
					<FormLabel>{x}</FormLabel>
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
					</RadioGroup>
				</FormControl>				
			)}
		<Button
			variant="contained"
			color="success"
			size="large"
		>
			Submit
		</Button>
		</>
	);
};


{/* <FormGroup>
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
				</FormGroup> */}