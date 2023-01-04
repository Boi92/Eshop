module.exports.register = (req, res) => {
    console.log('hello from register'),
    res.send('hello form register')
    };

const User = require('../modules/User')

module.exports.register = async (req, res) => {
    try {
      console.log("Hello from register", req.body);
      await User.create(req.body);
      res.send({ success: true });
    } catch (error) {
      console.log("Register Error", error.message);
      res.send({ success: false, error: error.message });
    }
  };


  module.exports.login = async (req, res) => {
    try {
      console.log("Hello from login", req.body);
      const user = await User.findOne(req.body).select("-password -__v"); // to select properties which we want to return
  
      if (!user) return res.send({ success: false, errorId: 1 }); // user not found, boiler plate code
      res.send({ success: true, user });
    } catch (error) {
      console.log("Login Error", error.message);
      res.send({ success: false, error: error.message });
    }
  };

  module.exports.list = async (req, res) => {
    try {
      console.log("Hello from list");
      const users = await User.find().select("-password -__v");
      console.log(users);
      res.send({ success: true, users });
    } catch (error) {
      console.log("List Error", error.message);
      res.send({ success: false, error: error.message });
    }
  };