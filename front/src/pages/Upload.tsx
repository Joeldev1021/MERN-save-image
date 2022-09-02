import { ChangeEvent, FormEvent, useState } from 'react';

interface FormUpload {
	title: string;
	description: string;
}

const URL_UPLOAD =
	'https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg';

const Upload = () => {
	const [selectImage, setSelectImage] = useState<any>();
	const [formPost, setformPost] = useState<FormUpload>({
		title: '',
		description: '',
	});
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', formPost.title);
		formData.append('description', formPost.description);
		formData.append('image', selectImage);
		const entry = Object.fromEntries(formData);
		console.log(entry);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setformPost((prev: FormUpload) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<div
			className="relative  flex items-center justify-center sm:px-6 lg:px-8  bg-no-repeat"
			style={{
				backgroundImage:
					'background-image: url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
			}}
		>
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
							onChange={e => handleChange(e)}
						/>
					</div>
					<div className="grid grid-cols-1 space-y-2">
						<label className="text-sm font-bold text-gray-500 tracking-wide">
							Attach Document
						</label>
						<div className="flex items-center justify-center w-full">
							<label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
								<div className="h-full w-full text-center flex flex-col items-center justify-center   ">
									<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
										<img
											className="has-mask h-36 object-contain"
											src={
												selectImage
													? URL.createObjectURL(selectImage)
													: URL_UPLOAD
											}
											alt="freepik image"
										/>
									</div>
									<p className="pointer-none text-gray-500 ">
										<span className="text-sm">Drag and drop</span> files here{' '}
										<br /> or{' '}
										<span id="" className="text-blue-600 hover:underline">
											select a file
										</span>{' '}
										from your computer
									</p>
								</div>
								<input
									type="file"
									name="file"
									onChange={e => setSelectImage(e.target.files![0])}
									className="hidden"
								/>
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
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Upload;
