pnpm add -D prettier

git init

git add .

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/NigelGunawardene/NextJs-Portfolio.git

git push -u origin main

## For ChakraUI to work

pnpm add @chakra-ui/next-js

Create providers.tsx and paste code from docs

## Add storybook

npx sb init --builder webpack5

npm i -D @chakra-ui/storybook-addon

// Add the addon to your configuration in .storybook/main.js:

```js
module.exports = {
	addons: ['@chakra-ui/storybook-addon'],
	features: {
		emotionAlias: false,
	},
};
```

You can specify global parameters for the addon in .storybook/preview.js. These options are the same as the props to ChakraProvider (without children).

```js
// .storybook/preview.js

const theme = require('../path/to/your/theme');

export const parameters = {
	chakra: {
		theme,
	},
};
```
