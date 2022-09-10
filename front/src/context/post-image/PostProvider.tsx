import { useReducer, useEffect } from 'react';
import {
	getAllPostsApi,
	getCommentsPostApi,
	updatePostApi,
	uploadPostApi,
	addCommentByPostApi,
	updateCommentPostApi,
	getPostByUserApi,
} from '../../api/postApi';
import { IPostUser, IPostState } from '../../interface';
import { ICommentPost, IPostEdite } from '../../interface/post';
import { PostContext } from './PostContext';
import { postReducer } from './postReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: IPostState = {
	postAll: [],
	postsByUser: [],
	commentByPost: [],
	loading: false,
	errorMessage: null,
};

export const PostProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

	const getAllPosts = async () => {
		try {
			const response = await getAllPostsApi();
			if (response.data) {
				const posts: IPostUser[] = response.data;
				dispatch({ type: 'LOADING_ALL_POST_SUCCESS', payload: posts });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getPostUser = async () => {
		dispatch({ type: 'LOADING_POST_USER' });
		try {
			const response = await getPostByUserApi();
			const posts: IPostUser[] = response.data;
			dispatch({ type: 'LOAD_POST_USER_SUCCESS', payload: posts });
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				dispatch({ type: 'LOAD_POST_USER_ERROR', payload: error.message });
			}
		}
	};
	/**
	 * GetCommentsPost is a function that takes a string as a parameter and returns a promise that
	 * resolves to an array of comments.
	 * @param {string} imgId - string
	 */
	const getCommentsPost = async (imgId: string) => {
		dispatch({ type: 'LOAD_COMMENTS_POST' });
		try {
			const response = await getCommentsPostApi(imgId);
			if (response.data) {
				const comments: ICommentPost[] = response.data;
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

	const updatePost = async (post: IPostEdite) => {
		try {
			const response = await updatePostApi(post);
			console.log('response', response);
		} catch (error) {
			console.log('catch', error);
		}
	};

	const uploadPost = async (data: any) => {
		const response = await uploadPostApi(data);
		console.log(response);
	};

	const addCommentByPost = async (id: string, comment: string) => {
		try {
			const response = await addCommentByPostApi(id, comment);
			console.log(response);
		} catch (error) {
			console.log('cathch', error);
		}
	};

	const updateCommentPost = async (id: string, comment: string) => {
		const response = await updateCommentPostApi(id, comment);
		console.log(response);
	};

	const findPostById = (id: string) => {
		const postFound: IPostUser | undefined = state.postAll.find(
			p => p._id === id
		);
		return postFound;
	};

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<PostContext.Provider
			value={{
				state,
				getPostUser,
				uploadPost,
				updatePost,
				findPostById,
				getCommentsPost,
				addCommentByPost,
				updateCommentPost,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
