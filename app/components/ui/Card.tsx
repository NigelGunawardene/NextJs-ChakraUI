'use client';
import * as chakra from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
const Card = () => {
	const cardBodyColor = useColorModeValue('red', 'blue');

	return (
		<>
			<chakra.Card>
				<chakra.CardBody>
					<chakra.Text color={cardBodyColor}>
						View a summary of all your customers over the last month.
					</chakra.Text>
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
