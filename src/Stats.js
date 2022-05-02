import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from "react-router-dom";

export const Stats = ({
	mostRecentGiftExchanges, 
	updateVillagerActiveStatus
}) => {

	const nav = useNavigate();

	const deactivateVillager = (villagerToDeactivate) => {
		villagerToDeactivate.active = false;
		console.log(villagerToDeactivate);
	};

	return(
		<>
		<div className="stats">
			<h1>Stats</h1>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Villager Name</TableCell>
							<TableCell>Last Gift Exchange Date</TableCell>
							<TableCell>Last Gift Exchange Result</TableCell>
							<TableCell>Total Gifts Given</TableCell>
							<TableCell>Deactivate Villager</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{mostRecentGiftExchanges.map(giftExchange => 
						<TableRow 
							key={giftExchange.name}
						>
								<TableCell className={ giftExchange.picture !== true ? 'picture-needed-table' : '' }>{giftExchange.name}{ giftExchange.active !== true ? ' (inactive)' : ' '}</TableCell>
								<TableCell>{giftExchange.date}</TableCell>
								<TableCell>{giftExchange.giftExchange}</TableCell>
								<TableCell></TableCell>
								<TableCell>
									<RemoveCircleOutlineIcon
										onClick={() => deactivateVillager(giftExchange)}
									/>
								</TableCell>
						</TableRow>
						)};
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				id="statsHome"
				variant="contained"
				size="large"
				onClick={() => nav('/')}
			> Home </Button>
		</div>
		</>
	);
};