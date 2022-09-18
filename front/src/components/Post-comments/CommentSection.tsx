import { useContext, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';
import { AuthContext } from '../../context/auth/AuthContext';
import { PostContext } from '../../context/post-image/PostContext';
import IconReply from '../Icons/IconReply';
import IconShare from '../Icons/IconShare';
import ListGroupCmt from '../ListGroupCmt';
import ModalEditeComment from '../ModalEditeComment';
interface CommentProps {
	id: string;
	avatar: string;
	createdAt: string;
	username: string;
	comment: string;
	author: string;
	desc: string;
}

const CommentSection = ({
	id,
	avatar,
	username,
	comment,
	createdAt,
	author,
	desc,
}: CommentProps) => {
	const { state } = useContext(AuthContext);
	const { deleteCommentPost } = useContext(PostContext);
	const [showListGroup, setShowListGroup] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
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
		if (e === 'close') {
			return setShowModal(false);
		}
		if (e.target.classList.contains('fixed')) {
			setShowModal(false);
		}
	};

	return (
		<div className="flex flex-row mx-auto justify-between px-1 py-1 relative">
			<FaEllipsisV
				color="gray"
				onClick={() => setShowListGroup(!showListGroup)}
				className="absolute right-[20px] top-[20px] cursor-pointer"
			/>
			{showListGroup && isUser && (
				<ListGroupCmt handleListGroup={handleListGroup} />
			)}
			{showModal && (
				<ModalEditeComment
					onClose={onClose}
					author={author}
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
			<div className="flex-1 pl-1">
				<div className="text-base font-semibold text-gray-600">
					{username}
					<span className="text-sm font-normal text-gray-500">
						- Feb 11, 2022
					</span>
				</div>
				<div className="text-sm text-gray-600">{comment}</div>
				<div className="flex items-center text-sm mt-1 space-x-3">
					<a
						href="#"
						className="flex items-center text-blue-500 hover:text-blue-600"
					>
						<IconReply />
						<span className="font-semibold">2 Reply</span>
					</a>
					<p className="flex items-center text-red-500 hover:text-red-600 group">
						{/* <span className="cursor-pointer" onClick={() => handleLikePost()}>
							{state.user && likes.includes(state.user?._id) ? (
								<BsHeartFill />
							) : (
								<BsHeart />
							)}
						</span> */}
						<BsHeart />
						<span className="font-semibold mx-1">11</span>
					</p>
					<a
						href="#"
						className="flex items-center text-blue-500 hover:text-blue-600"
					>
						<IconShare />
						<span className="font-semibold">Share</span>
					</a>
				</div>
				{/* --- */}
				<ReplyComment />
			</div>
		</div>
	);
};

export default CommentSection;

const ReplyComment = () => {
	return (
		<div className="flex flex-row mx-auto justify-between mt-4">
			<div className="flex mr-2">
				<div className="items-center justify-center w-10 h-10 mx-auto">
					<img
						alt="profil"
						src="https://images.unsplash.com/photo-1604238473951-bf1492b379f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwYXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						className="object-cover w-10 h-10 mx-auto rounded-full"
					/>
				</div>
			</div>
			<div className="flex-1">
				<div className="text-base font-semibold text-gray-600">
					Amanda J. Rich{' '}
					<span className="text-sm font-normal text-gray-500">
						- Feb 11, 2022
					</span>
				</div>
				<div className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</div>
			</div>
		</div>
	);
};
