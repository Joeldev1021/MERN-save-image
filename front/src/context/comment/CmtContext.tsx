import { createContext } from 'react';
import { ICmtState } from '../../interface';

export type CmtContextProps = {
	state: ICmtState;
	getCommentsPost: (imgId: string) => void;
	addCommentByPost: (id: string, comment: string) => void;
	updateCommentPost: (id: string, comment: string) => void;
	deleteCommentPost: (id: string) => void;
	addReplyComment: (idComment: string, comment: string) => void;
	addLikeComment: (idComment: string, userIdByLike: string) => void;
	likeReply: (idReply: string) => void;
	deleteReply: (idReply: string, idComment: string) => void;
};

export const CmtContext = createContext<CmtContextProps>({} as CmtContextProps);
