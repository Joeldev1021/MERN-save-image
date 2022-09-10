import React, { FormEvent } from 'react';
import IconSend from '../Icons/IconSend';

interface Props {
	handleSubmit: (e: FormEvent) => void;
	setComment: (comment: string) => void;
	comment: string;
	textButton?: string;
}

function FormComment({ handleSubmit, setComment, comment, textButton }: Props) {
	return (
		<form className="mt-4" onSubmit={e => handleSubmit(e)}>
			<label htmlFor="comment" className="block">
				<textarea
					id="comment"
					name="comment"
					cols={30}
					rows={3}
					value={comment}
					onChange={e => setComment(e.target.value)}
					placeholder="Type your comment..."
					className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
          focus:outline-none focus:ring-1 bg-gray-50 focus:ring-blue-600 focus:border-blue-600 text-sm"
				></textarea>
			</label>
			<button
				type="submit"
				className="mt-2  inline-flex items-center justify-center text-gray-100 font-medium leading-none
             bg-blue-600 rounded-md py-2 px-3 border border-transparent transform-gpu hover:-translate-y-0.5 
             transition-all ease-in duration-300 hover:text-gray-200 hover:bg-blue-700 text-sm"
			>
				{textButton || 'Post comment'}
				<IconSend />
			</button>
		</form>
	);
}

export default FormComment;
