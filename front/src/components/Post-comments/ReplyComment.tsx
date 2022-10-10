import { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import TimeAgo from 'timeago-react';
import { AuthContext } from '../../context/auth/AuthContext';
import { PostContext } from '../../context/post-image/PostContext';
import IconReply from '../Icons/IconReply';
import IconShare from '../Icons/IconShare';

interface ReplyProps {
	idReply: string;
	avatar: string;
	username: string;
	comment: string;
	likes: string[];
	createdAt: string;
}

const ReplyComment = ({
	idReply,
	avatar,
	username,
	comment,
	likes,
	createdAt,
}: ReplyProps) => {
	const { addLikeReply } = useContext(PostContext);
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
						<button className="flex items-center text-blue-500 hover:text-blue-600">
							<IconReply />
							<span className="font-semibold">2 Reply</span>
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
						<p className="flex items-center text-blue-500 hover:text-blue-600">
							<IconShare />
							<span className="font-semibold">Share</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReplyComment;
