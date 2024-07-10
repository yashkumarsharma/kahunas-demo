## About this project

1. CI/CD is integrated. [Public Link](https://kahunas.netlify.app)
1. SonarCloud Code Analysis is added.
1. Three Micro frontends created - Kahunas-demo, Kahuna-workouts and Kahuna-clients

## Implemented features
1. Added internationalization in each project. Added a language switcher on Kahunas-demo, which will control the language on other micro frontends.
1. Implemented a shared redux store
1. Implemented Routing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

### Known issues

1. Redux state unable to sync back to container app. Spend a lot of time on this. I'll pick this up once other tasks are completed.
1. When user is on `/workouts/nutrition`, clicking on `/workouts` link does not work.
1. Add env file for production deployment
1. hot module reload stops working intermittently

### Pending Tasks
1. Add 'auth' micro frontend and add middleware for authentication + Logging

### Possible enhancements
1. Use a mature styling library