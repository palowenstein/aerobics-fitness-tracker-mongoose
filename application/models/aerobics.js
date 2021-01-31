// Requires mongoose for mongoDB database connection
const mongoose = require("mongoose");

/* // Requires mongoose schema type
Mongoose schema = configuration object for a Mongoose model.
SchemaType = configuration object for an individual property.
SchemaType dictates given path type, getters/setters, path valid values. */
const Schema = mongoose.Schema;

/* Be able to track the:
1) name,
2) type,
3) weight,
4) sets,
5) reps,
6) duration of exercise.
+ cardio exercise:
be able to track distance traveled
*/

const aerobicsStructure = new Schema({
  day: {
    type: Date, default: Date.now
  },
  exercises: [
      {
        name: {
            type: String, trim: true, required: "Enter Exercise Name."
        },
        type: {
            type: String, trim: true, required: "Enter Exercise Type."
        },
        weight: {
            type: Number
          },
        sets: {
            type: Number
        },
        reps: {
            type: Number
          },
        duration: {
            type: Number, required: "Enter Exercise Duration."  
        },
        distance: {
            type: Number
        }
    }
  ]
});

const Aerobics = mongoose.model("Aerobics", aerobicsStructure);

module.exports = Aerobics;
