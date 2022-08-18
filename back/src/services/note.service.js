const Note = require('../models/note.schema');
class NoteService {
	async findAll() {
		try {
			return await Note.find();
		} catch (error) {
			throw new Error('Error getting all Notes');
		}
	}

	async findById(id) {
		try {
			return Note.findById(id);
		} catch (error) {
			throw new Error(error);
		}
	}

	async findNoteByUserId(userId) {
		try {
			return await Note.findByUserId({ userId });
		} catch (error) {
			throw new Error('Erro getting notes by user', userId);
		}
	}

	async create(data) {
		try {
			const newNote = await new Note(data);
			return await newNote.save();
		} catch (error) {
			throw new Error('Error creating note', error);
		}
	}

	async delete(id) {
		try {
			return await Note.findByIdAndDelete(id);
		} catch (error) {
			throw new Error('Error deleting note by id', id);
		}
	}

	async update(id, data) {
		try {
			return await Note.findByIdAndUpdate(id, data);
		} catch (error) {
			throw new Error('Error update note by id ', id);
		}
	}
}

module.exports = new NoteService();
