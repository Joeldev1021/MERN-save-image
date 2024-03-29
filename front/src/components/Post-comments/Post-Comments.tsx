import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import FormComment from './FormComment';
import { ICommentPost } from '../../interface/post';
import { useComment } from '../../hooks/useComment';
import Spinner from '../Spinner';
import toast, { Toaster } from 'react-hot-toast';

function PostComments({ author, desc }: { author: string; desc: string }) {
	const { id } = useParams();
	const { state, addCommentByPost } = useComment();
	const [comment, setComment] = useState<string>('');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await addCommentByPost(id!, comment);
		toast.success('comment added successfully');
		setComment('');
	};

	console.log(state.commentByPost);

	return (
		<section className="place-items-center border   h-auto  ">
			<Toaster />
			<div className="px-2 py-4 bg-white rounded-xl  mx-auto w-4/5 sm:max-w-md sm:px-5 ">
				<FormComment
					handleSubmit={handleSubmit}
					comment={comment}
					setComment={setComment}
				/>
				<div className="my-4">
					<small className="text-base font-bold text-gray-700 ml-1">
						{state.commentByPost ? state.commentByPost.length : 4} comments
					</small>
					{state.commentByPost.length > 0 ? (
						state.commentByPost.map((cm: ICommentPost) => (
							<CommentSection
								key={cm._id}
								id={cm._id}
								avatar={cm.userId.avatar}
								username={cm.userId.username}
								likes={cm.likes}
								comment={cm.comment}
								createdAt={cm.created_at}
								author={author}
								desc={desc}
								replyTo={cm.replyToId}
							/>
						))
					) : (
						<div className="relative">
							<Spinner size="12" />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default PostComments;
