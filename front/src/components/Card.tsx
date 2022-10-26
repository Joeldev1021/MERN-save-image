import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import ListGroup from './ListGroup/ListGroup';
import IconComment from './Icons/IconComment';
import PostComments from './Post-comments/Post-Comments';
import { MdDelete, MdModeEdit, MdOutlineCopyAll } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { usePost } from '../hooks/usePost';
import { useAuth } from '../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const listGroupItem = [
	{ title: 'Edite', component: <MdModeEdit /> },
	{ title: 'Delete', component: <MdDelete /> },
	{ title: 'Copy Link', component: <MdOutlineCopyAll /> },
	{ title: 'Close', component: <IoMdClose /> },
];

const urlMontain = 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg';
interface CardProps {
	id: string;
	username?: string;
	authorId?: string;
	avatar: string;
	title: string;
	desc: string;
	img: string;
	createdAt: string;
	likes: string[];
	comments: string[];
	showComments?: boolean;
}

const Card = ({
	id,
	username,
	authorId,
	avatar,
	title,
	desc,
	img,
	createdAt,
	likes,
	comments,
	showComments,
}: CardProps) => {
	const { state } = useAuth();
	const { addLikePost, deletePost } = usePost();

	const [showListGroupPost, setShowListGroupPost] = useState(false);

	const handleLikePost = async () => {
		if (state.user) {
			const userId = state.user?._id || '';
			addLikePost(id, userId);
		}
	};
	const handleDeletePost = async (id: string) => {
		await deletePost(id);
		toast.success('delete post successfully');
	};

	return (
		<>
			<Toaster />
			<div className="mx-auto  px-4 py-8 max-w-xl my-2 relative">
				{showListGroupPost && (
					<ListGroup
						id={id}
						handleDelete={handleDeletePost}
						listGroupItem={listGroupItem}
						setShowListGroup={setShowListGroupPost}
					/>
				)}
				{state.user?._id === authorId && (
					<FaEllipsisV
						color="white"
						onClick={() => setShowListGroupPost(!showListGroupPost)}
						className="absolute right-[20px] top-[40px] cursor-pointer"
					/>
				)}
				<div className="bg-white shadow-2xl   rounded-lg mb-6 tracking-wide">
					<Link className="md:flex-shrink-0" to={`/post/${id}`}>
						<img
							src={img || urlMontain}
							alt="mountains"
							className="w-full h-64 rounded-lg rounded-b-none object-cover"
						/>
					</Link>
					<div className="px-4 py-2 mt-2">
						<p className="font-bold px-2 text-[18px] text-gray-800 tracking-normal">
							{title}
						</p>
						<p className="text-sm text-gray-700 px-2 mr-1">{desc}</p>
						<div className="flex items-center justify-between mt-2 mx-6">
							<p className="flex items-center text-red-500  -ml-3 text-[19px]">
								<button
									className="cursor-pointer"
									onClick={() => handleLikePost()}
								>
									{state.user && likes.includes(state.user?._id) ? (
										<BsHeartFill />
									) : (
										<BsHeart />
									)}
								</button>
								<span className="text-gray-700 ml-1 text-[16px]">
									{likes && likes.length}
								</span>
							</p>
							<Link
								to={`/post/${id}`}
								className="flex text-gray-700 hover:cursor-pointer"
							>
								<IconComment />
								{comments && comments.length}
							</Link>
						</div>
						<div className="author flex items-center -ml-3 my-3">
							<div className="user-logo">
								<img
									className="w-12 h-12 object-cover rounded-full mx-4  shadow"
									src={avatar}
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
					{showComments ? (
						<PostComments author={username!} desc={desc} />
					) : null}
				</div>
			</div>
		</>
	);
};

export default Card;
