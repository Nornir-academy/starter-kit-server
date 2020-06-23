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

## Links
- Link for device back-end
- [Starter Kit App](https://github.com/Nornir-academy/starter-kit-app)
