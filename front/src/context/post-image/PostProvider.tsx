import { useReducer } from 'react';
import { getPostByToken } from '../../api';
import { IPostUser, IPostState } from '../../interface';
import { PostContext } from './PostContext';
import { postReducer } from './postReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: IPostState = {
	posts: [],
	loading: false,
	errorMessage: null,
};

export const PostProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

	const getPost = async (token: string) => {
		const posts: IPostUser[] = await getPostByToken(token);
		console.log(posts);
		dispatch({ type: 'LOAD_POST_SUCCESS', payload: posts });
	};

	return (
		<PostContext.Provider value={{ posts: state.posts, state, getPost }}>
			{children}
		</PostContext.Provider>
	);
};
