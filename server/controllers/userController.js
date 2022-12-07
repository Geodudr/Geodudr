// for auth: npm install bcrypt jsonwebtoken --save
const db = require('../db/dbConnection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userController = {};

userController.createUser = async (req, res, next) => {
    const { username, password } = req.body;

    // generate bcrypt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        // generate new user with hash password
        const user = {
          userName: username,
          password: hash,
        };
        const newUserArr = [];
        for (let key in user) {
          newUserArr.push(user[key]);
        }
        console.log('newuserArr::', newUserArr);
  
        // insert new user info into user table
        const queryStr = `INSERT INTO users (username, password) VALUES ($1, $2)`;
        db.query(queryStr, newUserArr, (err, res) => {
          if (err) {
            console.log(`err occurs in signup: ${err}`);
            return next(err);
          } else {
            console.log('signup success!');
            return next();
          }
        });
      });
    });
};


userController.loginUser = async (req, res, next) => {
    const { username, password } = req.body;
    console.log('req.username::', username);
    const queryStr = `SELECT _id, username, password FROM users WHERE username=$1`;
    const login = await db
      .query(queryStr, [username])
      .then((data) => {
        const hash = data.rows[0].password;
        const correctPassword = bcrypt.compare(
          password,
          hash,
          function (err, result) {
            if (data.rows.length > 0 && result) {
              res.locals.user = [data.rows[0]];
              res.locals.userID = data.rows[0]._id;
              console.log('log in success');
              res.locals.loginStatus = true; 
              next();
            } else {
              console.log('wrong password or username');
              res.locals.loginStatus = false; 
              next(err);
            }
          }
        );
      })
      .catch ((error)  => {
          console.log(`Error occured in userController.login - ${error.message}`);
          return next(error);
        });
;}


module.exports = userController;