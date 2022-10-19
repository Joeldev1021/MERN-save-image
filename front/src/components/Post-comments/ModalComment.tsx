import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { useComment } from '../../hooks/useComment';
import FormComment from './FormComment';

interface Props {
	onClose: (e: any) => void;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	id: string;
	comment?: string;
	author?: string;
	desc?: string;
	action: string;
}

const ModalComment = ({
	id,
	author,
	desc,
	comment,
	action,
	setShowModal,
	onClose,
}: Props) => {
	const [stateComment, setStateComment] = useState<string>(comment || '');
	const { updateCommentPost, addReplyComment } = useComment();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (action === 'EDITE_COMMENT') updateCommentPost(id, stateComment);
		if (action === 'ADD_REPLY_COMMENT') addReplyComment(id, stateComment);

		setShowModal(false);
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
					setComment={setStateComment}
					comment={stateComment}
					textButton={'Update comment'}
				/>
			</div>
		</div>
	);
};

export default ModalComment;
