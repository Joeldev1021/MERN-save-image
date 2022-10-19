import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPostUser } from '../interface';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { useComment } from '../hooks/useComment';
import { usePost } from '../hooks/usePost';

const ProfilePost = () => {
	const [postById, setPostById] = useState<IPostUser>();
	const { id } = useParams();
	const { findPostById, state, getPostUser } = usePost();
	const { getCommentsPost } = useComment();

	useEffect(() => {
		getCommentsPost(id!);
		if (state.postsByUser.length === 0) {
			getPostUser();
		}
	}, []);

	useEffect(() => {
		const postFound = findPostById(id!);
		setPostById(postFound);
	}, [state.postsByUser]);
	console.log(postById);
	return (
		<div className="mt-32">
			{postById ? (
				<Card
					id={postById._id}
					username={postById.userId.username}
					avatar={postById.userId.avatar || ''}
					title={postById.title}
					desc={postById.description}
					img={postById.imgUrl}
					likes={postById.likes}
					comments={postById.comments}
					createdAt={postById.created_at}
					showComments={true}
				/>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default ProfilePost;
