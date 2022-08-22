const NoteService = require('../services/note.service');

class NotesController {
	async findNotesByUserId(req, res) {
		const userId = req.user.id;
		try {
			const notes = await NoteService.findNoteByUserId(userId);
			res.status(200).json({ notes });
		} catch (error) {
			res.status(404).json({ message: 'Note is not found' });
		}
	}

	async findAll(req, res) {
		try {
			const notes = await NoteService.findAll();
			res.status(200).json({
				message: 'get all notes successfully',
				notes,
			});
		} catch (error) {
			res.status(404).json({ message: 'all note not found' });
		}
	}

	async create(req, res) {
		try {
			const note = await NoteService.create(req.body);
			if (!note) res.status(404).json({ message: 'note not create' });
			note.userId = req.user.id;

			res.status(200).json({ massage: 'create note successfully', note });
		} catch (error) {
			res.status(404).json({ message: 'error  created note' });
		}
	}

	async findById(req, res) {
		try {
			const note = await NoteService.findById(req.params.id);
			res.status(200).json(note);
		} catch (error) {
			res.status(404).json({
				message: `error getting note by id ${req.params.id}`,
			});
		}
	}

	async update(req, res) {
		const { id } = req.params;
		try {
			const noteUpdate = await NoteService.update(id, req.body);

			if (!noteUpdate) res.status(404).json({ message: 'note not updated' });

			return res.status(200).json({
				message: 'note updated successfully',
				noteUpdate,
			});
		} catch (error) {
			res.status(404).json({ message: 'error updtate note ' });
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		try {
			const noteDelete = await NoteService.delete(id);
			if (!noteDelete) res.status(404).json({ message: 'note not deleted ' });
			return res.status(200).json({
				message: 'note deleted successfully',
				noteDelete,
			});
		} catch (error) {
			res.status(404).json({ message: 'error deleted note' });
		}
	}
}

module.exports = new NotesController();
