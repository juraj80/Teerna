# Teerna

Teerna is a Game Master tool developed with Node and React

### Installation

These are steps to install Teerna:

1. Clone the repository: `git clone git@github.com:juraj80/Teerna.git`
1. Install yarn: `npm install -g yarn`
1. Install sqlite3. This step assumes a Debian based Linux Distro, such as Ubuntu: `sudo apt install sqlite3`. Sqlite is avaliable for other platforms as well, but the installation instructios may differ.

Now enter the project folder: `cd Teerna`. **Following instructions assume the current working directory is the project root folder**.

1. Install client dependencies: `cd client && yarn install && cd - `
1. Install server dependencies: `cd server && yarn install && cd - `
1. Build the client: `cd server && npm run build-client && cd - `
1. Run the project locally: `cd server && npm start `




### Development

This project is actually made of two distinct applications: the client and the server.

Client is built with React.js. You can find it in the `client`
folder and you can install its dependencies with `cd client &&
yarn install`.

Server is built with Node.js and Express. You can find it in the
`server` folder and you can install its dependencies with `cd
server && yarn install`.

#### Useful commands

- Update the project: `git pull && cd server && yarn install && cd ../client && yarn install && cd ..`
- Download all branches at once: `git fetch`
- Handling merges: `git mergetool` ([Meld](https://meldmerge.org/) is a nice GUI tool to merge files. If you have it installed this command will open it.)

