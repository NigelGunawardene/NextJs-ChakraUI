import type { Preview } from '@storybook/react';

// const theme = require('../path/to/your/theme')

const preview: Preview = {
	parameters: {
		chakra: {
			// theme,
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
