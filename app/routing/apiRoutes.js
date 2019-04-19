/* eslint-disable no-undef */
//REQUIRE FRIEND ARRAY DATA
var friends = require("../data/friends");


module.exports = app => {


    //API GET REQUEST HANDLING
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //API POST REQUEST HANDLING, adds request body to friend array and responds for now with true for success
    app.post("/api/friends",(req,res) =>{
        friends.push(req.body);//add user to friends array
        res.json(req.body);//after comparing the user to the other "Friends" Closest match will be returned 
    });


};
