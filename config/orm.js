const connection = require("./connection.js");

const orm = {
    // selectAll()
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // insertOne()
    insertOne: (table, cols, vals, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // updateOne()
    updateOne: (table, updateColVal, updateValue, id, cb) => {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, updateColVal, updateValue, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;

