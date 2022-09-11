import { createContext } from 'react';
import { IPostUser, IPostState } from '../../interface';
import { IPostEdite, IPostUpload } from '../../interface/post';

export type PostContextProps = {
	state: IPostState;
	uploadPost: (data: IPostUpload) => void;
	updatePost: (data: IPostEdite) => void;
	getPostUser: () => void;
	deletePost: (id: string) => void;
	findPostById: (id: string) => IPostUser | undefined;
	getCommentsPost: (imgId: string) => void;
	addCommentByPost: (id: string, comment: string) => void;
	updateCommentPost: (id: string, comment: string) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
