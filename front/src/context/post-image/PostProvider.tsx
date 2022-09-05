import { useReducer } from 'react';
import { getCommentsPostApi, getPostByUser } from '../../api/postApi';
import { IPostUser, IPostState } from '../../interface';
import { ICommentsPost } from '../../interface/post';
import { PostContext } from './PostContext';
import { postReducer } from './postReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: IPostState = {
	posts: [],
	commentByPost: [],
	loading: false,
	errorMessage: null,
};

export const PostProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

	const getPost = async () => {
		dispatch({ type: 'LOADING_POST' });
		try {
			const response = await getPostByUser();
			const posts: IPostUser[] = response.data;
			dispatch({ type: 'LOAD_POST_SUCCESS', payload: posts });
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				dispatch({ type: 'LOAD_POST_ERROR', payload: error.message });
			}
		}
	};

	const getCommentsPost = async (imgId: string) => {
		dispatch({ type: 'LOAD_COMMENTS_POST' });
		try {
			const response = await getCommentsPostApi(imgId);
			if (response.data) {
				const comments: ICommentsPost[] = response.data;
				dispatch({ type: 'LOAD_COMMENTS_POST_SUCCESS', payload: comments });
			}
		} catch (error) {
			const err = error as any;
			dispatch({
				type: 'LOAD_COMMENTS_POST_ERROR',
				payload: err.response?.data.errorMessage,
			});
		}
	};

	return (
		<PostContext.Provider
			value={{ posts: state.posts, state, getPost, getCommentsPost }}
		>
			{children}
		</PostContext.Provider>
	);
};

/* 	const getPost = async () => {
		dispatch({ type: 'LOADING_POST' });
		try {
			const posts: IPostUser[] = await getPostByUser();
			console.log('post', posts);
			dispatch({ type: 'LOAD_POST_SUCCESS', payload: posts });
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				dispatch({ type: 'LOAD_POST_ERROR', payload: error.message });
			}
		}
	}; */
