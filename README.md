# GitHub Repo App

This is an example app for displaying the GitHub repositories for a given user.

## To run:
1. Generate a GitHub access token via the instruction [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
   1. This token should include the `repo` and `user` scopes
1. Set the `REACT_APP_GITHUB_TOKEN` environment variable in your shell
1. Start the app with the following command: `yarn && yarn start`

## Instructions:
Enter a GitHub username in the URL path to load the information for that user, e.g. `localhost:3000/michaelplazek` would load the
information for the user `michaelplazek`
