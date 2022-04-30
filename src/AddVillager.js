import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import './App.css';

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
			<div className="addVillager">
				<h2>Add Villager</h2>

				<TextField
					sx={{
						bgcolor: 'white',
						mr: 2
					}}
					required
					id="required-text-field"
					label="Villager Name"
					value={newVillagerName}
					onChange={(e) => setNewVillagerName(e.target.value)}
				>
				</TextField>
				<Button
					sx={{
						mt: 1,
						bgcolor: 'teal'}}
					variant="contained"
					color="secondary"
					onClick={submitNewVillager}
				>
					Submit
				</Button>
			</div>
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving