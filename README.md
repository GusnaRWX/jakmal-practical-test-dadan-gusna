# JAKMAL DELIVERY & PAYMENT PRACTICAL TEST FOR JAKMAL.COM
This is project based on ViteJs ReactJs, Styled-Component, React Hook, React-Icons React-router-dom &  React-Hook-From

# FEATURES
- Through documentation: Written with same care as Vite js or React js

## TABLE OF CONTENT
-[Getting Started](#getting-started)
-[Available Script](#available-script)
-[Architecture](#architecture)
-[Flow](#flow)
-[Linting & Formatting](#linting-and-formating)
-[Editor Integration](#editor-integration)

## Getting Started
make sure you have the following installed
-Node (at least the latest LTS)
-ESlint (at least the latest)

```bash
# 1. clone the repository
git clone https://github.com/GusnaRWX/jakmall-practical-test-dadan-gusna.git

# 2. Enter your clone project
cd jakmall-practical-test-dadan-gusna

# 3. install depedencies. make sure npm installed: https://www.npmjs.com/get-npm
npm install

# 4. run on your local
# this command is a default to run development mode
# and will be listen http://localhost:5174 or http://localhost:5173 because using vite js
npm run dev
```
## Available Scripts
in the project directory, you can run

```bash
# 1. run in development mode
npm run dev

# 2. Build for production
npm run build

# 3. preview for this project
npm run preview
```
## Architecture

|-- src/ # this is current React JS directory
    |-- components/ # where the most of the components in app will live, including global base component and using HOC methodology
        |-- delivery/ # this is component for feature delivery at homepage include file styled
        |-- finish/ # this is component for Finishing Page when show the order id and final total payment and shipping in this project include file styled
        |-- payment/ # this is component for payment page include choosing shipment and payment andd inc;ude file styled
        |-- shared/ # all of the shared component used in this project like Base, Button, textfield, etc.
        |-- summary/ # this is component for showing total , cost, fee, shipment and payment when user choosing and this component always include in all page in this project
        |-- index.js # all of components or initialize all component
        |-- SharedStyled.js # is a file for styles file for all feature like finish, delivery, payment and using styled component
    |-- containers/ # where the most of the containers in app will live and place for save the businness logic with HOC methodology
        |-- index.js/ # all of the containers or initialize all containers
    |-- utils/
        |-- storage.js # all cation for get or post data to local storage
        |-- helpers.js # include all global function
    |-- App.jsx / # wrapper for route
    |-- main.jsx
|-- index.html / # for set font setup in here

## Pages
in react js a page is react component export from a `.js`, `.jsx`, `ts`, or `tsx` file in containers directory. each page associated with route based on this file name.

## Flow
in this project flow data covered by client side using local storage. for parsing props from page to another page using params in router or using useNavigate
## Linting & Formatting
-[Language](#languages)
-[Scripts](#scripts)
 -[Editor](#editor)
-[Configuration Eslint](#configuration-selint)

this project use Eslint to catch errors and avoid bikeshedding by enforcing a common code style.

### Languages
- **Javascript** is linted by ESlint

### Scripts
There are a few different contexts in which the linters run

### Editor
In supported editors, all files will be linted and formatted on-save.


### Configuration ESLint
This projects with opinionated defaults, but you can edit each tools configuration in the following config files:

- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- `.eslintrc.json`
- `.eslintignore`

## Editor integration
- [Visual Studio Code](#visual-studio-code)
    - [Configuration](#configuration-vscode)

### Visual Studio Code
This project is best developed in VS Code. With the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions) and setting in your VS Code, you get:

- Syntax highlighting for all files
- Intellisense for all files
- Lint-on-save for all files
- In-editor results on save for unit tests

Recommended for this project:
- EditorConfig
- ESLint
- HTML Snippets
- Javascript (ES6) code snippets
- ES7 React/Redux/GraphQL/React-Native snippets

### Configuration VSCode
To Configure extendsions in your VS Code enter command:

For Windows and Linux.
```
CRTL + X
```

For Mac.
```
COMMAND + X
```

To Configure Lint-on-save.
In your local VS Code Create User Setting or edit in Json file and will be automatically generated setting.json. And enter this code.

```json
{
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "typescript": "typescriptreact"
    },
    "typescript.updateImportsOnFileMove.enabled": "always",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "extensions.ignoreRecommendations": false,
    "eslint.validate": [
        "typscript",
        "javascript"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}




