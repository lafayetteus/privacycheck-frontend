# Privacy Check Frontend

This is the frontend for the headless Privacy Check site. It includes a Netlify function for Mailchimp subscribers.

## Requirements

- Node 8+
- NPM
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## Local Development

1. Install NPM dependencies

```
$ npm install
```

2. Run `netlify link` to link the project & ENV variables. _Note: You only need to do this once._
3. Start the Netlify dev process. This will log you into Netlify.

```
$ npm start
```

## Deployments

Continuious deployments are automatically happening based on two things:

1. Pushing code to `main`. Netlify is watching this branch and will deploy any code changes.
2. Webhooks coming from Sanity. Any time any update happens in Gatsby, Netlify will trigger a `main` branch build.

## Environment Variables

All environment variables are included in the Netlify admin panel as environment variables. Anything with the `GATSBY_` prefix will be included in the client side, so BE CAREFUL WITH THAT.

## Miscellaneous

This site is meant to be a "Splash Page" lander for Privacy Check while they are pitching to companies. This site is essentially made up of the main `Home Page` and dynamic rich-text pages.

Navigation — not counting the footer "Contact" link — is handled solely through Sanity in each section with the `showNav` boolean and `navTitle` string.
