
interface Props {
	idReply: string;
	action: string;
	likeReplyApi: (idReply: string) => void
}

export const controllerLikeReply = async ({ idReply, action, likeReplyApi }: Props) => {
	console.log(action)
	try {
		const response = await likeReplyApi(idReply);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
