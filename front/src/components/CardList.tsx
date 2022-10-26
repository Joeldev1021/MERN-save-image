import { useEffect, useState } from 'react';
import { usePost } from '../hooks/usePost';
import { IPostUser } from '../interface';
import Card from './Card';
import Spinner from './Spinner';

interface Props {
	searchPost: string;
}

const CardList = ({ searchPost }: Props) => {
	const { state } = usePost();
	const [filterPost, setFilterPost] = useState<IPostUser[]>(state.postAll);
	// TODO: hooks
	useEffect(() => {
		if (searchPost.length > 0) {
			setFilterPost(
				state.postAll.filter(
					post =>
						post.title
							.toLocaleLowerCase()
							.includes(searchPost.toLocaleLowerCase()) ||
						post.description
							.toLocaleLowerCase()
							.includes(searchPost.toLocaleLowerCase())
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
			{filterPost.length > 0 ? (
				filterPost.map((post: IPostUser) => {
					return (
						<Card
							key={post._id}
							id={post._id}
							authorId={post.userId._id}
							username={post.userId.username}
							title={post.title}
							desc={post.description}
							img={post.imgUrl}
							createdAt={post.created_at}
							likes={post.likes}
							avatar={post.userId.avatar}
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
