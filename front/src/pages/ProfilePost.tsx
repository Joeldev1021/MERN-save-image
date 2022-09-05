import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComments from '../components/Post-comments/Post-Comments';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';

const ProfilePost = () => {
	const [postById, setPostById] = useState<IPostUser>();
	const { id } = useParams();
	const { getCommentsPost, state } = useContext(PostContext);

	useEffect(() => {
		getCommentsPost(id!);
	}, []);
	console.log(state);
	return (
		<div>
			{/* <CardDesing
				id={post!._id}
				title={post!.title}
				desc={post!.description}
				img={post!.imgUrl}
				likes={post!.likes}
				comments={post!.comments}
				createdAt={post!.created_at}
			/> */}

			<PostComments />
		</div>
	);
};

export default ProfilePost;
