const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://pooja:pooja@cluster0.gpozx.mongodb.net/TODOS?retryWrites=true&w=majority");
};




