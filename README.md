Instructions below for how to run this app on your local machine.

1. Clone this repo.
* `git clone git@github.com:Joan-Buck/SnowBnB.git`

2. Install dependencies in the `snowbnb` root directory.
* `npm install`

3. Create a user in POSTGRESQL with password and create database attributes.
* `CREATE USER <username> WITH CREATEDB PASSWORD <password>;`

4. Create a .env file in the backend directory based on the .env.example found within that directory.

5. In your .env file, enter your database username, database password, desired database name, secure combination of characters for your JWT_SECRET, and your desired PORT (5000 recommended). JWT_EXPIRES_IN can be the same as it is in the .env.example file.

6. Add the following proxy to your package.json file within your frontend directory, matching the 5000 port in the PORT configuration found in your .env file.
* `"proxy":"http://localhost:5000"`

7. Create the Database in your backend directory.
* `npx dotenv sequelize db:create`

8. Migrate and Seed the models for your database in your backend directory.
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`

9. Start the server in the backend directory.
* `npm start`

10. Start the server in the frontend. This should open the app in the default browser. If not, go to http://localhost:3000.
* `npm start`

11. You can either create a new account or log in as the Demo User to use SnowBnB!

