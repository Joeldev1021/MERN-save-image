import TimeAgo from 'timeago-react';
import IconReply from '../Icons/IconReply';
import IconShare from '../Icons/IconShare';
import ListGroup from '../ListGroup/ListGroup';
import ModalComment from './ModalComment';
import ReplyComment from './ReplyComment';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IReply } from '../../interface/post';
import { useComment } from '../../hooks/useComment';
import { useAuth } from '../../hooks/useAuth';
interface CommentProps {
	id: string;
	avatar: string;
	createdAt: string;
	username: string;
	comment: string;
	likes: string[];
	author: string;
	desc: string;
	replyTo: IReply[];
}

const listGroupItem = [
	{ title: 'Edite', component: <MdModeEdit /> },
	{ title: 'Delete', component: <MdDelete /> },
	{ title: 'Close', component: <IoMdClose /> },
];
enum actionModalComment {
	EDITE_COMMENT = 'EDITE_COMMENT',
	ADD_REPLY_COMMENT = 'ADD_REPLY_COMMENT',
}

const CommentSection = ({
	id,
	avatar,
	username,
	comment,
	likes,
	createdAt,
	author,
	desc,
	replyTo,
}: CommentProps) => {
	const { state } = useAuth();
	const { deleteCommentPost, addLikeComment } = useComment();
	const [showListGroup, setShowListGroup] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [showModalReply, setShowModalReply] = useState<boolean>(false);
	const [isUser] = useState<boolean>(username === state.user?.username);

	const handleListGroup = (action: string) => {
		const actionCase = action.toLocaleLowerCase();
		if (actionCase === 'close') {
			setShowListGroup(false);
		}
		if (actionCase === 'edite') {
			setShowListGroup(false);
			setShowModal(true);
		}
		if (actionCase === 'delete') {
			deleteCommentPost(id!);
		}
	};

	const onClose = (e: any) => {
		if (e.target.classList.contains('fixed')) {
			setShowModal(false);
			setShowModalReply(false);
		}
	};

	const handleLikeComment = () => {
		const userId = state.user?._id;
		addLikeComment(id, userId!);
	};

	return (
		<div className="flex flex-row mx-auto justify-between px-1 py-1 relative">
			<FaEllipsisV
				color="gray"
				onClick={() => setShowListGroup(!showListGroup)}
				className="absolute right-[20px] top-[20px] cursor-pointer"
			/>
			{showListGroup && isUser && (
				<ListGroup
					handleListGroup={handleListGroup}
					listGroupItem={listGroupItem}
				/>
			)}
			{showModal && (
				<ModalComment
					action={actionModalComment.EDITE_COMMENT}
					onClose={onClose}
					author={author}
					setShowModal={setShowModal}
					desc={desc}
					comment={comment}
					id={id!}
				/>
			)}
			<div className="flex mr-2">
				<div className="items-center justify-center w-12 h-12 mx-auto">
					<img
						alt="profile"
						src={
							avatar ||
							'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
						}
						className="object-cover w-12 h-12 mx-auto rounded-full"
					/>
				</div>
			</div>
			<div className="flex-1 pl-1 ">
				<div className="text-base font-semibold text-gray-600">
					{username}
					<span className="text-sm mx-2 font-normal text-gray-500">
						<TimeAgo datetime={createdAt} locale="vi" />
					</span>
				</div>
				<div className="text-sm text-gray-600">{comment}</div>
				<div className="flex items-center text-sm mt-1 space-x-3">
					{showModalReply && (
						<ModalComment
							action={actionModalComment.ADD_REPLY_COMMENT}
							setShowModal={setShowModalReply}
							onClose={onClose}
							id={id}
						/>
					)}
					<button
						onClick={() => setShowModalReply(!showModalReply)}
						className="flex items-center text-blue-500 hover:text-blue-600"
					>
						<IconReply />
						<span className="font-semibold">{replyTo.length}</span>
					</button>
					<p className="flex items-center text-red-500 hover:text-red-600 group">
						<span
							className="cursor-pointer"
							onClick={() => handleLikeComment()}
						>
							{state.user && likes.includes(state.user?._id) ? (
								<BsHeartFill />
							) : (
								<BsHeart />
							)}
						</span>
						<span className="font-semibold mx-1">{likes.length}</span>
					</p>
					<p className="flex items-center text-blue-500 hover:text-blue-600">
						<IconShare />
						<span className="font-semibold">Share</span>
					</p>
				</div>
				{replyTo.length > 0 &&
					replyTo.map(reply => (
						<ReplyComment
							key={reply._id}
							idReply={reply._id}
							idComment={id}
							username={reply.userId.username}
							avatar={reply.userId.avatar}
							comment={reply.comment}
							likes={reply.likes}
							createdAt={reply.created_at}
						/>
					))}
			</div>
		</div>
	);
};

export default CommentSection;
