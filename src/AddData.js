import { FormControl, InputLabel, MenuItem, Select, FormGroup, Checkbox, FormControlLabel, RadioGroup, FormLabel, Radio, Button } from "@mui/material";
import { spacing, positions } from "@mui/system";
import RadioGroupContext from "@mui/material/RadioGroup/RadioGroupContext";
import { useSelect } from '@mui/base/SelectUnstyled';

import React from "react";


export const AddData = () => {
	const current = new Date();
	const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

	return(
		<>

			<h1>Gifting</h1>
			<h2> {date} </h2>
			<FormControl>
				<FormLabel id="gift-type-group-label">Villager 1</FormLabel> 
				<RadioGroup
					row
					aria-labelledby="gift-type-group-label"
					defaultValue="none"
					name="radio-buttons-group"
				>
					<FormControlLabel value="none" control={<Radio />} label="None"/>
					<FormControlLabel value="GIR" control={<Radio />} label="Gift w/ Gift in Return"/>
					<FormControlLabel value="No-GIR" control={<Radio />} label="Gift w/ No Gift in Return"/>
					<FormControlLabel value="PIR" control={<Radio />} label="Gift w/ Picture in Return"/>
				</RadioGroup>
			</FormControl>
		<p></p>
		<FormGroup>
			<Select defaultValue={["none"]}>
				<MenuItem value={"none"}>None</MenuItem>
				<MenuItem value={"GIR"}>Gift–Gift in Return</MenuItem>
				<MenuItem value={"NIR"}>Gift-No Gift in Return</MenuItem>
				<MenuItem value={"PIR"}>Gift-Picture in Return</MenuItem>
			</Select>
		</FormGroup>
		

				<p></p>
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