# Express Server with Postgres Database Template

This is a template for a Node.js server using the Express web framework and a PostgreSQL database. It is intended to be used as a starting point for new projects.

## Usage

To use this template, run the following command to generate a new project based on this template:

```
npx degit hossaini310/expressDB-templ your-project
```

This will create a new directory called `your-project` that contains the files from this template. Next, navigate to the new directory and install the required dependencies with `npm install`. Once the dependencies are installed, the server can be started with `npm run dev` which will start a development server that will automatically restart when files are changed. For production, you can use `npm run start` which will start a production server.

### Setup

The following steps are required to set up and use this template:

1. Generate a new project based on this template with the command:
   `npx degit hossaini310/express-templ your-project`
2. Create a new database in PostgreSQL
3. Create a `.env` file in the root directory of the project and add the variables from the `.env.example` file
4. Install the required dependencies with `npm install`
5. Start the development server with `npm run dev`
6. Start the production server with `npm run start`

## Technologies Used

This template uses the following technologies:

- [Express](https://expressjs.com/): A minimalistic web framework for Node.js
- [PostgreSQL](https://www.postgresql.org/): A relational database management system
- [Node.js](https://nodejs.org/): A JavaScript runtime environment that allows server-side applications to be written in JavaScript
- [npm](https://www.npmjs.com/): A package manager for JavaScript libraries and tools

## Packages Used

This template uses the following npm packages:

- [colors](https://www.npmjs.com/package/colors): A library for adding colors and styles to the console output
- [dotenv](https://www.npmjs.com/package/dotenv): A library for loading environment variables from a `.env` file
- [express](https://www.npmjs.com/package/express): The Express web framework
- [express-async-handler](https://www.npmjs.com/package/express-async-handler): A library for handling asynchronous Express routes
- [pg](https://www.npmjs.com/package/pg): A PostgreSQL client for Node.js
- [is-my-json-valid](https://www.npmjs.com/package/is-my-json-valid): A library for validating JSON objects
- [morgan](https://www.npmjs.com/package/morgan): A middleware package for logging HTTP requests
- [nodemon](https://www.npmjs.com/package/nodemon): A tool for automatically restarting the server when files are changed
- [eslint](https://www.npmjs.com/package/eslint): A linter for JavaScript and TypeScript
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base): An ESLint configuration preset for the Airbnb JavaScript style guide
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): An ESLint plugin for linting import statements

## Additional Resources

For more information on using Express, I recommend the following resources:

- The [Express documentation](https://expressjs.com/en/api.html) on the Express website
- An [Introduction Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) on the Mozilla Developer Network
- A [PostgreSQL Documentation](https://www.postgresql.org/docs/) on the PostgreSQL website
- A [Express Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE) on YouTube by Traversy Media
