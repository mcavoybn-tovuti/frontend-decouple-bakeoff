# Frontend Decouple Bakeoff

We need to build a proof of concept using each of these technologies in order to decide which is the most appropriate for our use case. This will involve creating a couple components in the stencilJS, compiling them into components for react and vue, then using them in a mock vue and react app. The vue and react apps should have some way to be embedded into our current app. StencilJS components can also be embedded into our application without using a frontend framework, but we will be missing out on many of the features that


## Starting the server

Start the server using the commands:

```
cd server
npm install
npm start
```

The server is built with express and is set up to serve the files in this repo for development purposes on your local machine. If you want to test `/stencilJS/tovuti-web-components/www/index.html` simply open your browser and go to `http://localhost:3000/stencilJS/tovuti-web-components/www/index.html`. 

## StencilJS

StencilJS files are located in `/stencilJS/`.

## VueJS

Vue files are located in `/vue/`.

## React

React files are located in `/react/`.