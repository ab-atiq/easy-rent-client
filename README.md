# EASY RENT

Firebase live website link: https://easyrent-85ae2.web.app/ <br/>
Vercel Live website link: https://easyrent-rosy.vercel.app/ <br/>
live server link: https://easy-rent-server.onrender.com

# Check chat application
Username: abcd <br/>
Password: abcd

# How to run this poject
Step-1:
```sh
git clone https://github.com/ab-atiq/easy-rent-client.git
```
Step-2:
```sh
cd easy-rent-client
npm install
```
Step-3:
```sh
npm start
```
# Error on React Version
1. First delete `node_modules` and `package-lock.json` file.
2. Update React major dependency
Go to `package.json` file then setup update version(We can get update dependency version from our new created react application) of these dependencies.
```
"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```
3. Install all packages and start application
```
npm install
npm start
```
