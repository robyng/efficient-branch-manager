const mysql = require('mysql2');
const db = require('./connection'); // connect to db business_db

//Show depts
const dbShowDept = () => {
    const sourceSchema = `SOURCE /schema.sql`
    db.query(sourceSchema)
    const sourceSeeds = `SOURCE /seeds.sql`
    db.query(sourceSeeds)
    const sql = `SELECT * FROM department`
    db.query(sql)
  };

  module.exports = dbShowDept