require('dotenv').config();
const { Pool } = require('pg');
const PG_URI = 'postgres://ivlhrmqt:C8jWHTgQnaGBvVYepZJDLo48fkHknbDW@babar.db.elephantsql.com/ivlhrmqt';
const URI = process.env.PG_URI || PG_URI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};