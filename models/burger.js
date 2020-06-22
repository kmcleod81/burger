// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (vals, cb) => {
        orm.insertOne("burgers", "burger_name", vals, (res) => {
            cb(res);
        });
    },

    updateOne: (updateColVal, updateValue, id, cb) => {
        orm.updateOne("burgers", updateColVal, updateValue, id, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;