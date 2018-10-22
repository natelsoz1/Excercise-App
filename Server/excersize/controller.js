const express = require("express");
const { User, Goal } = require("./model");
const mongo = require("mongodb").MongoClient;
const sha512 = require("js-sha512");
const { checkKeys } = require("../utils");
//Setup for mongdb
let db_port = 27017;
let db_host = "localhost";
let db_name = "excersize-db";
let url = `mongodb://${db_host}:${db_port}/${db_name}`;

mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("database created");
    db.db("excersize-db").createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("created users collection");
        db.close();
    });
});

const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
    res.render("index");
});

app.post("/login", function (req, res, next) {
    console.log("User attempting to login");
    if (checkKeys(req.body, ["name", "password"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").find({ name: req.body.name }).toArray(function (err, results) {
                var loggedIn = false;
                for (var result in results) {
                    if (err) throw err;
                    if (sha512.sha512(req.body.password) === results[result].password) {
                        // password check
                        res.send("true");
                        loggedIn = true;
                        console.log("Login successful");
                    }
                }
                if (!loggedIn) {
                    res.send("false");
                }
            });
            db.close();
        });
    } else {
        res.send("false");
    }
});

app.delete("/delete-user", function (req, res, next) {
    console.log("Attempting to delete user");
    if (checkKeys(req.body, ["name", "password"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").find({ name: req.body.name }).toArray(function (err, results) {
                var loggedIn = false;
                for (var result in results) {
                    if (err) throw err;
                    if (sha512.sha512(req.body.password) === results[result].password) {
                        db.db("excersize-db").collection("users").deleteOne({ name: req.body.name }, function (err, result) {
                            if (err) throw err;
                            if (result.deletedCount > 0) {
                                res.send("true");
                                console.log("A user has deleted their account")
                            } else {
                                res.send("false");
                            }
                            db.close();
                        });
                        loggedIn = true;
                    }
                }
                if (!loggedIn) {
                    res.send("false");
                }
            });
        });
    } else {
        res.send("false");
    }
});

app.put("/update-info", function (req, res, next) {
    if (checkKeys(req.body, ["oldName", "oldPassword", "newName", "newPassword"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").find({ name: req.body.oldName }).toArray(function (err, results) {
                var loggedIn = false;
                for (var result in results) {
                    if (err) throw err;
                    if (sha512.sha512(req.body.oldPassword) === results[result].password) {
                        console.log("updating " + req.body.oldName + "'s user info");
                        var user = new User().genUserFromObject(results[result]);
                        user.name = req.body.newName;
                        user.password = sha512.sha512(req.body.newPassword);
                        db.db("excersize-db").collection("users").updateOne({ name: req.body.oldName },
                            {
                                $set: {
                                    name: user.name,
                                    password: user.password,
                                }
                            },
                            function (err, result) {
                                if (err) throw err;
                                if (result.modifiedCount > 0) {
                                    res.send("true");
                                    console.log("User data had been updated")
                                } else {
                                    res.send("false");
                                }
                            }
                        )
                        loggedIn = true;
                        db.close();
                    }
                }
                if (!loggedIn) {
                    res.send("false");
                    db.close();
                }
            });
        });
    } else {
        res.send("false");
    }
})

app.post("/register", function (req, res, next) {
    console.log("Registering new user");
    if (checkKeys(req.body, ["name", "firstName", "lastName", "password"])) {
        var name = req.body.name;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var password = req.body.password;
        var newUser = new User();
        newUser.generate(name, firstName, lastName, password);
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var foundUser = false;
            db.db("excersize-db").collection("users").find({ name: newUser.name }).toArray(function (err, results) {
                if (err) throw err;
                for (var result in results) {
                    if (results[result].name === newUser.name) {
                        foundUser = true;
                    }
                }
                if (foundUser == false) {
                    db.db("excersize-db").collection("users").insertOne(newUser, function(err, result) {
                        if (err) throw err;
                        if (result.insertedCount > 0) {
                            res.send("true");
                            console.log(result.name +" has registered an account")
                        } else {
                            res.send("false");
                        }
                        db.close();
                    });
                } else {
                    res.send("false");
                }
            });
        });
    } else {
        res.send("false");
    }
});

