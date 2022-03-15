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

<br />
<br />

# The solution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Docker

### You can build the images for development with the commands above:

`docker build -t greple:dev`

And run it with:

`docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true greple:dev`

After it started, go to localhost:3000 to see the app.

For a production container, run:

`docker build -f Dockerfile.prod -t greple:prod .`

and

`docker run -it --rm -p 1337:80 greple:prod`

After it started, go to localhost:1337 to see the app.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
