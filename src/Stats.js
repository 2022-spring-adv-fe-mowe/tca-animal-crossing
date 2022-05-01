import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from "react-router-dom";

export const Stats = ({giftExchanges}) => {

	const nav = useNavigate();

	const deactivateVillager = () => {
		console.log("you hit the button");
	};

	console.log(giftExchanges);

	//Shape data for display using .reduce (copied and pasted from Tom's code)
	const mostRecentGiftExchanges = [
		
		// Group by name and only save the most recent gift exchange.
		...giftExchanges.reduce(
			(acc, x) => {
				const currentGiftExchangeForVillagerInMap = acc.get(x.name);

				acc.set(
					x.name
					, 
						currentGiftExchangeForVillagerInMap

						// If it already exists, update it only if a more
						// recent gift exchange
						? {
							name: x.name
							, date: x.date > currentGiftExchangeForVillagerInMap.date ? x.date : currentGiftExchangeForVillagerInMap.date
							, giftExchange: x.date > currentGiftExchangeForVillagerInMap.date ? x.giftExchange : currentGiftExchangeForVillagerInMap.giftExchange
							, picture: x.date > currentGiftExchangeForVillagerInMap.date ? x.picture : currentGiftExchangeForVillagerInMap.picture
							, active: x.date > currentGiftExchangeForVillagerInMap.date ? x.active : currentGiftExchangeForVillagerInMap.active
						}

						// If doesn't exist, add it.
						: {
							name: x.name
							, date: x.date
							, giftExchange: x.giftExchange
							, picture: x.picture
							, active: x.active
						}
				)

				return acc;
			}
			, new Map()
		)
	].map(x => x[1]); 
	// Spreading a Map into an array yields an array with two items, 
	//the object we want is the second item... Tricky Woo for sure ! ! !

	console.log("mostRecentGiftExchanges", mostRecentGiftExchanges);

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
								<TableCell id={ giftExchange.picture !== true ? 'picture-needed-table' : '' }>{giftExchange.name}{ giftExchange.active !== true ? ' (inactive)' : ' '}</TableCell>
								<TableCell>{giftExchange.date}</TableCell>
								<TableCell>{giftExchange.giftExchange}</TableCell>
								<TableCell></TableCell>
								<TableCell>
									<RemoveCircleOutlineIcon
										onClick={deactivateVillager}
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