import { useContext } from 'react';
import { PostContext } from '../context/post-image/PostContext';

export const usePost = () => {
	return useContext(PostContext);
};
