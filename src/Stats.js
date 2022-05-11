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

	// No need to make this a lambda func, rather we'll just
	// reduce into a const named groupedByPlayer.
	const groupedByPlayer = giftExchanges.reduce(
        (acc, x) => {
			
			// The accumulator is going to be villager name
			// mapped to giftsgot count. So we will always
			// add the current villager to the Map() object,
			// and change what it is mapped too.
			acc.set(
				// The key will always be the villager name
				x.name 
				
				// And now the value...
				, acc.get(x.name)

					// If it is already in the map, add 1 to the count if it is
					// another giftsgot, or just add it with the same value, kind of gross here,
					// but should work...
					? x.giftsGot === 1 ? acc.get(x.name) + 1 : acc.get(x.name)

					// Otherwise, it's the first villager, so initialize to zero or
					// 1 if giftsgot
					: x.giftsGot === 1 ? 1 : 0
			);

            return acc;
        }

		// JS, not TS, so can't have types specified in angle brackets. Rather
		// have to "know/remember" what's in the Map.
        , new Map()
    );

	// Let's check if we got it right... But it's a map,
	// so we'll spread it into an array of arrays...
	console.log([...groupedByPlayer]);

	// We can also map the array of arrays to an array of
	// objects that will be easy to output in JSX...
	const villagersWithGiftCount = [...groupedByPlayer].map(x => ({
		name: x[0] 
		, giftCount: x[1]
	}));

	console.log(villagersWithGiftCount);


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