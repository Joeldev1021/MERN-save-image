import React from 'react';
import TimeAgo from 'react-timeago';

interface CardProps {
	username: string;
	comments: number;
	likes: number;
	createdAt: string;
	title: string;
	desc: string;
	img: string;
}

const Card = ({
	title,
	desc,
	img,
	createdAt,
	username,
	comments,
	likes,
}: CardProps) => {
	return (
		<article className="min-w-[300px] max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
			<a href="#">
				<img
					src={img}
					loading="lazy"
					alt={title}
					className="object-cover w-full h-48 rounded-t-md"
				/>
				<div className="flex items-center mt-2 pt-3 ml-4 mr-2">
					<div className="flex-none w-10 h-10 rounded-full">
						<img
							src="https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg"
							className="w-full h-full rounded-full"
							alt={username}
						/>
					</div>
					<div className="ml-3">
						<span className="block text-gray-900">{username}</span>
						<span className="block text-gray-400 text-sm">
							<TimeAgo date={createdAt} />
						</span>
					</div>
				</div>
				<div className="pt-3 ml-4 mr-2 mb-3">
					<h3 className="text-xl text-gray-900">{title}</h3>
					<p className="text-gray-400 text-sm mt-1">{desc}</p>
				</div>
			</a>
		</article>
	);
};

export default Card;
