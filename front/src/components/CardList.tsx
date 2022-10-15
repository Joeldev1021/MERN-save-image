import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';
import Card from './Card';
import Spinner from './Spinner';

interface Props {
	searchPost: string;
}

const CardList = ({ searchPost }: Props) => {
	const { state } = useContext(PostContext);
	const [filterPost, setFilterPost] = useState<IPostUser[]>(state.postAll);

	useEffect(() => {
		if (searchPost.length > 0) {
			setFilterPost(
				state.postAll.filter(
					post =>
						post.title.toLocaleLowerCase().includes(searchPost) ||
						post.description.toLocaleLowerCase().includes(searchPost)
				)
			);
		} else {
			setFilterPost(state.postAll);
		}
	}, [searchPost, state.postAll]);
	return (
		<section className="mt-40 mx-auto px-4 max-w-screen-xl lg:px-8">
			<div className="text-center">
				<h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
				<p className="mt-3 text-gray-500">
					Blogs that are loved by the community. Updated every hour.
				</p>
			</div>
			{state.postAll.length > 0 ? (
				filterPost.map((post: IPostUser) => {
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
				})
			) : (
				<Spinner />
			)}
		</section>
	);
};

export default CardList;
