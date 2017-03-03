Telia Identity and Express.js 
=========================

An Express.js project implemented using JavaScript (NodeJS, Express.js and Passport.js):

# Installation

* Clone the repository
* Go to [https://console.telia.io](https://console.telia.io)
* Register a 'NodeJS (Server)' application and write down your client id and secret
* Insert your client settings the Passport configuration file under 'server -> config -> passport.js'
```
var CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
var CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
var CLIENT_REDIRECT_URL = 'YOUR_CLIENT_REDIRECT_URL'; 
```
* Execute the following at the root of the project
```
npm install 
npm start
```

* Browse to [http://localhost:3000](http://localhost:3000)

Wow, it works!

# Folder structure

    .
    ├── server                  # Main project files
    │   ├── index.ts            # Required from ../index.js with ts-node
	│   ├── config              # Configuration folder
	│   ├───├── passport.js     # Passport OpenIDConnect plugin configuration
	.gitignore                  # Files to exclude from git commit
	package.json                # NPM needed packages to run the project
	README.md                   # This document

# License

MIT - Do with as you like.

