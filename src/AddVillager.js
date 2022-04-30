import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export const AddVillager = () => {

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 

	const [newvillager, setNewVillager] = useState(villagers.map(x => ({
		name: x.villagerName,
		giftExchange: "Villager added to island",
		date: date,
		picture: false,
		active: true
	})));

	const handleChange = (villager, newVillager) => {
		setNewVillager(
			newVillager.map(x => ({
				...x, 

			}))
		)
	}
	
	const villager = {
		
	}
	
	return(
		<>
			<h2>Add Villager</h2>

			<TextField
				required
				id="outlined-required"
				label="Villager Name"
				variant="outlined"
				value={villagerName}
				onChange={(e) => handleChange(x, e.target.value)}
			>
			</TextField>
			<Button
				variant="contained"
				color="success"
				size="large"
				onClick={addNewVillager}
			>
				Submit
			</Button>
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving