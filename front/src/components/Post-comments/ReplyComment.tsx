import { BsHeartFill } from 'react-icons/bs';
import TimeAgo from 'timeago-react';
import IconReply from '../Icons/IconReply';
import IconShare from '../Icons/IconShare';

interface ReplyProps {
	avatar: string;
	username: string;
	comment: string;
	createdAt: string;
}

const ReplyComment = ({ avatar, username, comment, createdAt }: ReplyProps) => {
	return (
		<div className="bg-red-400">
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
				</div>
			</div>
		</div>
	);
};

export default ReplyComment;
