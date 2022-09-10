import { createContext } from 'react';
import { IPostUser, IPostState } from '../../interface';
import { IPostEdite } from '../../interface/post';

export type PostContextProps = {
	state: IPostState;
	getPostUser: () => void;
	getCommentsPost: (imgId: string) => void;
	findPostById: (id: string) => IPostUser | undefined;
	uploadPost: (data: any) => void;
	updatePost: (data: IPostEdite) => void;
	addCommentByPost: (id: string, comment: string) => void;
	updateCommentPost: (id: string, comment: string) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
