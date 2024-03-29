export enum CmtActionType {
    // comment post
    LOAD_COMMENTS_POST = "LOAD_COMMENTS_POST",
    LOAD_COMMENTS_POST_SUCCESS = "LOAD_COMMENTS_POST_SUCCESS",
    LOAD_COMMENTS_POST_ERROR = "LOAD_COMMENTS_POST_ERROR",
    // add comment
    LOAD_ADD_COMMENT_POST = "LOAD_ADD_COMMENT_POST",
    LOAD_ADD_COMMENT_POST_SUCCESS = "LOAD_ADD_COMMENT_POST_SUCCESS",
    LOAD_ADD_COMMENT_POST_ERROR = "LOAD_ADD_COMMENT_POST_ERROR",
    /// update comment 
    LOAD_UPDATE_COMMENT_POST = "LOAD_UPDATE_COMMENT_POST",
    LOAD_UPDATE_COMMENT_POST_SUCCESS = "LOAD_UPDATE_COMMENT_POST_SUCCESS",
    LOAD_UPDATE_COMMENT_POST_ERROR = "LOAD_UPDATE_COMMENTS_POST_ERROR",
    // delete comment 
    LOAD_DELETE_COMMENT_POST = "LOAD_DELETE_COMMENT_POST",
    LOAD_DELETE_COMMENT_POST_SUCCESS = "LOAD_DELETE_COMMENT_POST_SUCCESS",
    LOAD_DELETE_COMMENT_POST_ERROR = "LOAD_DELETE_COMMENT_POST_ERROR",
    /* like handle */
    LOAD_LIKE_COMMENT = "LOAD_LIKE_COMMENT",
    LOAD_LIKE_COMMENT_SUCCESS = "LOAD_LIKE_COMMENT_SUCCESS",
    LOAD_LIKE_COMMENT_ERROR = "LOAD_LIKE_COMMENT_ERROR",

    /* reply comment  */

    LOAD_ADD_REPLY_COMMENT = "LOAD_ADD_REPLY_COMMENT",
    LOAD_ADD_REPLY_COMMENT_SUCCESS = "LOAD_ADD_REPLY_COMMENT_SUCCESS",
    LOAD_ADD_REPLY_COMMENT_ERROR = "LOAD_ADD_REPLY_COMMENT_ERROR",

    LOAD_DELETE_REPLY_COMMENT = "LOAD_DELETE_REPLY_COMMENT",
    LOAD_DELETE_REPLY_COMMENT_SUCCESS = "LOAD_DELETE_REPLY_COMMENT_SUCCESS",
    LOAD_DELETE_REPLY_COMMENT_ERROR = "LOAD_DELETE_REPLY_COMMENT_ERROR",

    LOAD_LIKE_REPLY_SUCCESS = "LOAD_LIKE_REPLY_SUCCESS",

}  