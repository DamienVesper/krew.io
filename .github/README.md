# Krew.io
This is a game revolving around crews that sink each other on a wide, open ocean, with islands in between.

## Important Notice
This project is not affiliated with the online game [krew.io](https://krew.io). Krew is a clone of this project, with no credit given whatsoever, hosted by [LapaMauve](https://github.com/LapaMauve). The official Discord for the continuation of this project can be found [here](https://discord.boatgame.io).
### Prerequisites
 * Node.js v14
 * NPM v7
 * NGINX
 * MongoDB

**Running in development**
``npm run dev``

**Running in production** (using pm2 to keep process alive)
``npm run prod``

Running in production mode serves to ``localhost:8200``.
Running in dev mode serves to ``localhost:8080``.

In production, Nginx proxies the local webfront port to 443 and redirects 80 to 443. 
