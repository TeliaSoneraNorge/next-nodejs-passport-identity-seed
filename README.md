Telia Identity and Express.js 
=========================

A barebone project implemented using JavaScript (NodeJS, Express.js and Passport.js), which provides authentication against Telia Identity Provider via the OpenID Connect protocol.

# Installation

* Clone the repository
* Go to [https://console.telia.io](https://console.telia.io)
* Register a 'NodeJS (Server)' application and write down your client id, secret, and callback URL

	> Note: You will only be able to see the user data marked as 'Required' in this case  

* Insert your client id and secret in the Passport configuration file under 'server -> config -> passport.js'
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
    │   ├── index.js            # Main NodeJS server file
	│   ├── config              # Configuration folder
	│   ├───├── passport.js     # Passport OpenIDConnect plugin configuration
	.gitignore                  # Files to exclude from git commit
	package.json                # NPM needed packages to run the project
	README.md                   # This document

# License

MIT - Do with as you like.

