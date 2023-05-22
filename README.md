# Simple Auth ReactJS

ReactJS simple authentication with Laravel Sanctum.

This is a simple authentication implementation using ReactJS, designed to provide basic user authentication functionality for a React application. It allows users to register, login, and access protected routes within the application.

User registration: Users can create an account by providing their email address and password.

User login: Registered users can log in using their credentials.

Protected routes: Certain routes within the application are restricted and can only be accessed by authenticated users.

Persistent login: Once logged in, the user's authentication status is preserved even after refreshing the page.

## Installation

Before run this app, please make sure to run the backend first [Laravel 10 REST API Authentication Using Sanctum](https://github.com/ervaaaan/laravel-rest-api-authentication-sanctum) with docker.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To install dependencies, run this npm command in the project directory

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

[MIT](https://choosealicense.com/licenses/mit/)