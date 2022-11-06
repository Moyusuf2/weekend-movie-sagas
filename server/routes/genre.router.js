const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// Add query to get all genres
router.get('/:id', (req, res) => {
  console.log('query is ', req.params.id)
  const sql = `
SELECT
"genres"."name" as genre
FROM "genres"
JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
WHERE "movies"."id" = $1;
  `;
  pool
    .query(sql,[req.params.id])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((error) => {
      console.log("Error selecting all genres", error);
      res.sendStatus(500);
    });
});

// router.get('/:id',(req,res) =>{
//   const sql = `
//   SELECT * 
//   FROM "genres"
//   JOIN "movies_genres" 
//     ON "genres".id = "movies_genres".genre_id
//   WHERE "movies_genres".movie_id = $1
//   `;
//   pool
//       .query(sql, [req.params.id])
//       .then((dbRes) =>{
//         console.log('dbRes is:',dbRes.rows)
//         res.send(dbRes.rows)
//       })
//       .catch((error) =>{
//         console.log('error in /GET id',error)
//       })
// })


module.exports = router;
