'use client';
import * as chakra from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
const Card = () => {
	return (
		<>
			<chakra.Card>
				<chakra.CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</chakra.CardBody>
			</chakra.Card>
		</>
	);
};

export default Card;

// export default () => {
// 	return (
// 		<>
// 			<Card>
// 				<CardBody>
// 					<Text>View a summary of all your customers over the last month.</Text>
// 				</CardBody>
// 			</Card>
// 		</>
// 	);
// };
