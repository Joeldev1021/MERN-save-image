import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { PostContext } from '../context/post-image/PostContext';
import CardDesing from '../components/CardDesing';

const MyPost = () => {
	const { state } = useContext(AuthContext);
	const { posts, getPost } = useContext(PostContext);
	useEffect(() => {
		getPost();
	}, []);
	return (
		<div className="mt-40">
			{state.token ? (
				posts.map(post => {
					return (
						<CardDesing
							key={post._id}
							id={post._id}
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
