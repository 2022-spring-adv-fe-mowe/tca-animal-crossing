import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import villagerPicture from './img/villagers.png';

import './App.css';

import { useState } from "react";
import { useNavigate } from "react-router";

export const AddVillager = (
		{
			addNewVillager
		}
	) => {

	const nav = useNavigate();

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 
	//const date = `${currentDate.getMonth()+1}/${1}/${currentDate.getFullYear()}`;

	const [newVillagerName, setNewVillagerName] = useState("");

	const submitNewVillager = () => {
		newVillagerName !== "" ?
			addNewVillager({
				name: newVillagerName,
				giftExchange: "Villager added to island",
				date: date, 
				picture: false,
				active: true,
				giftsGot: 0
			},
			//alert(newVillagerName + " has been added to your island. Welcome, " + newVillagerName + "!"),
			//nav ("/")
			)
		: alert('Please enter a name')
	};

	return(
		<>
			<div className="addVillager">
				<h1>Add Villager</h1>
				<img src={villagerPicture} className="picture"/><br />
				<TextField
					sx={{
						bgcolor: 'white',
						mr: 2,
						width: '70vw',
						borderColor: 'text.primary'
					}}
					required
					id="required-text-field"
					label="Villager Name"
					value={newVillagerName}
					onChange={(e) => setNewVillagerName(e.target.value)}
				/>
			<br />
				<Button
					size="large"
					onClick={submitNewVillager}
				>
					Submit
				</Button>
				<br />
				<Button
						size="large"
						onClick={() => nav('/')}
					> Home
					</Button>
				<br />		
			</div>
			
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving