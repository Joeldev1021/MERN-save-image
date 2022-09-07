import React, { useEffect, useState } from 'react';
import { getNotesApi } from '../api/postApi';
import ListNotes from '../components/ListNotes';
import { INotes } from '../interface';

const NotePage = () => {
	const [notes, setNotes] = useState<INotes[]>([]);

	useEffect(() => {
		getNotesApi().then(notes => setNotes(notes.notes));
	}, []);

	return (
		<div className="grid grid-cols-4 gap-4">
			{notes !== undefined &&
				notes.map(note => (
					<ListNotes
						key={note._id}
						title={note.title}
						description={note.description}
					/>
				))}
		</div>
	);
};

export default NotePage;
