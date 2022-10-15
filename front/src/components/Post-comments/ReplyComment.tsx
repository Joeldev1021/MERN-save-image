import { useContext } from 'react';
import { BsHeart, BsHeartFill, BsTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import TimeAgo from 'timeago-react';
import { AuthContext } from '../../context/auth/AuthContext';
import { PostContext } from '../../context/post-image/PostContext';

interface ReplyProps {
	idComment: string;
	idReply: string;
	avatar: string;
	username: string;
	comment: string;
	likes: string[];
	createdAt: string;
}

const ReplyComment = ({
	idComment,
	idReply,
	avatar,
	username,
	comment,
	likes,
	createdAt,
}: ReplyProps) => {
	const { addLikeReply, deleteReply } = useContext(PostContext);
	const { state } = useContext(AuthContext);

	const handleLikeReply = () => {
		addLikeReply(idReply);
	};

	return (
		<div className="">
			<div className="flex flex-row mx-auto justify-between mt-4 ">
				<div className="flex mr-2">
					<div className="items-center justify-center w-10 h-10 mx-auto">
						<img
							alt="profile"
							src={avatar}
							className="object-cover w-10 h-10 mx-auto rounded-full"
						/>
					</div>
				</div>
				<div className="flex-1 pl-1 ">
					<div className="text-base font-semibold text-gray-600">
						{username}
						<span className="text-sm font-normal text-gray-500">
							- <TimeAgo datetime={createdAt} locale="vi" />
						</span>
					</div>
					<div className="text-sm text-gray-600">{comment}</div>
					<div className="flex items-center text-sm mt-1 space-x-3">
						<button className="flex items-center text-base text-blue-500 hover:text-blue-600">
							<AiFillEdit />
						</button>
						<p className="flex items-center text-red-500 hover:text-red-600 group">
							<span
								className="cursor-pointer"
								onClick={() => handleLikeReply()}
							>
								{state.user && likes.includes(state.user?._id) ? (
									<BsHeartFill />
								) : (
									<BsHeart />
								)}
							</span>
							<span className="font-semibold mx-1">{likes.length}</span>
						</p>
						<button
							onClick={() => deleteReply(idReply, idComment)}
							className="flex items-center text-red-500 text-base hover:cursor-pointer"
						>
							<BsTrashFill />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReplyComment;
