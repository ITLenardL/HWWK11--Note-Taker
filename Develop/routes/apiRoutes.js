const fs = require("fs");
const notesData = require('../db/db');

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

    res.json(data); 
  });

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
