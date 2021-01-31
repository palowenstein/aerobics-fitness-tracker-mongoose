// Requires Express Router to handle requests, case sensitive if using camel cases
const apiNetwork = require("express").Router({caseSensitive: true});

// Requires Mongoose ODM (Object Data Modeling), mongoDB database connection. 
// Will automatically build indexes defined in schema when connected.
const mongoose = require("mongoose");

// Requires express module (middleware, HTTPs GET/POST/DELETE req. between REST APIs)
const express = require("express");

// Requires aerobics Database structure (models)
const aerobics = require("../models/aerobics");

// Basics
apiNetwork.get("/api/workouts", (req, res) => {
  aerobics.find({})
    .sort({ day: 1 })
    .then(workoutdb => { res.json(workoutdb); })
    .catch(err => { res.status(400).json(err); });
});

// Create
apiNetwork.post("/api/workouts", ({ body }, res) => {
    aerobics.create(body)
    .then(workoutdb => { res.json(workoutdb); })
    .catch(err => { res.status(400).json(err); });
});

// Over
apiNetwork.post("/api/workouts", (req, res) => {
    aerobics.insertMany(body)
    .then(workoutdb => { res.json(workoutdb); })
    .catch(err => { res.status(400).json(err); });
});

// Refresh
apiNetwork.put("/api/workouts/:id", (req, res) => {
    aerobics.updateOne(
    { _id: req.params.id },
    { $set: { exercises: [req.body] } }
    )
    .then( (workoutdb) => { res.json(workoutdb); } );
});

// Gamut
apiNetwork.get("/api/workouts/range", (req, res) => {
    aerobics.find({})
    .then(workoutdb => { res.json(workoutdb); })
    .catch(err => { res.status(400).json(err); });
});

module.exports = apiNetwork;


/* From Act#26 Wk17
const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router; */
