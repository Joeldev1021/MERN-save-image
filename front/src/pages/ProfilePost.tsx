import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDesing from '../components/CardDesing';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';

const ProfilePost = () => {
	const [postById, setPostById] = useState<IPostUser>();
	const { id } = useParams();
	const { getCommentsPost, state } = useContext(PostContext);

	useEffect(() => {
		getCommentsPost(id!);
	}, []);

	useEffect(() => {
		getPostById(id!);
	}, [id]);

	const getPostById = (id: string) => {
		const postFound: IPostUser | undefined = state.postAll.find(
			post => post._id === id
		);
		console.log(state.commentByPost);
		setPostById(postFound);
	};

	return (
		<div className="mt-32">
			{postById ? (
				<CardDesing
					id={postById._id}
					title={postById.title}
					desc={postById.description}
					img={postById.imgUrl}
					likes={postById.likes}
					comments={postById.comments}
					createdAt={postById.created_at}
					showComments={true}
				/>
			) : (
				<h2>loading...</h2>
			)}
		</div>
	);
};

export default ProfilePost;
