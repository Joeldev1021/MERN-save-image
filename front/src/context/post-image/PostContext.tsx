import { createContext } from 'react';
import { IPostUser, IPostState } from '../../interface';

export type PostContextProps = {
	state: IPostState;
	posts: IPostUser[] | [];
	getPost: (token: string) => void;
};

export const PostContext = createContext<PostContextProps>(
	{} as PostContextProps
);
