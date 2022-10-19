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
	addLikePost: (idPost: string, userIdByLike: string) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
