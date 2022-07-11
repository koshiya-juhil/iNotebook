const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"


const connectToMongo = () => {

    mongoose.connect(mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedtopology: true
        }).then(() => {
            console.log("Connected to Mongo Successful...")
        }).catch((error) => {
            console.log("Something Wrong", error)
        })
}

module.exports = connectToMongo;
