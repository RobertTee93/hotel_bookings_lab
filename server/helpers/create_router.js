const express = require("express");
const ObjectID = require("mongodb").ObjectID;


const createRouter = function(collection){

  const router = express.Router();

  router.get("/", (req, res) => {
    collection
    .find()
    .toArray()
    .then(results => res.json(results))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.post("/", (req, res) => {
    const newData = req.body
    collection
    .insertOne(newData)
    .then(result => res.json(result.ops[0]))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.delete("/:id", (req, res) => {
    const id = req.params.id
    collection
    .deleteOne({ id_: ObjectID(id)} )
    .then(result => res.json(result))
  })

  return router

}


module.exports = createRouter;
