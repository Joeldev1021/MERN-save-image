import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { PostContext } from '../context/post-image/PostContext';
import Card from '../components/Card';
import { IPostUser } from '../interface';

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
			{state.token ? (
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
				<h1>no login</h1>
			)}
		</div>
	);
};

export default MyPost;
