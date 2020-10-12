# React Boilerplate

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6ea423b05d544e3e8182d3507e2b961f)](https://www.codacy.com/gh/MT-CygnusA/react-boilerplate/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MT-CygnusA/react-boilerplate&amp;utm_campaign=Badge_Grade)

## Server API

Base url: http://localhost:8000

LOGIN: POST /auth/login

REVIEW: GET /reviews

### Technical details

SPA with React/Redux/Thunk
Custom webpack setup. The Prettier is used as code formatter.
UI is based on Semantic Library.

  -  [React](https://github.com/facebook/react),
  -  [TypeScript](https://github.com/microsoft/TypeScript),
  -  [Semantic UI](https://react.semantic-ui.com/),
  -  [Webpack](https://webpack.js.org/),
  -  [Redux](https://react-redux.js.org/),
  -  [Prettier](https://prettier.io/),
  -  [Cypress](https://www.cypress.io).

### Current unit test coverage

| % Stmts | % Branch | % Funcs | % Lines |

| ----- | ---- | ----- | ----- |

### Test types

  -  e2e tests - cypress
  -  Standard unit test - src/utils/helpers.test.ts
  -  Enzyme snapshot

### CLI Commands

```bash
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
