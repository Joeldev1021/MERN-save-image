import { ICmtState } from '../../interface';
import { ICommentPost, IReply } from '../../interface/post';
import { CmtActionType } from '../actions/comment';

export type CmtAction =
	/* get comment action */
	| { type: CmtActionType.LOAD_COMMENTS_POST }
	| { type: CmtActionType.LOAD_COMMENTS_POST_SUCCESS; payload: ICommentPost[] }
	| { type: CmtActionType.LOAD_COMMENTS_POST_ERROR; payload: string }
	/* add comment */
	| { type: CmtActionType.LOAD_ADD_COMMENT_POST }
	| { type: CmtActionType.LOAD_ADD_COMMENT_POST_SUCCESS; payload: ICommentPost }
	| { type: CmtActionType.LOAD_ADD_COMMENT_POST_ERROR; payload: string }
	/* update comment */
	| { type: CmtActionType.LOAD_UPDATE_COMMENT_POST }
	| {
			type: CmtActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS;
			payload: ICommentPost;
	  }
	| { type: CmtActionType.LOAD_UPDATE_COMMENT_POST_ERROR; payload: string }
	/* delete comment */
	| { type: CmtActionType.LOAD_DELETE_COMMENT_POST }
	| { type: CmtActionType.LOAD_DELETE_COMMENT_POST_SUCCESS; payload: string }
	| { type: CmtActionType.LOAD_DELETE_COMMENT_POST_ERROR; payload: string }
	| {
			type: CmtActionType.LOAD_ADD_REPLY_COMMENT_SUCCESS;
			payload: { reply: IReply; idComment: string };
	  }
	/* delete reply */
	| {
			type: CmtActionType.LOAD_DELETE_REPLY_COMMENT_SUCCESS;
			payload: { idReply: string; idComment: string };
	  }
	| {
			type: CmtActionType.LOAD_LIKE_COMMENT_SUCCESS;
			payload: { idComment: string; userId: string };
	  };

export const cmtReducer = (state: ICmtState, action: CmtAction) => {
	switch (action.type) {
		/* ==== signup ===== */
		// get comment post
		case CmtActionType.LOAD_COMMENTS_POST:
			return { ...state, loading: true };
		case CmtActionType.LOAD_COMMENTS_POST_SUCCESS:
			return { ...state, loading: false, commentByPost: action.payload };
		case CmtActionType.LOAD_COMMENTS_POST_ERROR:
			return { ...state, errorMessage: action.payload, loading: false };
		// add comment post
		case CmtActionType.LOAD_ADD_COMMENT_POST:
			return { ...state, loading: true, errorMessage: null };
		case CmtActionType.LOAD_ADD_COMMENT_POST_SUCCESS:
			return {
				...state,
				loading: false,
				commentByPost: [...state.commentByPost, action.payload],
			};
		case CmtActionType.LOAD_ADD_COMMENT_POST_ERROR:
			return { ...state, loading: false, errorMessage: action.payload };
		// update comment post
		case CmtActionType.LOAD_UPDATE_COMMENT_POST:
			return { ...state, loading: true, errorMessage: null };
		case CmtActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS:
			return {
				...state,
				loading: false,
				commentByPost: state.commentByPost.map(cm =>
					cm._id === action.payload._id ? action.payload : cm
				),
			};
		case CmtActionType.LOAD_UPDATE_COMMENT_POST_ERROR:
			return { ...state, loading: false, errorMessage: action.payload };
		// delete comment post
		case CmtActionType.LOAD_DELETE_COMMENT_POST:
			return { ...state, loading: true };
		case CmtActionType.LOAD_DELETE_COMMENT_POST_SUCCESS:
			return {
				...state,
				loading: false,
				commentByPost: state.commentByPost.filter(
					c => c._id !== action.payload
				),
			};
		case CmtActionType.LOAD_ADD_REPLY_COMMENT_SUCCESS:
			return {
				...state,
				loading: false,
				commentByPost: state.commentByPost.map(cm =>
					cm._id === action.payload.idComment
						? {
								...cm,
								replyToId: [...cm.replyToId, action.payload.reply],
						  }
						: cm
				),
			};
		case CmtActionType.LOAD_DELETE_REPLY_COMMENT_SUCCESS:
			return {
				...state,
				loading: false,
				commentByPost: state.commentByPost.map(cm =>
					cm._id === action.payload.idComment
						? {
								...cm,
								replyToId: cm.replyToId.filter(
									reply => reply._id !== action.payload.idReply
								),
						  }
						: cm
				),
			};

		case CmtActionType.LOAD_LIKE_COMMENT_SUCCESS: {
			return {
				...state,
				commentByPost: state.commentByPost.map(cm =>
					cm._id === action.payload.idComment
						? {
								...cm,
								likes: cm.likes.includes(action.payload.userId)
									? cm.likes.filter(like => like !== action.payload.userId)
									: [...cm.likes, action.payload.userId],
						  }
						: cm
				),
				loading: false,
			};
		}
		default:
			return { ...state };
	}
};
