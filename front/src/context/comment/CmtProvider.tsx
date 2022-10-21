import { useReducer } from 'react';
import {
	addCommentByPostApi,
	addReplyCommentApi,
	deleteCommentPostApi,
	deleteReplyApi,
	getCommentsPostApi,
	updateCommentPostApi,
} from '../../api/commentApi';
import { likeCommentApi, likeReplyApi } from '../../api/likeApi';
import { ICmtState } from '../../interface';
import { CmtActionType } from '../actions/comment';
import { CmtContext } from '../comment/CmtContext';
import { cmtReducer } from './cmtReducer';
import { controllerLikeComment } from './utils';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: ICmtState = {
	commentByPost: [],
	loading: false,
	errorMessage: null,
};

export const CmtProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(cmtReducer, INITIAL_STATE);

	/**
	 * GetCommentsPost is a function that takes a string as a parameter and returns a promise that
	 * resolves to an array of comments.
	 * @param {string} imgId - string
	 */

	const getCommentsPost = async (imgId: string) => {
		console.log('getCommentsPost');
		dispatch({ type: CmtActionType.LOAD_COMMENTS_POST });
		try {
			const response = await getCommentsPostApi(imgId);
			if (response.data) {
				dispatch({
					type: CmtActionType.LOAD_COMMENTS_POST_SUCCESS,
					payload: response.data,
				});
			}
		} catch (error) {
			const err = error as any;
			dispatch({
				type: CmtActionType.LOAD_COMMENTS_POST_ERROR,
				payload: err.response?.data.errorMessage,
			});
		}
	};

	const addCommentByPost = async (id: string, comment: string) => {
		dispatch({ type: CmtActionType.LOAD_ADD_COMMENT_POST });
		try {
			const response = await addCommentByPostApi(id, comment);
			if (response.data) {
				dispatch({
					type: CmtActionType.LOAD_ADD_COMMENT_POST_SUCCESS,
					payload: response.data,
				});
			}
		} catch (error) {
			console.log('catch', error);
		}
	};

	const updateCommentPost = async (postId: string, comment: string) => {
		dispatch({ type: CmtActionType.LOAD_UPDATE_COMMENT_POST });
		try {
			const response = await updateCommentPostApi(postId, comment);
			if (response.data) {
				const updateComment = { ...response.data, comment };
				dispatch({
					type: CmtActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS,
					payload: updateComment,
				});
			}
		} catch (error) {}
	};

	const deleteCommentPost = async (id: string) => {
		dispatch({ type: CmtActionType.LOAD_DELETE_COMMENT_POST });
		try {
			const response = await deleteCommentPostApi(id);
			if (response.data) {
				console.log(response);
				dispatch({
					type: CmtActionType.LOAD_DELETE_COMMENT_POST_SUCCESS,
					payload: response.data._id,
				});
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	const addReplyComment = async (idComment: string, comment: string) => {
		const response = await addReplyCommentApi(idComment, comment);
		try {
			console.log(response);
			if (response.data) {
				dispatch({
					type: CmtActionType.LOAD_ADD_REPLY_COMMENT_SUCCESS,
					payload: { reply: response.data, idComment },
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const deleteReply = async (idReply: string, idComment: string) => {
		try {
			const { data } = await deleteReplyApi(idReply);
			if (data) {
				dispatch({
					type: CmtActionType.LOAD_DELETE_REPLY_COMMENT_SUCCESS,
					payload: { idReply, idComment },
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const addLikeComment = async (idComment: string, userIdByLike: string) => {
		controllerLikeComment({ dispatch, idComment, userId: userIdByLike });
	};

	const likeReply = async (idReply: string) => {
		try {
			const { data } = await likeReplyApi(idReply);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<CmtContext.Provider
			value={{
				state,
				getCommentsPost,
				addCommentByPost,
				updateCommentPost,
				deleteCommentPost,
				addReplyComment,
				deleteReply,
				addLikeComment,
				likeReply,
			}}
		>
			{children}
		</CmtContext.Provider>
	);
};
