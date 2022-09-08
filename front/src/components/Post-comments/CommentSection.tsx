import IconReply from '../Icons/IconReply';
import IconShare from '../Icons/IconShare';
interface CommentProps {
	avatar: string;
	createdAt: string;
	username: string;
	comment: string;
}

const CommentSection = ({
	avatar,
	username,
	comment,
	createdAt,
}: CommentProps) => {
	return (
		<div className="flex flex-row mx-auto justify-between px-1 py-1">
			<div className="flex mr-2">
				<div className="items-center justify-center w-12 h-12 mx-auto">
					<img
						alt="profil"
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
					<a
						href="#"
						className="flex items-center text-red-500 hover:text-red-600 group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 group-hover:text-red-600 mr-1"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="font-semibold ">11</span>
					</a>
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