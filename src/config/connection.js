const { default: mongoose } = require("mongoose")

const CreateDB = async ()=> {
    try {
        await mongoose.connect('');
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = CreateDB