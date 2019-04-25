/* eslint-disable no-undef */
//REQUIRE FRIEND ARRAY DATA
var friends = require("../data/friends");

module.exports = app => {

    //API GET REQUEST HANDLING TO DISPLAY ALL FRIENDS STORED.
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //API POST REQUEST HANDLING, adds request body to friend array. will respond with a match
    app.post("/api/friends",(req,res) => {

        let bestMatch = {
            name: "",//to show name
            photo: "",//to show new photo
            scoreDifferance: 100//to subtract dif from 
        };

        let totalDifference = 0;

        
        let newFriend = req.body;// handle for incoming data of new friend to add to array
        let newScore = newFriend.scores;//score array to compare each of the friendsarray scores against




        friends.push(req.body);
        res.json(friends[0]);//after comparing the user to the other "Friends" Closest match will be returned
        //This route will also be used to handle the compatibility logic.

    });

};