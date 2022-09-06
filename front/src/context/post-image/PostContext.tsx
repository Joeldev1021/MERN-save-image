import { createContext } from 'react';
import { IPostUser, IPostState } from '../../interface';

export type PostContextProps = {
	state: IPostState;
	posts: IPostUser[] | [];
	getPost: () => void;
	getCommentsPost: (imgId: string) => void;
	uploadPost: (data: any) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
