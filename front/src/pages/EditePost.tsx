import React, {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useParams } from 'react-router-dom';
import Input from '../components/Input';
import { PostContext } from '../context/post-image/PostContext';
import { IPostEdite } from '../interface/post';

function EditePost() {
	const { id } = useParams();
	const { posts, updatePost } = useContext(PostContext);
	const [editePost, setEditePost] = useState<IPostEdite>({} as IPostEdite);

	useEffect(() => {
		const postFound = posts.find(post => post._id === id);
		if (postFound) {
			setEditePost({
				id: postFound._id,
				title: postFound.title,
				description: postFound.description,
				imgUrl: postFound.imgUrl,
			});
		}
	}, [id]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditePost((prev: IPostEdite) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		updatePost(editePost);
	};

	return (
		<div className="relative  flex items-center justify-center sm:px-6 lg:px-8  bg-no-repeat">
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
							<button
								type="submit"
								className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
							>
								Update
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default EditePost;
