# [Starter Kit Server](https://nornir-starter-kit-app.herokuapp.com/)
This is an example code to run a [Starter Kit App](https://github.com/Nornir-academy/starter-kit-app)
on server and for deployment on Heroku. After deployment, you will access your
app everywhere if you have an internet connection.

## How To Run
After cloning this repository you need to:
1. Install Node.js, below is a link to official web page
2. Run **npm install** inside you terminal
3. Rename ~~.env-sample~~ to **.env**
4. Inside **.env** add:
```
DOMAIN="ws://websocketdev.rtw.no/DOMAIN/SERVICE/INSTANCE/channel"
TOKEN="aToken_XXXXXXXXXXXXXXXXXX"
```
5. Run **npm run start** inside you terminal
6. Add link that you get inside the browser

## Technologies used
- [Node.js](https://nodejs.org/en/)
- [express.js](https://expressjs.com/)
- [ws](https://www.npmjs.com/package/ws)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [socket.io](https://socket.io/)
- [nodemon](https://nodemon.io/)

## [Heroku](https://www.heroku.com/)
Heroku is a service where you can run your App, get URL and share it with your
friends. You can deploy up to 5 projects absolutely for free.

### Deployment on Heroku
1. Registration
2. Create New App. App name should be unique.
3. Follow the instruction on the page.
4. Move to Settings.
5. Press **"Reveal Config Vars"** button.
6. You need to insert all **key** and **value** pairs from your .env file. Where
```
KEY is DOMAIN
VALUE is ws://websocketdev.rtw.no/DOMAIN/SERVICE/INSTANCE/channel
```
7. Inside the terminal **git push heroku master**
8. Now your App should be successfully deployed.

## Links
- Link for device back-end
- [Starter Kit App](https://github.com/Nornir-academy/starter-kit-app)
