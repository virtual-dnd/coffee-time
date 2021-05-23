# coffee-time

Get your coffee ratios and other fun stuff for the :coffee: :nerd_face:

## Setup

This project uses Yarn [Workspaces](https://yarnpkg.com/features/workspaces). It consists 2 main packages (apps) for the client React app (packages/app), and the GraphQL server (server). By nature, each project has it's own settings and if you so choose, can work within the package itself, or use the root directory commands.

### Client / React App

The client app uses [Create React App](https://create-react-app.dev/). For first time users, you
will just need to install the packages via Yarn.

To install the packages run

```
yarn install
```

#### Development

To use this package for development, you can either `cd` into the `app` packages directory and run

```
yarn start
```

For a better experience, you can stay in the root directory and run:

```
yarn start:app
```

#### Testing

The client app uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for unit tests which extend Jest.

To run the test suite for the client app, you can either `cd` into the `app` packages directory and run

```
yarn test
```

For a better experience, you can stay in the root directory and run:

```
yarn test:app
```

### Server / GraphQL

TBD...

### Commit Messages

This project uses [commitlint](https://commitlint.js.org/#/) to ensure our commit messages are consistent. We use the [@angular-config](https://github.com/conventional-changelog/commitlint#readme) since their team originated and influenced the movement.
