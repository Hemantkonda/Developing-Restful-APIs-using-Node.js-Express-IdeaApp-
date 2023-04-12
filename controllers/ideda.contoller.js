const ideas = require("../models/idea.model");


// search all idea
exports.fetchAllIdeas = (req, res) =>{
     res.status(200).send(ideas);
}

let idCount = 1;

// create new idea

exports.createIdea = (req,res) =>{
    // Read the request body
    const idea = req.body;
    // need to generate the next idea id
    idea.id = ++idCount;
    // Save it in the list of existing idea
    ideas[idCount] = idea;
    // return the response
    res.status(201).send(ideas[idCount]);
}



// update idea

exports.updateIdea = (req, res) =>{
    // i need to read id passed in the path
    // 127.0.0.1:5050/ideaApp/v1/ideas/id

    const ideaId = req.params.id;

    // If the idea is present - Modify else return error

    if (ideas[ideaId]) {
        ideas[ideaId] = req.body
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(404).send({
            massage : "idea Id is not write"
        })
    }
}



// Delete idea

exports.deleteIdea = (req, res) =>{
    // check if present if yes delete no- return error msg
    if (ideas[req.params.id]) {
        delete ideas[req.params.id];
        res.status(200).send({
            massage : "Successfully Deleted"
        })
    }else{
        res.status(404).send({
            massage : "Wrong idea Id"
        })
    }
}