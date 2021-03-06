# Debate

## Program Description
### Input
The input to this program is data which matches:
```
[
    {
        "id": "25e5131a-63de-4e3c-878a-95e8f54b545f",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices": [
            {
                "id": "cad86e39-550a-4eb9-bd2d-0f3528f9f205",
                "text": "True",
                "timesChosen": 8
            },
            {
                "id": "2e4ca602-780a-4276-829a-5dd5b4e56970",
                "text": "False",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            }
        ]
    }
]
```
### Output
The output of this program is a single page web application which will do the following:
- Present the first proposition, along with its choices.
- Allow the user to select a choice.
- Display the results chosen by other users (including the response chosen).
- Send the choice back to the server.
- If the choice has `endWith`, then display that and end the program.
- Otherwise, present the next proposition in a manner that respects continuity with the previous proposition.

## How To
- **Install dependencies**: `npm install`
- **Run tests:**: `npm run test`
- **Run tests in CI:**: `CI=true && npm run test`
- **Run in develoment mode:**: `npm run start`

## Readme generated by `create-react-app`:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
