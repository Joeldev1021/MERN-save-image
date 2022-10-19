import React, { useEffect } from 'react';
import Card from '../components/Card';
import { IPostUser } from '../interface';
import Spinner from '../components/Spinner';
import { usePost } from '../hooks/usePost';
import { useAuth } from '../hooks/useAuth';

const MyPost = () => {
	const { state } = useAuth();
	const {
		getPostUser,
		state: { postsByUser },
	} = usePost();

	useEffect(() => {
		getPostUser();
	}, []);
	return (
		<div className="mt-40">
			{state.token && postsByUser.length > 0 ? (
				postsByUser.map((post: IPostUser) => {
					return (
						<Card
							key={post._id}
							id={post._id}
							avatar={post.userId.avatar}
							authorId={post.userId._id}
							title={post.title}
							desc={post.description}
							img={post.imgUrl}
							comments={post.comments}
							likes={post.likes}
							createdAt={post.created_at}
						/>
					);
				})
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default MyPost;
/* Snniper mobile */
/* <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
		<div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-4 h-6 w-6"></div>
</div> */
