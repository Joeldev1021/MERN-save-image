import { useContext } from 'react';
import { CmtContext } from '../context/comment/CmtContext';

export const useComment = () => {
	return useContext(CmtContext);
};
