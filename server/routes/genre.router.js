const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Add query to get all genres
router.get('/', (req, res) => {
  const sql = `
  SELECT * 
  FROM "genres";
    `;
  pool
    .query(sqlParam)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((error) => {
      console.log("Error selecting all genres", error);
      res.sendStatus(500);
    });
});


module.exports = router;
