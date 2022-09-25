import { AxiosError } from 'axios';
import { useReducer, useEffect } from 'react';
import {
	getAllPostsApi,
	updatePostApi,
	uploadPostApi,
	getPostByUserApi,
	deletePostApi,
} from '../../api/postApi';
import {
	addCommentByPostApi,
	deleteCommentPostApi,
	getCommentsPostApi,
	updateCommentPostApi,
} from '../../api/commentApi';
import { likeCommentApi, likePostApi } from '../../api/likeApi';
import { IPostUser, IPostState } from '../../interface';
import {
	ErrorPostResponse,
	ICommentPost,
	IPostUpload,
} from '../../interface/post';
import { PostActionType } from '../actions/post';
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
			console.log(error);
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
				console.log(response);
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
				console.log(response.data);
				dispatch({
					type: PostActionType.LOAD_DELETE_POST_SUCCESS,
					payload: response.data._id,
				});
			}
		} catch (error) {
			const err = error as AxiosError;
			const data = err.response?.data as ErrorPostResponse;
			console.log(data);
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
	/**
	 * GetCommentsPost is a function that takes a string as a parameter and returns a promise that
	 * resolves to an array of comments.
	 * @param {string} imgId - string
	 */
	const getCommentsPost = async (imgId: string) => {
		dispatch({ type: PostActionType.LOAD_COMMENTS_POST });
		try {
			const response = await getCommentsPostApi(imgId);
			if (response.data) {
				const comments: ICommentPost[] = response.data;
				dispatch({
					type: PostActionType.LOAD_COMMENTS_POST_SUCCESS,
					payload: comments,
				});
			}
		} catch (error) {
			const err = error as any;
			dispatch({
				type: PostActionType.LOAD_COMMENTS_POST_ERROR,
				payload: err.response?.data.errorMessage,
			});
		}
	};

	const addCommentByPost = async (id: string, comment: string) => {
		dispatch({ type: PostActionType.LOAD_ADD_COMMENT_POST });
		try {
			const response = await addCommentByPostApi(id, comment);
			console.log(response);
			if (response.data) {
				dispatch({
					type: PostActionType.LOAD_ADD_COMMENT_POST_SUCCESS,
					payload: response.data,
				});
			}
		} catch (error) {
			console.log('catch', error);
		}
	};

	const updateCommentPost = async (postId: string, comment: string) => {
		dispatch({ type: PostActionType.LOAD_UPDATE_COMMENT_POST });
		try {
			const response = await updateCommentPostApi(postId, comment);
			if (response.data) {
				const updateComment = { ...response.data, comment };
				dispatch({
					type: PostActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS,
					payload: updateComment,
				});
			}
		} catch (error) {
			console.log('catch', error);
		}
	};

	const deleteCommentPost = async (id: string) => {
		dispatch({ type: PostActionType.LOAD_DELETE_COMMENT_POST });
		try {
			const response = await deleteCommentPostApi(id);
			if (response.data) {
				console.log(response);
				dispatch({
					type: PostActionType.LOAD_DELETE_COMMENT_POST_SUCCESS,
					payload: response.data._id,
				});
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	const addLikePost = async (idPost: string, userIdByLike: string) => {
		try {
			dispatch({
				type: PostActionType.LOAD_ADD_LIKE_POST_SUCCESS,
				payload: { idPost, userIdByLike },
			});
			const response = await likePostApi(idPost);
			console.log(response);
		} catch (error) {
			console.log('error', error);
		}
	};

	const removeLikePost = async (idPost: string, userIdByLike: string) => {
		try {
			dispatch({
				type: PostActionType.LOAD_REMOVE_LIKE_POST_SUCCESS,
				payload: { idPost, userIdByLike },
			});
			const response = await likePostApi(idPost);
			console.log(response);
		} catch (error) {
			console.log('error', error);
		}
	};

	const addLikeComment = async (idComment: string, userIdByLike: string) => {
		dispatch({
			type: PostActionType.LOAD_ADD_LIKE_COMMENT_SUCCESS,
			payload: { idComment, userIdByLike },
		});
		console.log(state.commentByPost);
		const response = await likeCommentApi(idComment);
		console.log(response);
	};

	const removeLikeComment = async (idComment: string, userIdByLike: string) => {
		dispatch({
			type: PostActionType.LOAD_REMOVE_LIKE_COMMENT_SUCCESS,
			payload: { idComment, userIdByLike },
		});
		const response = await likeCommentApi(idComment);
	};

	/**
	 * Find a post by id, if isUser is true, search in postsByUser, otherwise search in postAll
	 * @param {string} id - string - the id of the post
	 * @param {boolean} [isUser] - boolean - this is a flag to determine if we're looking for a post by a
	 * user or all posts.
	 * @returns the postFound variable.
	 */
	const findPostById = (id: string, isUser?: boolean) => {
		const posts = isUser ? state.postsByUser : state.postAll;
		const postFound: IPostUser | undefined = posts.find(p => p._id === id);
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
				getCommentsPost,
				addCommentByPost,
				updateCommentPost,
				deleteCommentPost,
				addLikePost,
				removeLikePost,
				addLikeComment,
				removeLikeComment,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
