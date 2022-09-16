import { IPostUser, IPostState } from '../../interface';
import { ICommentPost } from '../../interface/post';
import { PostActionType } from '../actions/post';

type PostAction =
    | { type: PostActionType.LOAD_ALL_POST }
    | { type: PostActionType.LOAD_ALL_POST_SUCCESS; payload: IPostUser[] }
    | { type: PostActionType.LOAD_ALL_POST_ERROR; payload: string }
    | { type: PostActionType.LOAD_POST_USER }
    | { type: PostActionType.LOAD_POST_USER_SUCCESS; payload: IPostUser[] }
    | { type: PostActionType.LOAD_POST_USER_ERROR; payload: string }
    /* upload post action  */
    | { type: PostActionType.LOAD_UPLOAD_POST }
    | { type: PostActionType.LOAD_UPLOAD_POST_SUCCESS; payload: IPostUser }
    | { type: PostActionType.LOAD_UPLOAD_POST_ERROR; payload: string }
    /* update post actions */
    | { type: PostActionType.LOAD_UPDATE_POST }
    | { type: PostActionType.LOAD_UPDATE_POST_SUCCESS; payload: IPostUser }
    | { type: PostActionType.LOAD_UPDATE_POST_ERROR; payload: string }
    /* delete post action */
    | { type: PostActionType.LOAD_DELETE_POST }
    | { type: PostActionType.LOAD_DELETE_POST_SUCCESS; payload: string }
    | { type: PostActionType.LOAD_DELETE_POST_ERROR; payload: string }
    /* get comment action */
    | { type: PostActionType.LOAD_COMMENTS_POST }
    | { type: PostActionType.LOAD_COMMENTS_POST_SUCCESS; payload: ICommentPost[] }
    | { type: PostActionType.LOAD_COMMENTS_POST_ERROR; payload: string }
    /* add comment */
    | { type: PostActionType.LOAD_ADD_COMMENT_POST }
    | { type: PostActionType.LOAD_ADD_COMMENT_POST_SUCCESS; payload: ICommentPost }
    | { type: PostActionType.LOAD_ADD_COMMENT_POST_ERROR; payload: string }
    /* update comment */
    | { type: PostActionType.LOAD_UPDATE_COMMENT_POST; }
    | { type: PostActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS; payload: ICommentPost }
    | { type: PostActionType.LOAD_UPDATE_COMMENT_POST_ERROR; payload: string }
    /* delete comment */
    | { type: PostActionType.LOAD_DELETE_COMMENT_POST; }
    | { type: PostActionType.LOAD_DELETE_COMMENT_POST_SUCCESS; payload: string }
    | { type: PostActionType.LOAD_DELETE_COMMENT_POST_ERROR; payload: string }
    /* add like post */
    | { type: PostActionType.LOAD_ADD_LIKE_POST }
    | { type: PostActionType.LOAD_ADD_LIKE_POST_SUCCESS; payload: { idPost: string, userIdByLike: string } }
    /* remove delete */
    | { type: PostActionType.LOAD_REMOVE_LIKE_POST }
    | { type: PostActionType.LOAD_REMOVE_LIKE_POST_SUCCESS; payload: { idPost: string, userIdByLike: string } }

export const postReducer = (state: IPostState, action: PostAction) => {
    switch (action.type) {
        case PostActionType.LOAD_ALL_POST:
            return { ...state, loading: true };
        case PostActionType.LOAD_ALL_POST_SUCCESS:
            return { ...state, postAll: action.payload, loading: false };
        case PostActionType.LOAD_ALL_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // get post user
        case PostActionType.LOAD_POST_USER:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_POST_USER_SUCCESS:
            return {
                ...state,
                postsByUser: action.payload,
                loading: false,
                errorMessage: null,
            };
        case PostActionType.LOAD_POST_USER_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // upload post
        case PostActionType.LOAD_UPLOAD_POST:
            return { ...state, loading: true, };
        case PostActionType.LOAD_UPLOAD_POST_SUCCESS:
            return {
                ...state,
                postAll: [...state.postAll, action.payload],
                postsByUser: [...state.postsByUser, action.payload],
                loading: false,
                errorMessage: null
            };
        case PostActionType.LOAD_UPLOAD_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // update post
        case PostActionType.LOAD_UPDATE_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_UPDATE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.map(post =>
                    post._id === action.payload._id ? action.payload : post
                ),
                postsByUser: state.postsByUser.map(post =>
                    post._id === action.payload._id ? action.payload : post
                ),
                loading: false,
                errorMessage: null
            };
        case PostActionType.LOAD_UPDATE_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // delete post
        case PostActionType.LOAD_DELETE_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_DELETE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.filter(post => post._id !== action.payload),
                postsByUser: state.postsByUser.filter(
                    post => post._id !== action.payload
                ),
                loading: true,
                errorMessage: null,
            };
        case PostActionType.LOAD_DELETE_POST_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // get comment post
        case PostActionType.LOAD_COMMENTS_POST:
            return { ...state, loading: true };
        case PostActionType.LOAD_COMMENTS_POST_SUCCESS:
            return { ...state, loading: false, commentByPost: action.payload };
        case PostActionType.LOAD_COMMENTS_POST_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // add comment post 
        case PostActionType.LOAD_ADD_COMMENT_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_ADD_COMMENT_POST_SUCCESS:
            return { ...state, loading: false, commentByPost: [...state.commentByPost, action.payload] }
        case PostActionType.LOAD_ADD_COMMENT_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload }
        // update comment post 
        case PostActionType.LOAD_UPDATE_COMMENT_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_UPDATE_COMMENT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                commentByPost: state.commentByPost.map(cm => cm._id === action.payload._id ? action.payload : cm)
            }
        case PostActionType.LOAD_UPDATE_COMMENT_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload }
        // delete comment post
        case PostActionType.LOAD_DELETE_COMMENT_POST:
            return { ...state, loading: true }
        case PostActionType.LOAD_DELETE_COMMENT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                commentByPost: state.commentByPost.filter(c => c._id !== action.payload)
            }
        // add like post 
        case PostActionType.LOAD_ADD_LIKE_POST:
            return { ...state, loading: true }
        case PostActionType.LOAD_ADD_LIKE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.map(post => post._id === action.payload.idPost
                    ? { ...post, likes: [...post.likes, action.payload.userIdByLike] }
                    : post
                ),
                loading: false
            }
        // remove like post
        case PostActionType.LOAD_REMOVE_LIKE_POST:
            return { ...state, loading: true }
        case PostActionType.LOAD_REMOVE_LIKE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.map(post => post._id === action.payload.idPost
                    ? { ...post, likes: post.likes.filter(like => like !== action.payload.userIdByLike) }
                    : post),
                loading: false
            }

        default:
            return { ...state };
    }
};

/* case PostActionType.LOAD_LIKE_POST:
            return { ...state, loading: true }
        case PostActionType.LOAD_LIKE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.map(post => {
                    if (post._id === action.payload.idPost) {
                        post.likes = action.payload.likes
                        console.log(post.likes)
                         console.log("userid", action.payload.userId)
                        console.log("likes", post.likes)
                        console.log(post.likes.includes(action.payload.userId))
                        if (post.likes.includes(action.payload.userId)) {
                            post.likes = post.likes.filter(like => like !== action.payload.userId)
                            console.log('dislike')
                        } else {
                            post.likes = [...post.likes, action.payload.userId]
                            console.log('add like')
                        } 
                    }
return post
                }),
loading: false
            }
        */