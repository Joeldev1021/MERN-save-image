import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import IconComment from './Icons/IconComment';

interface CardProps {
	id: string;
	title: string;
	desc: string;
	img: string;
	createdAt: string;
	likes: string[];
	comments: string[];
}
const urlMontain = 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg';
const CardDesing = ({
	id,
	title,
	desc,
	img,
	createdAt,
	likes,
	comments,
}: CardProps) => {
	const navigate = useNavigate();

	const handleClick = async (id: string) => {
		navigate(`/post/${id}`, { replace: true });
	};
	return (
		<div
			className="mx-auto px-4 py-8 max-w-xl my-2"
			onClick={() => handleClick(id)}
		>
			<div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
				<div className="md:flex-shrink-0">
					<img
						src={img || urlMontain}
						alt="mountains"
						className="w-full h-64 rounded-lg rounded-b-none object-cover"
					/>
				</div>
				<div className="px-4 py-2 mt-2">
					<h2 className="font-bold text-2xl text-gray-800 tracking-normal">
						{title}
					</h2>
					<p className="text-sm text-gray-700 px-2 mr-1">
						{desc} consectetur adipisicing elit. Tempora reiciendis ad
						architecto at aut placeat quia, minus dolor praesentium officia
						maxime deserunt porro amet ab debitis deleniti modi soluta
						similique...
					</p>
					<div className="flex items-center justify-between mt-2 mx-6">
						<p className="flex items-center text-red-500  -ml-3 text-[19px]">
							<BsHeart />
							<span className="text-gray-700 ml-1 text-[16px]">
								{likes && likes.length}
							</span>
						</p>
						<p className="flex text-gray-700">
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
							<span>By Mohammed Ibrahim</span>{' '}
							<span className="text-gray-600">
								<TimeAgo date={createdAt} />
							</span>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDesing;
