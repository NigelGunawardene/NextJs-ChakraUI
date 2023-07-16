// const fonts = { mono: `'Menlo', monospace` };

// const breakpoints = {
// 	sm: '40em',
// 	md: '52em',
// 	lg: '64em',
// 	xl: '80em',
// };

// const theme = extendTheme({
// 	initialColorMode: 'dark', // 'dark' | 'light' | 'system
// 	useSystemColorMode: true,
// 	semanticTokens: {
// 		colors: {
// 			text: {
// 				default: '#16161D',
// 				_dark: '#ade3b8',
// 			},
// 			heroGradientStart: {
// 				default: '#7928CA',
// 				_dark: '#e3a7f9',
// 			},
// 			heroGradientEnd: {
// 				default: '#FF0080',
// 				_dark: '#fbec8f',
// 			},
// 		},
// 		radii: {
// 			button: '12px',
// 		},
// 	},
// 	colors: {
// 		black: '#16161D',
// 	},
// 	fonts,
// 	breakpoints,
// });

// export default theme;
// theme.ts

import { extendTheme, withDefaultColorScheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const myColorScheme = 'cyan';

const config: ThemeConfig = {
	initialColorMode: 'light', // 'dark' | 'light' | 'system'
	useSystemColorMode: false,
};

const styles = {
	global: (props: any) => ({
		body: {
			bg: mode('black', 'blue')(props), // doesnt work
		},
		// p: {
		// 	color: 'red',
		// },
		// 'html, body': {
		// 	fontSize: 'sm',
		// 	color: props.colorMode === 'dark' ? 'teal.300' : 'red.500',
		// 	lineHeight: 'tall',
		// },
		// 'a': {
		// 	color: props.colorMode === 'dark' ? 'teal.300' : 'red.500',
		// },
	}),
};

const components: any = {
	Button: {
		baseStyle: {
			fontSize: 'sm', // doesnt work
		},
	},
};

// const components: any = {
// 	Button: {
// 		defaultProps: {
// 			colorScheme: myColorScheme,
// 		},
// 	},
// 	Switch: {
// 		defaultProps: {
// 			colorScheme: myColorScheme,
// 		},
// 	},
// };

// const theme = extendTheme({ config, styles, components }); //, components

const theme = extendTheme(withDefaultColorScheme({ colorScheme: myColorScheme }), {
	config,
	styles,
	components,
});

export default theme;

// const theme = extendTheme({ config, styles });

// export default theme;

// const customTheme = extendTheme(
// 	withDefaultColorScheme({
// 	  colorScheme: 'red',
// 	  components: ['Button', 'Badge'],
// 	}),
// 	withDefaultColorScheme({
// 	  colorScheme: 'blue',
// 	  components: ['Alert', 'Table'],
// 	}),
//   )

// Button
// IconButton
// Badge
// Checkbox
// Radio
// Switch
// Slider
// Progress
// Spinner
// Tag
// Tabs
