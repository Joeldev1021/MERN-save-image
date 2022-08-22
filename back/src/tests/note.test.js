const mongoose = require('mongoose');
const superTest = require('supertest');
const Note = require('../models/note.schema');
const { app, server } = require('../app');
const notes = require('./utils/index');

const api = superTest(app);

beforeEach(async () => {
	await Note.deleteMany({});

	const note1 = new Note(notes[0]);
	console.log('note1 ', note1);
	await note1.save();
	const note2 = new Note(notes[1]);
	await note2.save();
});

test('notes are returned as json', async () => {
	await api
		.get('/note/all')
		.expect(200)
		.expect('Content-Type', /application\/json/);
});

test('there are two notes', async () => {
	const response = await api.get('/note/all');
	expect(response.body.notes).toHaveLength(notes.length);
});

test('GET Note by id successfully', async () => {
	const response = await api.get(`/note/${notes[0]._id}`);
	expect(200);
	expect(response.body).toEqual(notes[0]);
});

afterAll(() => {
	mongoose.connection.close();
	server.close();
});
