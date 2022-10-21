import { Dispatch } from "react";
import { likePostApi } from "../../../api/likeApi";
import { PostActionType } from "../../actions/post";
import { PostAction } from "../postReducer";

interface Props {
	dispatch: Dispatch<PostAction>;
	idPost: string;
	userId: string;
}

export const controllerLikePost = async ({
	dispatch,
	idPost,
	userId,
}: Props) => {
	dispatch({ type: PostActionType.LOAD_LIKE_POST })
	try {
		const { data } = await likePostApi(idPost);
		console.log(data)
		if (data) {
			dispatch({
				type: PostActionType.LOAD_LIKE_POST_SUCCESS,
				payload: { idPost, userId },
			});
		}
	} catch (error) {
		console.log('error', error);
	}

};

