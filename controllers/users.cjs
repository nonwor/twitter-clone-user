const User = require('../models/User.cjs')

const getUsers = async (req, res) => {
    // make a request to databse, get a response (an array of objects)
    let response = await User.find();
    res.json(response)
}

const createUsers = async (req, res)=>{

    let response = await User.create(req.body);
    if (response) {
        res.json(response)
    } else {
        res.status(400).json("creation falied!")
    }
}

module.exports = {
    getUsers,
    createUsers
}