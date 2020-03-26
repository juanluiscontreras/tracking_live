# Readme
This repository contains a custom react base project, is built upon webpack, redux, react-router-dom between other packages, the porpuse of this repo is to start every project of react from this.
## Recomendations
The projects has a hook to validate some JS and SCSS rules before create the commit, so if you have an error in any of this i won't let you commit your changes, to see this erros on the fly while you are coding follow this steps (only in VSCode for now):

1. Dowload the ESLint plugin for VSCode ([https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))

2. In VSCode go to settings an click the top right corner icon that says Open Json, and paste this config: 
```json
"eslint.validate": [
	"javascript",
	"javascriptreact",
	"typescript",
	"typescriptreact"
],
```
3. Dowload Stylelint plugin for VSCode ([https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint))

With that you will see every error on the editor, and will be easier to fix before each commit.
the idea behind this repo is that anybody can see it and improve it, so feel free to fork a make a pull request with a change that boots the functionality of this projects.