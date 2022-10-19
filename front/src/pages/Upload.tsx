import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import { IPostUpload } from '../interface/post';
import DragAndDropZone from '../components/DragAndDropZone';
import { usePost } from '../hooks/usePost';

export const URL_UPLOAD =
	'https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg';

const Upload = () => {
	const { uploadPost, state } = usePost();
	const navigate = useNavigate();
	const [formPost, setFormPost] = useState<IPostUpload>({} as IPostUpload);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formPost.description && formPost.title && formPost.image) {
			await uploadPost(formPost);
			navigate('/my-post');
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			setFormPost((prev: IPostUpload) => ({
				...prev,
				[e.target.name]: file,
			}));
		} else {
			setFormPost((prev: IPostUpload) => ({
				...prev,
				[e.target.name]: e.target.value,
			}));
		}
	};

	return (
		<div className="relative flex items-center justify-center sm:px-6 lg:px-8 bg-no-repeat mt-28">
			<div className="absolute inset-0 z-0"></div>
			<div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10">
				<div className="text-center">
					<h2 className="mt-5 text-3xl font-bold text-gray-900">
						File Upload!
					</h2>
				</div>
				<form className="mt-8 space-y-3" onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 space-y-2">
						<label className="text-sm font-bold text-gray-500 tracking-wide">
							Title
						</label>
						<input
							className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
							type="text"
							name="title"
							placeholder="title"
							defaultValue={formPost.title}
							onChange={e => handleChange(e)}
						/>
					</div>
					<div className="grid grid-cols-1 space-y-2">
						<label className="text-sm font-bold text-gray-500 tracking-wide">
							Description
						</label>
						<input
							className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
							type="text"
							placeholder="description"
							name="description"
							defaultValue={formPost.description}
							onChange={e => handleChange(e)}
						/>
					</div>

					<div className="grid grid-cols-1 space-y-2">
						<label className="text-sm font-bold text-gray-500 tracking-wide">
							Attach Document
						</label>
						{/* drogAndDropZone */}
						<DragAndDropZone
							formPost={formPost}
							setFormPost={setFormPost}
							handleChange={handleChange}
						/>
					</div>
					<p className="text-sm text-gray-300">
						<span>File type: png jpg of images</span>
					</p>
					<div>
						<Button
							loading={state.loading}
							disabled={!(formPost.title && formPost.image)}
						>
							Upload
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Upload;
