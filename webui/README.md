# Web UI for iZivi 2.0

## Technology Stack

- Next.js: https://zeit.co/blog/next (Webpack, Babel, React, Styles-Jsx)
- ESlint: Configured AirBnB Best practice code style
- Apollo: GraphQL Client that connects to the GraphQL Backend (see ../backend)


## Getting up and running

1. Install Node.js (https://nodejs.org)
2. Install Dependencies:
    npm install
3. Start Backend server (see ../backend/README.md)
4. Start Dev Webserver:
    npm start dev
5. Code hard

## Deployment

Next.js allows for static exports using "next export". The generated html/js/css bundle can then be installed on any hosting provider.
