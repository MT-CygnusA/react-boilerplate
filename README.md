# React Boilerplate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3626ca47a4b0485ab834e631102c9aa0)](https://app.codacy.com/gh/MT-CygnusA/react-boilerplate?utm_source=github.com&utm_medium=referral&utm_content=MT-CygnusA/react-boilerplate&utm_campaign=Badge_Grade_Settings)

#### Demo

----

#### Technical details

SPA with React/Redux/Thunk
Custom webpack setup. The Prettier is used as code formatter.
UI is based on Semantic Library.

- [React](https://github.com/facebook/react),
- [TypeScript](https://github.com/microsoft/TypeScript),
- [Semantic UI](https://react.semantic-ui.com/),
- [Webpack](https://webpack.js.org/),
- [Redux](https://react-redux.js.org/),
- [Prettier](https://prettier.io/),
- [Cypress](https://www.cypress.io).


#### Current unit test coverage

| % Stmts | % Branch | % Funcs | % Lines |

|   ----- |    ----  |   ----- |   ----- |

#### Test types

- e2e tests - cypress
- Standard unit test - src/utils/helpers.test.ts
- Enzyme snapshot  

#### CLI Commands

``` bash
# First install dependencies:
npm install

# To run mock server:
npm start-server

# To run in hot module reloading mode:
npm start-front

# To create a production build:
npm run build-prod

# To create a development build:
npm run build-dev

## Testing

# run tests with cypress in browser mode
npm run cypress

# run tests with cypress in console mode
npm run test:e2e

# run unit tests
npm run test

# open a code coverage report
npm run open:coverage
```
