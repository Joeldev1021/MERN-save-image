import React, { useState, FormEvent, useContext } from 'react';
import { PostContext } from '../context/post-image/PostContext';
import FormComment from './Post-comments/FormComment';

interface Props {
	onClose: (e: any) => void;
	id: string;
	comment: string;
	author: string;
	desc: string;
}

const ModalEditeComment = ({ author, desc, onClose, comment, id }: Props) => {
	const [editeComment, setEditeComment] = useState<string>(comment);
	const { updateCommentPost } = useContext(PostContext);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		updateCommentPost(id, editeComment);
		onClose('close');
	};

	return (
		<div
			onClick={e => onClose(e)}
			className="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed z-30 top-0 right-0 bottom-0 left-0"
		>
			<div className="bg-white min-w-[350px] h-auto relative z-40 p-4 px-8 rounded-md ">
				<div className="">
					<p className="font-bold">{author}</p>
					<p>{desc}</p>
				</div>
				<FormComment
					handleSubmit={handleSubmit}
					setComment={setEditeComment}
					comment={editeComment}
					textButton={'Update comment'}
				/>
			</div>
		</div>
	);
};

export default ModalEditeComment;
