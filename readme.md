# TypeScript Full Stack Application

Built with :sparkling_heart: by [Drew Minns](https://twitter.com/drewisthe) at [Playground Inc](https://twitter.com/playgroundinc)

This is an example application of how to use [TypeScript](https://www.typescriptlang.org/) with Express and React.

Feel free to use this for your own purposes, or to contribute new features or bugfixes.

## Background

There aren't a lot of resources right now around using TypeScript in Express and React within the same application. A lot of resources cover one or the other, but never as one full app. This was built as an exploration on to how to create a single application for production and testing using TypeScript.

There will be a step by step tutorial coming soon!

## Getting Started

- Install some packages `npm i`
- Create a `.env.development` and `.env.production` file on the root and populate with the following details in both: `PORT=5000`. _You can change this value if you'd like, but it will be the port that the server will run on in production and dev_
- Run `npm run dev` to start the React app in the Webpack Dev Server and the Node Application in development mode.
  - The Server api endpoints will be available at `localhost:5000/api`.
  - The React application will be running at `localhost:3000` by default. You can make requests to the endpoint through the app by simply using `/api` as the base url. Webpack Dev Server proxies all requests to the server by default.

### Tests

To be written

## Libraries used

- React
- Express
- OvernightJS
- Prettier
- Axios
- Webpack
- Jest
- React-testing-library
- Cypress

### To do

- Redux integration
- Styling ¯\_(ツ)_/¯ (maybe SCSS, styled-components, who knows?)
- JWT Authentication on Server
- CircleCI Integration
- Docker
- MongoDB Setup