app.post("/set-info", function (req, res, next) {
    console.log("User attepting to set info")
    if (checkKeys(req.body, ["name", "height", "weight", "stride-length"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                var user = (new User()).genUserFromObject(result);
                user.height = req.body.height;
                user.weight = req.body.weight;
                db.db("excersize-db").collection("users").updateOne(
                    { name: user.name },
                    { $set: { height: user.height, weight: user.weight } },
                    function (err, result) {
                        if (err) throw err;
                        console.log("A user has updated their info");
                        res.send("true");
                    }
                );
            });
        });
    } else {
        res.send("false");
    }
});

app.post("/set-goal", function (req, res, next) {
    console.log("User attepting to set goals")
    if (checkKeys(req.body, ["name", "goalType", "goalValue"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                var user = (new User()).genUserFromObject(result);
                user.goal = (new Goal()).createNewGoal(req.body.goalType, req.body.goalValue);
                db.db("excersize-db").collection("users").updateOne(
                    { name: user.name },
                    {
                        $set:
                        {
                            goal: {
                                goalType: user.goal.goalType,
                                goalValue: user.goal.goalValue,
                                goalProgress: user.goal.goalProgress
                            }
                        }
                    },
                    function (err, result) {
                        if (err) throw err;
                        console.log(user.name +" updated goal:");
                        console.log(user.goal);
                        res.send("true");
                    }
                );
            });
        });
    } else {
        res.send("false");
    }
});

app.post("/get-goal", function (req, res, next) {
    if (checkKeys(req.body, ["name"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                res.send(result.goal);
            });
        });
    } else {
        res.send("name required");
    }
});

app.post("/get-name", function (req, res, next) {
    if (checkKeys(req.body, ["name"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                res.send(result.firstName + " " + result.lastName);
            });
        });
    } else {
        res.send("false");
    }
});

app.post("/add-friend", function (req, res, next) {
    if (checkKeys(req.body, ["name", "friendName"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                var user = (new User()).genUserFromObject(result);
                var hasFriend = false;
                for (var f in user.friends) {
                    if (user.friends[f] === req.body.friendName) {
                        hasFriend = true;
                    }
                }
                if (!hasFriend) {
                    user.friends.push(req.body.friendName);
                    db.db("excersize-db").collection("users").updateOne(
                        { name: user.name },
                        { $set: { friends: user.friends } },
                        function (err, result) {
                            if (err) throw err;
                            if (result.modifiedCount > 0) {
                                console.log(`${user.name} added ${req.body.friendName}`)
                                res.send("added");
                            } else {
                                res.send("unsuccessful");
                            }
                        }
                    );
                } else {
                    res.send("user already has friend");
                }
            });
        });
    } else {
        res.send("please include a name and friend name");
    }
})

app.post("/freind-list", function (req, res, next) {
    if (checkKeys(req.body, ["name"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                var user = (new User()).genUserFromObject(result);
                res.send(user.friends);
            });
        });
    } else {
        res.send("please include a name");
    }
});

app.post("/should-display-data", function(req, res, next) {
    if (checkKeys(req.body, ["name", "friendName"])) {
        mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("excersize-db").collection("users").findOne({ name: req.body.name }, function (err, result) {
                if (err) throw err;
                var user = (new User()).genUserFromObject(result);
                if (user.friends.includes(req.body.friendName)) {
                    db.db("excersize-db").collection("users").findOne({ name: req.body.friendName }, function (err, result) {
                        if (err) throw err;
                        if (result.friends.includes(user.name)) {
                            res.send("true");
                        } else {
                            res.send("false");
                        }
                    });
                } else {
                    res.send("false");
                }
            });
        });
    } else {
        res.send("please include a name and friend name");
    }
})

module.exports = app;