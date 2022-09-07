import { useContext } from 'react';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';
import CardDesing from './CardDesing';

const CardList = () => {
	const { state } = useContext(PostContext);

	return (
		<section className="mt-40 mx-auto px-4 max-w-screen-xl lg:px-8">
			<div className="text-center">
				<h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
				<p className="mt-3 text-gray-500">
					Blogs that are loved by the community. Updated every hour.
				</p>
			</div>
			{state.postAll &&
				state.postAll.map((post: IPostUser) => {
					const username =
						typeof post.userId === 'object'
							? post.userId.username
							: post.userId;
					return (
						<CardDesing
							key={post._id}
							id={post._id}
							username={username}
							title={post.title}
							desc={post.description}
							img={post.imgUrl}
							createdAt={post.created_at}
							likes={post.likes}
							comments={post.comments}
						/>
					);
				})}
		</section>
	);
};

export default CardList;
