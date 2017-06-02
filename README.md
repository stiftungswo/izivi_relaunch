# iZivi

An E-Recruitement tool to plan swiss civil service missions

## General Purpose

The project's purpose is to manage planning Zivis (swiss civil service agents), when they start their employment and when they finish.

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

It is recommended that you install an eslint plugin for your editor of choice when working on this codebase, however you can always check to see if the source code is compliant by running:

```bash
npm run lint
```

### Using Git

Develop on branch develop and merge to master every time you deploy to production.
More than 2 people concurrently working at the product? please use feature branches!
https://confluence.atlassian.com/bitbucket/workflow-for-git-feature-branching-814201830.html

**Don't make this more complicated than it is. If you have write rights then just push, don't create pull requests. There are no rules for commit messages either and nobody tells you you're a good guy when you rebase your changes. What is important is that the whole system starts up before you push changes to develop/master!**

## Testing

### Local MongoDB access

mongodb://localhost:3011 (always +1 to backend port)

Mac: https://robomongo.org, https://github.com/jeromelebel/MongoHub-Mac

### Roles and API
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


## Production

### Build apps for production

npm run build

This will generate minified optimized versions in ``./backend/.build/bundle`` and ``./webui/.next/dist``


### Deploy (docker)

After you generated the production builds, you can create docker images out of these by:

    npm run dockerize

In docker-compose.yml you'll find an example of how these apps can be orchestrated together, you can try it out on my local docker engine by running:

    docker-compose up


### Deploy (manual)

https://guide.meteor.com/deployment.html#custom-deployment

copy ./backend/.build/bundle to server with nodejs installed and start the backend like this:

    cd programs/server
    npm install
    export MONGO_URL=mongodb://mongodb_host:port/izivi
    export ROOT_URL=http://graphql-host/
    node main.js


for the webui

    cd webui
    export GRAPHQL_ENDPOINT=http://graphql_host/graphql
    npm run build (again, **because next needs environment variables be be set at build time!!!**)
    npm run start

### Deploy (now.sh)

You can also use now.sh to test the backend: https://medium.com/@purplecones/deploying-a-meteor-app-for-free-using-zeit-now-c183329057c9

And the webui: https://github.com/zeit/next.js#production-deployment

You'll need a MongoDB instance accessible from somewhere, consider MongoLab for testing (free tier).

### TODO

- Production Deployment for SWO, any credentials can be found by accessing the DiskStation's drive in  **IT -> Software -> iZivi**. Try using https://github.com/zeit/next.js#static-html-export

- Docker engine @ SWO (hosted on Mac Mini or any VPS with a bare minimum of 500mb of ram + swap enabled, like digitalocean 5 USD)

## Why EUPL?

GPLv2+: Multi-lingual & complete.

https://choosealicense.com/licenses/eupl-1.1/
https://medium.com/apinf/eupl-is-the-open-source-license-in-the-sweet-spot-5b136f53812c
http://openisfree.blogspot.ch/2014/02/eupl-ifoss.html
