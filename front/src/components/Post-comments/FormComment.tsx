import React from 'react';
import IconSend from '../Icons/IconSend';

function FormComment() {
	return (
		<form action="#" className="mt-4">
			<label htmlFor="comment" className="block">
				<textarea
					id="comment"
					cols={30}
					rows={3}
					placeholder="Type your comment..."
					className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
          focus:outline-none focus:ring-1 bg-gray-50 focus:ring-blue-600 focus:border-blue-600 text-sm"
				></textarea>
			</label>
			<button
				type="button"
				className="mt-2  inline-flex items-center justify-center text-gray-100 font-medium leading-none
             bg-blue-600 rounded-md py-2 px-3 border border-transparent transform-gpu hover:-translate-y-0.5 
             transition-all ease-in duration-300 hover:text-gray-200 hover:bg-blue-700 text-sm"
			>
				Post comment
				<IconSend />
			</button>
		</form>
	);
}

export default FormComment;
