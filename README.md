# coffee-time
Get your coffee ratios and other fun stuff for the ☕️  🤓

## Setup
This project uses Yarn [Workspaces](https://yarnpkg.com/features/workspaces). It consists 2 main packages (apps) for the client React app (packages/app), and the GraphQL server (server). By nature, each project has it's own settings and if you so choose, can work within the package itself, or use the root directory commands.

### Client / React App
The client app uses [Create React App](https://create-react-app.dev/). For first time users, you
will need to `cd` into the `app` directory and install the packages.abs

To install the packages run
```
yarn install
```

#### Development
To use this package for development, you can either `cd` into the `app` packages directory, and run
```
yarn start
```

For a better experience, you can stay in the root directory and just run:
```
yarn start:app
```
#### Testing
The client app uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for unit tests which extend Jest.

### Server / GraphQL
TBD...