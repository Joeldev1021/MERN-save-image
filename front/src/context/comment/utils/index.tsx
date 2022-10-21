import { CmtAction } from '../cmtReducer';
import type { Dispatch } from 'react';
import { likeCommentApi } from '../../../api/likeApi';
import { CmtActionType } from '../../actions/comment';

interface Props {
	dispatch: Dispatch<CmtAction>;
	idComment: string;
	userId: string;
}

export const controllerLikeComment = async ({
	dispatch,
	idComment,
	userId,
}: Props) => {
	try {
		const response = await likeCommentApi(idComment);
		if (response.data) {
			dispatch({
				type: CmtActionType.LOAD_LIKE_COMMENT_SUCCESS,
				payload: { idComment, userId },
			});
		}
	} catch (error) {
		console.log(error);
	}
};
