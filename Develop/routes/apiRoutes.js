const fs = require("fs");
const notesData = require("../db/db");


module.exports = (app) => {

  app.get('/api/notes/', (req, res) => res.json(notesData));
  
  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let newId = (data.length).toString();
    newNote.id = newId;
    console.log(newId);
    data.push(newNote);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
        if (err) throw (err);        
    }); 
    res.json("saved"); 
  });

  app.delete("/api/notes/:id", function (req, res) {
    let elem = parseInt(req.params.id);
    let tempNotes = [];
    for (var i = 0; i < notesData.length; i++) {
      if (i !== elem) {
        tempNotes.push(notesData[i]);
      }
    }
    notesData = tempNotes;
    res.json("deleted");
  });
};

