import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../context/post-image/PostContext';
import { IPostUser } from '../interface';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const ProfilePost = () => {
	const [postById, setPostById] = useState<IPostUser>();
	const { id } = useParams();
	const { getCommentsPost, findPostById } = useContext(PostContext);

	useEffect(() => {
		getCommentsPost(id!);
	}, []);

	useEffect(() => {
		const postFound = findPostById(id!);
		setPostById(postFound);
	}, []);
	return (
		<div className="mt-32">
			{postById ? (
				<Card
					id={postById._id}
					username={
						typeof postById.userId !== 'string' ? postById.userId.username : ''
					}
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
