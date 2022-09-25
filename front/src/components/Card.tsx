import React, { useState, useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import ListGroup from './ListGroup';
import IconComment from './Icons/IconComment';
import PostComments from './Post-comments/Post-Comments';
import { AuthContext } from '../context/auth/AuthContext';
import { PostContext } from '../context/post-image/PostContext';

interface CardProps {
	id: string;
	username?: string;
	authorId?: string;
	title: string;
	desc: string;
	img: string;
	createdAt: string;
	likes: string[];
	comments: string[];
	showComments?: boolean;
}

const urlMontain = 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg';
const Card = ({
	id,
	username,
	authorId,
	title,
	desc,
	img,
	createdAt,
	likes,
	comments,
	showComments,
}: CardProps) => {
	const navigate = useNavigate();
	const { state } = useContext(AuthContext);
	const { addLikePost, removeLikePost } = useContext(PostContext);

	const [showListGroupPost, setShowListGroupPost] = useState(false);

	const handleLikePost = async () => {
		if (state.user) {
			const userId = state.user?._id || '';
			if (likes.includes(userId)) removeLikePost(id, userId);
			// add like post
			else addLikePost(id, userId);
		}
	};

	const handleClick = async () => {
		navigate(`/post/${id}`, { replace: true });
	};

	return (
		<div className="mx-auto  px-4 py-8 max-w-xl my-2 relative">
			{showListGroupPost && state.user?._id === authorId && (
				<ListGroup id={id} />
			)}
			<FaEllipsisV
				color="white"
				onClick={() => setShowListGroupPost(!showListGroupPost)}
				className="absolute right-[20px] top-[40px] cursor-pointer"
			/>
			<div className="bg-white shadow-2xl   rounded-lg mb-6 tracking-wide">
				<div className="md:flex-shrink-0" onClick={() => handleClick()}>
					<img
						src={img || urlMontain}
						alt="mountains"
						className="w-full h-64 rounded-lg rounded-b-none object-cover"
					/>
				</div>
				<div className="px-4 py-2 mt-2">
					<p className="font-bold px-2 text-[18px] text-gray-800 tracking-normal">
						{title}
					</p>
					<p className="text-sm text-gray-700 px-2 mr-1">{desc}</p>
					<div className="flex items-center justify-between mt-2 mx-6">
						<p className="flex items-center text-red-500  -ml-3 text-[19px]">
							<span className="cursor-pointer" onClick={() => handleLikePost()}>
								{state.user && likes.includes(state.user?._id) ? (
									<BsHeartFill />
								) : (
									<BsHeart />
								)}
							</span>
							<span className="text-gray-700 ml-1 text-[16px]">
								{likes && likes.length}
							</span>
						</p>
						<p
							onClick={() => handleClick()}
							className="flex text-gray-700 hover:cursor-pointer"
						>
							<IconComment />
							{comments && comments.length}
						</p>
					</div>
					<div className="author flex items-center -ml-3 my-3">
						<div className="user-logo">
							<img
								className="w-12 h-12 object-cover rounded-full mx-4  shadow"
								src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
								alt="avatar"
							/>
						</div>
						<h2 className="text-sm tracking-tighter text-gray-900">
							<span>{username || 'By Mohammed Ibrahim'} </span>{' '}
							<span className="text-gray-600">
								<TimeAgo datetime={createdAt} locale="vi" />
							</span>
						</h2>
					</div>
				</div>
				{showComments ? <PostComments author={username!} desc={desc} /> : null}
			</div>
		</div>
	);
};

export default Card;
