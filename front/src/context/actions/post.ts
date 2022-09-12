
export enum PostActionType {
    LOAD_ALL_POST = "LOAD_ALL_POST",
    LOAD_ALL_POST_SUCCESS = "LOAD_ALL_POST_SUCCESS",
    LOAD_ALL_POST_ERROR = "LOAD_ALL_POST_ERROR",
    // load post by user
    LOAD_POST_USER = "LOAD_POST_USER",
    LOAD_POST_USER_SUCCESS = "LOAD_POST_USER_SUCCESS",
    LOAD_POST_USER_ERROR = "LOAD_POST_USER_ERROR",
    /// upload post
    LOAD_UPLOAD_POST = "LOAD_UPLOAD_POST",
    LOAD_UPLOAD_POST_SUCCESS = "LOAD_UPLOAD_POST_SUCCESS",
    LOAD_UPLOAD_POST_ERROR = "LOAD_UPLOAD_POST_ERROR",
    /// update post 
    LOAD_UPDATE_POST = "LOAD_UPDATE_POST",
    LOAD_UPDATE_POST_SUCCESS = "LOAD_UPDATE_POST_SUCCESS",
    LOAD_UPDATE_POST_ERROR = "LOAD_UPDATE_POST_ERROR",
    // delete post
    LOAD_DELETE_POST = "LOAD_DELETE_POST",
    LOAD_DELETE_POST_SUCCESS = "LOAD_DELETE_POST_SUCCESS",
    LOAD_DELETE_POST_ERROR = "LOAD_DELETE_POST_ERROR",
    // comment post
    LOAD_COMMENTS_POST = "LOAD_COMMENTS_POST",
    LOAD_COMMENTS_POST_SUCCESS = "LOAD_COMMENTS_POST_SUCCESS",
    LOAD_COMMENTS_POST_ERROR = "LOAD_COMMENTS_POST_ERROR",
    // add comment
    LOAD_ADD_COMMENT_POST = "LOAD_ADD_COMMENT_POST",
    LOAD_ADD_COMMENT_POST_SUCCESS = "LOAD_ADD_COMMENT_POST_SUCCESS",
    LOAD_ADD_COMMENT_POST_ERROR = "LOAD_ADD_COMMENT_POST_ERROR",
}