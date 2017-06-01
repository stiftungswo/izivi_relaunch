# iZivi

An E-Recruitement tool to plan swiss civil service missions

## General Purpose

The project's purpose is enable planning of zivis, when they start their employment and when they finish.

## Install required tools and checkout the project

Download and install a Git client:

    e.g. https://www.sourcetreeapp.com/
    Check out the current version

Download and install Meteor (https://install.meteor.com).

    curl https://install.meteor.com/ | sh

Checkout this Repository's branch **develop** with Git:

    git clone https://github.com/stiftungswo/izivi_relaunch.git
    git checkout develop

You should now see the following folder structure inside the locally checked out repository:

- **_deprecated_symfony_backend**
  - WIP backend for a new izivi based on symfony, deprecated in favor of nodejs/graphql
- **backend**
  - Platform: Meteor (NodeJs) based backend
  - GraphQL API
  - MongoDB
- **webui**
  - Platform: Nextjs based progressive spa
  - React as frontend framework
  - Statically exportable

## Install packages and start developing

Install dependencies and start backend:

    cd backend
    meteor npm run install
    meteor npm run dev

Install dependencies and start frontend:

    cd webui
    meteor npm run install
    meteor npm run dev

If you want it more simple like *wtf, just start the things* then run ``meteor npm start`` in the git repository root.

*You don't have to prefix the npm commands with meteor if you have a proper version of NodeJS already installed on your system but you need to install meteor for the backend anyway that's why we prefix it always in this guide. The command meteor node/npm always use the prepacked nodejs of meteor*

When both apps are running you can access the app with your browser.

Web App:

    open http://localhost:3000

GraphQL API Sandbox / Documentation explorer:

    open http://localhost:3010/graphiql

## Contributing

### Style & Linting

This codebase adheres to the [Airbnb Styleguide](https://github.com/airbnb/javascript) and is
enforced using [ESLint](http://eslint.org/).

It is recommended that you install an eslint plugin for your editor of choice when working on this
codebase, however you can always check to see if the source code is compliant by running:

```bash
npm run lint
```


### Development-Branches

Develop on branch develop and merge to master if you're finished.
More than 2 people concurrently working at the product? please use feature branches!
https://confluence.atlassian.com/bitbucket/workflow-for-git-feature-branching-814201830.html


### Testing Roles and API

Fire this and write down the token:
    mutation {
      loginWithPassword(username: "YOUR_USER", plainPassword: "YOUR_PASSWORD") {
        id
        token
      }
    }

Use https://github.com/skevy/graphiql-app, point it to http://localhost:3010/graphql and add a header:

key: meteor-login-token
value: YOUR_TOKEN

Test if login worked:

```
query {
  me {
    _id
    name
  }
}
```


## Build and deploy

### Building and deploying the backend for production (docker way)

    npm run build
    npm run dockerize
    docker-compose up -d


### Building and deploying the backend for production (manually)

https://guide.meteor.com/deployment.html#custom-deployment

    cd backend
    npm run build -- /path/to/build

copy /path/to/build to server with nodejs installed:

    cd /path/to/build
    cd programs/server && npm install
    MONGO_URL=mongodb://mongodb_host:port/izivi ROOT_URL=http://graphql-host/ node main.js

You can also use now.sh to test it: https://medium.com/@purplecones/deploying-a-meteor-app-for-free-using-zeit-now-c183329057c9
To deploy this in SWO production, look at the internal documentation **IT -> Software -> iZivi** rather than following this guide.

### Building and deploying the frontend for production

https://github.com/zeit/next.js#static-html-export

    cd webui
    GRAPHQL_ENDPOINT=http://graphql_host/graphql npm run build

export:

    next export

now copy the contents of the out directory to any folder accessible from the internet.

You can also use now.sh to test it: https://github.com/zeit/next.js#production-deployment
To deploy this in SWO production, look at the internal documentation **IT -> Software -> iZivi** rather than following this guide.
