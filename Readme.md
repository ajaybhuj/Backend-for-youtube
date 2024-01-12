# backend for youtube

step 1: npm init
step 2: git setup
step 3: create directories public ,inside public temp directory and a file in temp .gitkeep
step 4: config package.json : "type": "module"
step 4: npm install nodemon and configure package.json : "dev": "nodemon src/index.js"
step 5: npm i -D prettier and configure the prettier file of ignore and .prettierrc
step 6: npm i mongoose express dotenv
step 7: connect db
step 8: import dotenv
step 8: update package.json : "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
step 9 : npm run dev
step 10: debug
