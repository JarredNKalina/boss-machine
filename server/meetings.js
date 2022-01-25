const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');

  
  meetingsRouter.get('/', (req, res, next)=>{
      getAllFromDatabase('meetings');
  } )
  
  meetingsRouter.post('/', (req, res, next)=> {
      const newIdea = addToDatabase('meetings', createMeeting());
      res.status(201).send(newMeeting);
  })
  
  meetingsRouter.delete('/', (req, res, next) => {
      deleteAllFromDatabase('meetings');
      res.status(204).send();
    });