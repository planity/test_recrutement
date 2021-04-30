## Assignment

You are going to build a React component allowing the user to input an email address, and displaying suggestions for the main providers as the user types.

The list of providers is given below, sorted by popularity.

The component should consist in a text input and a list of suggestions, and should have the following behavior:

* if the input doesn't contain the character `"@"`, the 3 most popular providers should be displayed
* if the input contains the character `"@"`, the 3 best matches should be displayed
* you are free to define how the best matches are to be chosen
* if less than 3 suggestions seem acceptable, it's ok to display less than 3
* if no suggestion seems acceptable, the 3 most popular providers should be displayed
* if the input is a valid email address, no suggestion should be displayed
* on click on a suggestion, the given provider should be used in the input's email address
* it would be a nice bonus, if the input kept the focus on suggestion click

You can have a look at the desired behavior [here](https://www.youtube.com/watch?v=IUFwCEPCOoY).

## Dependencies

The only allowed dependencies are `react`, `react-dom`, `create-react-app` and an email validation library.
A quick and easy way to get started is https://codesandbox.io/

## Browser support

Your code should run in major modern browsers.

## Evaluation

Our evaluation criteria are:

* the correctness of the solution
* the readability of the code (code structure, variables naming, comments,…)
