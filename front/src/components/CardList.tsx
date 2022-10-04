import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';
import Card from './Card';

interface Props {
	searchPost: string;
}

const CardList = ({ searchPost }: Props) => {
	const { state } = useContext(PostContext);
	const [filterPost, setFilterPost] = useState<IPostUser[]>(state.postAll);

	useEffect(() => {
		setFilterPost(
			filterPost.filter(post => !post.title.toLowerCase().includes(searchPost))
		);
	}, [searchPost, state.postAll]);

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
					const authorId =
						typeof post.userId === 'object' ? post.userId._id : post.userId;
					const username =
						typeof post.userId === 'object' && post.userId.username;
					return (
						<Card
							key={post._id}
							id={post._id}
							authorId={authorId}
							username={username || ''}
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
