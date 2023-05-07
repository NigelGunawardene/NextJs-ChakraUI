'use client';

import { Box } from '@chakra-ui/react';
import { Props } from '@/shared/Props';

const MainContainerBox = ({ children }: Props) => {
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'space-between'}
				alignItems={'center'}
				padding={'6rem'}
				min-height={'100vh'}>
				{children}
			</Box>
		</>
	);
};

export default MainContainerBox;
