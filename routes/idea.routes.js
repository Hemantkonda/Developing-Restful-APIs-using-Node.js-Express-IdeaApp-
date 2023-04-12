const ideaController = require("../controllers/ideda.contoller")

// Define route for the calls like
// Get 127.0.0.1:5050/ideaApp/v1/ideas

module.exports = (app) =>{
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas);

    // Post Call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);
    // Put Call
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);
    // Delete Call
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea);
}