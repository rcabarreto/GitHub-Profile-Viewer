# Coding challenge

This page consists of a coding challenge for the Full Stack Developer role at Greple.

## Purpose

The aim of this test is to evaluate the following aspects:

- coding abilities
- technical experience
- solution design

## Challenge - Github user profile viewer

Write a simple web application that retrieves and displays the user repositories, gists and organizations in Github

### UX/UI

Include an input to enter the username, one area to display the repositories, gists and organizations of the user.

### Retrieving data

- To retrieve the user details, follow the steps from [here](https://docs.github.com/en/rest/reference/users#get-a-user)
- To retrieve the user gists, follow the steps from [here](https://docs.github.com/en/rest/reference/gists#list-gists-for-a-user)
- To retrieve the user organizations, follow the steps from [here](https://docs.github.com/en/rest/reference/orgs#list-organizations-for-a-user)

### Instructions

- Please use JavaScript or TypeScript, NodeJS, ExpressJS, and React for the challenge
- Upload your test results on a public code repository hosted on either Github or Gitlab
- Build docker image for your code, push it to a public registry
- Share your docker image with instruction on how to run it
- Share your github repository URL with us

### Optional features

- Use TypeScript
- Error handling
- Having a nice UI using a components library (Bootstrap, Material UI)
- Divide the application in different pages and use a router
- Nice to have cosmetic features are welcome
- Show common tools used for you daily development environment (linters, code formatter, git workflow, docker and so on)
- Unit tests and integration tests are of course welcome but not necessary
- Build and deploy your solution on either AWS, Heroku or Netlify are of course welcome but not necessary

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
