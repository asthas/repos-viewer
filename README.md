# repos-viewer

Small react/redux app to view github repos of an organisation.

## Setup

Use the following commands to setup the project

```shell
# Get the project from git
git clone https://github.com/asthas/repos-viewer.git
# Install dependencies
yarn # or npm install
```

## Running

Use yarn start to start the app on port 3000

```shell
yarn start
```

## Access live

View the app live deployed on [now](https://files-umlwfxdcui.now.sh/).

### Configuration

By default the project lists facebook's repos, you can update the default organisation by overriding the `selectedOrg` field in the [initalState](src/store/initialState.js) file to any other valid github organisation.

