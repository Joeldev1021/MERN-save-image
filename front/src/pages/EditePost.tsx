import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button/Button';
import Input from '../components/Input';
import { usePost } from '../hooks/usePost';
import { IPostUser } from '../interface';

function EditePost() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { updatePost, findPostById, state } = usePost();
	const [editePost, setEditePost] = useState<IPostUser>({} as IPostUser);

	useEffect(() => {
		const postFound = findPostById(id!, true);
		if (postFound) {
			setEditePost(postFound);
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditePost((prev: IPostUser) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await updatePost(editePost);
		navigate('/my-post');
	};

	return (
		<div className="relative  flex items-center justify-center sm:px-6 lg:px-8  bg-no-repeat mt-24">
			<div className="absolute inset-0 z-0"></div>
			<div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10">
				<div className="text-center">
					<h2 className="mt-5 text-3xl font-bold text-gray-900">Edite Post!</h2>
				</div>
				{editePost && (
					<form className="mt-8 space-y-3" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 space-y-2">
							<label className="text-sm font-bold text-gray-500 tracking-wide">
								Title
							</label>
							<Input
								type="text"
								placeholder="Title"
								defaultValue={editePost.title}
								name="title"
								handleChange={handleChange}
							/>
						</div>
						<div className="grid grid-cols-1 space-y-2">
							<label className="text-sm font-bold text-gray-500 tracking-wide">
								Description
							</label>
							<Input
								type="text"
								placeholder="Description"
								defaultValue={editePost.description}
								name="description"
								handleChange={handleChange}
							/>
						</div>
						<div className="grid grid-cols-1 space-y-2">
							<label className="text-sm font-bold text-gray-500 tracking-wide">
								Image
							</label>
							<div className="flex items-center justify-center w-full">
								<label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
									<div className="h-full w-full text-center flex flex-col items-center justify-center   ">
										<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
											<img
												className="has-mask h-36 object-contain"
												src={editePost?.imgUrl}
												alt="freepik image"
											/>
										</div>
									</div>
									<input type="file" name="file" className="hidden" />
								</label>
							</div>
						</div>
						<p className="text-sm text-gray-300">
							<span>File type: doc,pdf,types of images</span>
						</p>
						<div>
							<Button
								loading={state.loading}
								disabled={!(editePost.title && editePost.description)}
							>
								Upload
							</Button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default EditePost;
