'use client';

import { Box } from '@chakra-ui/react';
import { Props } from '@/shared/Props';

const MainContainerBox = ({ children }: Props) => {
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				padding={'4rem'}
				height={'100vh'}>
				{children}
			</Box>
		</>
	);
};

export default MainContainerBox;
