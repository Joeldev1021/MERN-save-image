import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { PostContext } from '../context/post-image/PostContext';
import Card from '../components/Card';
import { IPostUser } from '../interface';
import Spinner from '../components/Spinner';

const MyPost = () => {
	const { state } = useContext(AuthContext);
	const {
		getPostUser,
		state: { postsByUser },
	} = useContext(PostContext);

	useEffect(() => {
		getPostUser();
	}, []);

	return (
		<div className="mt-40">
			{state.token && postsByUser.length > 0 ? (
				postsByUser.map((post: IPostUser) => {
					/// validate if username exist
					const user =
						typeof post.userId !== 'string'
							? post.userId.username
							: post.userId;
					return (
						<Card
							key={post._id}
							id={post._id}
							authorId={user}
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
