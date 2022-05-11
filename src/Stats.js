import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from "react-router-dom";



export const Stats = ({
	giftExchanges,
	mostRecentGiftExchanges, 
	updateVillagerActiveStatus
}) => {

	const nav = useNavigate();

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

	
	
	const exchangesWithGiftsGot = giftExchanges.filter(x => 
		x.giftsGot === 1); 
	
	console.log("exchangesWithGiftsGot: ", exchangesWithGiftsGot);
	
	const giftsGotInstances = exchangesWithGiftsGot.map(y => y.name);

	console.log(giftsGotInstances)

	const totalNumberOfGifts = giftsGotInstances.reduce((accumulator, value) => {
		return {...accumulator, [value]: (accumulator[value] || 0) + 1};
	}, []);

	console.log(totalNumberOfGifts);

	const groupedByPlayer = (exchangesWithGiftsGot) => {
    exchangesWithGiftsGot.reduce(
        (acc, x) => {

					///Here's where I get mixed up...

					
            return acc;
        }
        , new Map<string, acc>
    )
	};
 

	


	
	

	/************************************************* */

	const handleClick = (villagerEvent) => {
		updateVillagerActiveStatus({
				name: villagerEvent.name,
				giftExchange: 'Villager left the island',
				date: date,
				active: false,
				picture: villagerEvent.picture,
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
							<TableCell>Total Gifts Received</TableCell>
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
								<TableCell>{}</TableCell>
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
			)
		</div>
		</>
	);
};