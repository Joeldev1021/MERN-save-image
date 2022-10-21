import { AxiosError } from 'axios';
import { useReducer, useEffect } from 'react';
import {
	getAllPostsApi,
	updatePostApi,
	uploadPostApi,
	getPostByUserApi,
	deletePostApi,
} from '../../api/postApi';
import { IPostUser, IPostState } from '../../interface';
import { ErrorPostResponse, IPostUpload } from '../../interface/post';
import { PostActionType } from '../actions/post';
import { PostContext } from './PostContext';
import { postReducer } from './postReducer';
import { controllerLikePost } from './utils';

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
		dispatch({ type: PostActionType.LOAD_ALL_POST });
		try {
			const response = await getAllPostsApi();
			if (response.data) {
				const posts: IPostUser[] = response.data;
				dispatch({
					type: PostActionType.LOAD_ALL_POST_SUCCESS,
					payload: posts,
				});
			}
		} catch (error) {
			dispatch({
				type: PostActionType.LOAD_ALL_POST_ERROR,
				payload: 'ups not posts',
			});
		}
	};

	const uploadPost = async (data: IPostUpload) => {
		dispatch({ type: PostActionType.LOAD_UPLOAD_POST });
		try {
			const response = await uploadPostApi(data);
			if (response.data) {
				dispatch({
					type: PostActionType.LOAD_UPLOAD_POST_SUCCESS,
					payload: response.data,
				});
			}
		} catch (error) {
			const err = error as AxiosError;
			console.log(err.response?.data);
			dispatch({
				type: PostActionType.LOAD_UPLOAD_POST_ERROR,
				payload: 'error upload',
			});
		}
	};

	const updatePost = async (post: IPostUser) => {
		dispatch({ type: PostActionType.LOAD_UPDATE_POST });
		try {
			const response = await updatePostApi(post);
			if (response.data) {
				dispatch({
					type: PostActionType.LOAD_UPDATE_POST_SUCCESS,
					payload: post,
				});
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	const deletePost = async (id: string) => {
		dispatch({ type: PostActionType.LOAD_UPDATE_POST });
		try {
			const response = await deletePostApi(id);
			if (response.data) {
				dispatch({
					type: PostActionType.LOAD_DELETE_POST_SUCCESS,
					payload: response.data._id,
				});
			}
		} catch (error) {
			const err = error as AxiosError;
			const data = err.response?.data as ErrorPostResponse;
			dispatch({
				type: PostActionType.LOAD_DELETE_POST_ERROR,
				payload: data.errorMessage,
			});
		}
	};

	const getPostUser = async () => {
		dispatch({ type: PostActionType.LOAD_POST_USER });
		try {
			const response = await getPostByUserApi();
			if (response.data) {
				console.log('post-user', response.data);
				const posts = response.data;
				dispatch({
					type: PostActionType.LOAD_POST_USER_SUCCESS,
					payload: posts,
				});
			}
		} catch (error) {
			console.log('error', error); // change code
		}
	};

	const addLikePost = async (idPost: string, userIdByLike: string) => {
		controllerLikePost({ dispatch, idPost, userId: userIdByLike });
	};

	/**
	 * Find a post by id, if isUser is true, search in postsByUser, otherwise search in postAll
	 * @param {string} id - string - the id of the post
	 * @param {boolean} [isUser] - boolean - this is a flag to determine if we're looking for a post by a
	 * user or all posts.
	 * @returns the postFound variable.
	 */
	const findPostById = (
		id: string,
		isUser?: boolean
	): IPostUser | undefined => {
		const posts = isUser ? state.postsByUser : state.postAll;
		const postFound = posts.find(p => p._id === id);
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
				deletePost,
				findPostById,
				addLikePost,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
