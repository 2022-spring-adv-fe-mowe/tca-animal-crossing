import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from "react-router-dom";

export const Stats = ({
	giftExchanges,
	mostRecentGiftExchanges, 
	updateVillagerActiveStatus
}) => {

	console.log(giftExchanges);

		/*******************************************************/
	/*******************************************************/
	/*******************************************************/
//attempts to count number of gifts by villager

	const filterGiftInteractions = (arr, query) => {
		return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
	};

	const numberOfGiftExchanges = giftExchanges.map(x => x.giftExchange).includes(filterGiftInteractions(giftExchanges.map(z => z.giftExchange), 'with'));

	console.log(numberOfGiftExchanges);


	/*******************************************************/

	const nav = useNavigate();

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	const handleClick = (giftExchange) => {
		updateVillagerActiveStatus({
				name: giftExchange.name,
				giftExchange: 'Villager left the island',
				date: date,
				active: false,
				picture: giftExchange.picture
			},
			nav ("/Stats")
		);
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
						{mostRecentGiftExchanges.map(y => 
						<TableRow 
							key={y.name}
						>
								<TableCell className={ y.picture !== true ? 'picture-needed-table' : '' }>{y.name}{ y.active !== true ? ' (inactive)' : ' '}</TableCell>
								<TableCell>{y.date}</TableCell>
								<TableCell>{y.giftExchange}</TableCell>
								<TableCell></TableCell>
								<TableCell>
									{y.active !== false ? 
										<RemoveCircleOutlineIcon 
											aria-label="inactivate villager"
											value={y}
											onClick={(e) => handleClick(y, e.target.value)}
										/> : "" } 
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