# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test -- --coverage`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

Initialization phase:
When I first design the whole structure of the project, I adopt the create-react-app process for easier process.
I added parameters to let create-react-app include typescript as the default code format.

## Development notes:

### Development phase:

Then I did spend some time to get to know GraphQL. (I never used it before, honestly).
Finally after reading the documents I got the aws-amplify installed and initialized the graphql api call. Bingo!
Then I began to do the visual part.

- Firstly, break the design into components.
- Consider how to composite the components.
- Design what parameters should be passed among components.

### Styling phase:

Then I installed scss to the project and began to do the styling.
Modern react apps have '<meta name="viewport" content="width=device-width, initial-scale=1" />' added into the html template already.
This provides a certain level of responsive ability to the page. However the layout could be completely diferrent sometimes to give the users the best feeling.
So I chose the 'zeller-coding-challange-customer-lozenge' as the element that will be hidden when the page is less then 500px width.

### Performance tweaks:

Functional components are stateless. Thus they will rerender everytime their props/states change.
Use React.memo could provide a way to compare previous props and new props. This is similar to the shouldComponentUpdate hook in class components.
In react v18, the set state actions are batched even when they are in the async processes so we don't have to worry about it too much.

### Unit test phase:

I set up a unit test suite for each component.
I wrote some test cases and tried to cover each line of code.
I am sure I still missed some extreme cases(e.g. what if a particular prop is not passed, etc)
The coverage seems good although.

### Issues unsolved:

When the page is initialized, the graphql api will be called twice.
I tried to figure out why but failed. I am pretty sure it's not due to the props/state changes of ZCustomerPage.
I suspect that it is the way I used graphql that is causing this issue.
