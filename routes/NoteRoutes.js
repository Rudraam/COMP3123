const Note = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

// Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    try {
        const note = new Note({
            noteTitle: req.body.content.noteTitle,
            noteDescription: req.body.content.noteDescription,
            priority: req.body.content.priority,
            dateAdded: req.body.content.dateAdded || new Date(),
            dateUpdated: req.body.content.dateUpdated || new Date()
        });
        
        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        });
    }
});

// Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving notes."
        });
    }
});

// Retrieve a single Note with noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
});

// Update a Note with noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    try {
        const note = await Note.findByIdAndUpdate(req.params.noteId, {
            noteTitle: req.body.content.noteTitle,
            noteDescription: req.body.content.noteDescription,
            priority: req.body.content.priority,
            dateUpdated: new Date()
        }, {new: true});
        
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }
});

// Delete a Note with noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.noteId);
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    } catch (error) {
        if(error.kind === 'ObjectId' || error.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
});

module.exports = noteRoutes;
