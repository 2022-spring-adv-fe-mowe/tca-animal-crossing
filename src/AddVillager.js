import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export const AddVillager = ({addNewVillager}) => {

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 

	const [newVillagerName, setNewVillagerName] = useState("");

	const submitNewVillager = () => {
		addNewVillager({
			name: newVillagerName,
			giftExchange: "Villager added to island",
			date: date,
			picture: false,
			active: true})
			
			};
	
	
	return(
		<>
			<h2>Add Villager</h2>

			<TextField
				required
				id="outlined-required"
				label="Villager Name"
				variant="outlined"
				value={newVillagerName}
				onChange={(e) => setNewVillagerName(e.target.value)}
			>
			</TextField>
			<Button
				variant="contained"
				color="success"
				size="large"
				onClick={submitNewVillager}
			>
				Submit
			</Button>
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving