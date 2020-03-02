# Display Page 🛋

Consumes products from JSON and renders in a list with expandable details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Web Browser with CORS disabled (see Installing below)
* Internet Access

## Built With

* [React](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app) - bootstraps webpack and Jest for React
* [Jest](https://jestjs.io/) - Testing Framework
* [React Testing Library](https://jestjs.io/) - Testing Utility Library
* [Jest-DOM](https://github.com/testing-library/jest-dom) - Custom DOM matchers for Jest.
* [Material-UI](https://material-ui.com/) - React Component Library
* [React Awesome Slider](https://github.com/rcaferati/react-awesome-slider) - Slide Carousel Component
 
### Installing

To get this development environment running locally, open your terminal and run:
$`` git clone https://github.com/sailor27/display-page.git``

$`` cd display page``

$`` npm i`` 

You now have access to the project locally.

**Note** : This App fetches data from the West Elm domain, which lacks an "Access-Control-Allow-Origin" header. This is causing an issue where the request is blocked by CORS policy in Google Chrome.

You can bypass the CORS policy by running Google Chrome with security disabled. To do this, open the terminal and run:

 $ `` open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
``

To view the project in the browser, run:
$`` npm start`` 
and open localhost:3000 in your security-disabled Chrome window.

## Running the tests

This project includes unit tests written using Jest and React Testing Library. To run tests in watch mode, open the terminal and run:

$``npm test``

Your terminal will output a coverage report for tested files, and give you information about what tests pass. 

Please ensure that all tests pass and the coverage threshold is met before pushing changes to Master.


### Style and linting

This project has code style rules enforced by a .prettierrc. You can install the VS Code extension for automatic prettier formatting [here](https://github.com/prettier/prettier-vscode).

This project uses es-lint to enforce rules for code conventions. In the terminal, run:

$ ``npm lint``  - to see linting errors

and

$ ``npm lint:fix``  - to fix them automatically

### Where's the CSS?

This project uses Google's [Material-UI](https://material-ui.com/) component library and custom CSS-in-JS. Here are some advantages to this approach:

* Module-scoped CSS following Atomic design principles
* Access to prebuilt interactive UI components
* Responsive css and accessibility features built-in
* Ability to provide custom theming to the entire app
* Ability to dynamically style components based on props and theme

## Deploying

This app is deployed to gh-pages and can be viewed on the web at: ["http://sailor27.github.io/display-page"]("http://sailor27.github.io/display-page");

To update the deployed branch, merge changes into master locally, and then run ``npm run deploy`` to update the deployed branch.

## Authors

* **Sailor Winkelman** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
