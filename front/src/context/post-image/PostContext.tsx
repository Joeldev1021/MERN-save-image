import { createContext } from 'react';
import { IPostUser, IPostState } from '../../interface';
import { IPostUpload } from '../../interface/post';

export type PostContextProps = {
	state: IPostState;
	uploadPost: (data: IPostUpload) => void;
	updatePost: (data: IPostUser) => void;
	getPostUser: () => void;
	deletePost: (id: string) => void;
	findPostById: (id: string, isUser?: boolean) => IPostUser | undefined;
	getCommentsPost: (imgId: string) => void;
	addCommentByPost: (id: string, comment: string) => void;
	updateCommentPost: (id: string, comment: string) => void;
	deleteCommentPost: (id: string) => void;
	addLikePost: (idPost: string, userIdByLike: string) => void;
	removeLikePost: (idPost: string, userIdBylike: string) => void;
	addLikeComment: (idComment: string, userIdByLike: string) => void;
	removeLikeComment: (idComment: string, userIdByLike: string) => void;
	addReplyComment: (idComment: string, comment: string) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
