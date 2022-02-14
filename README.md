###SnowBnB is an app for rental listings near mountain resorts with snow-related activities. In order to run SnowBnB on your local machine, follow the instructions below.

#Technologies Used
* Javascript
* Express
* React
* Redux
* Sequelize
* PostgreSQL
* CSS
* Heroku

1. Clone this repo with the following terminal command:
    `git clone git@github.com:Joan-Buck/SnowBnB.git`

2. Install dependencies in the `snowbnb` root directory with the following terminal command:
    `npm install`

3. Create a user in PostgrSQL with password and create database attributes with the following psql command:
    `CREATE USER <username> WITH CREATEDB PASSWORD <password>;`

4. Create a .env file in the backend directory based on the .env.example found within that directory.

5. In your .env file, enter your database username, database password, desired database name, secure combination of characters for your JWT_SECRET, and your desired PORT (5000 recommended). JWT_EXPIRES_IN can be the same as it is in the .env.example file.

6. Add the following proxy to your package.json file within your frontend directory, matching the 5000 port in the PORT configuration found in your .env file:
    `"proxy":"http://localhost:5000"`

7. Create the Database in your backend directory with the following terminal command:
    `npx dotenv sequelize db:create`

8. Migrate and Seed the models for your database in your backend directory with the following terminal commands:
    `npx dotenv sequelize db:migrate`
    `npx dotenv sequelize db:seed:all`

9. Start the server in the backend directory with the following terminal command:
    `npm start`

10. Start the server in the frontend with the following terminal command. This should open the app in the default browser. If not, go to http://localhost:3000.
    `npm start`

11. You can either create a new account or log in as the Demo User to use SnowBnB!
