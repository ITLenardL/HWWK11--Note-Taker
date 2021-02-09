var path = require("path");

module.exports = function(app, fs){

const db = require('../db/db.json');

let databaseFile = path.join(__dirname, '../db/db.json');

app.get('/api/notes', function(req, res) {
  res.json(db);
  console.log("Notes read")
});

app.post('/api/notes', function(req, res) {
  let newNote = req.body;  
  let id = 1;
  
  for (let i = 0; i < db.length; i++) {
  let note = db[i];
  if (note.id > id) {
  id = note.id;
  }}

  newNote.id = id + 1;
  db.push(newNote)
  
  fs.writeFile(databaseFile, JSON.stringify(db), function(err){
    if(err) {
    return console.log(err);
    }
    console.log("Note Saved");
  });
    res.json(newNote);
});

app.delete('/api/notes/:id', function(req, res) {
    let databaseFile = path.join(__dirname, '../db/db.json')
    for(let i = 0; i < db.length; i++) {
    if(db[i].id == req.params.id) {
    db.splice(i, 1);            
    break;
    }}

    fs.writeFile(databaseFile, JSON.stringify(db), function(err) {
    if(err) {
    return console.log(err);
    } else {
    console.log("Note deleted");
    }});
    res.json(db);
});
}