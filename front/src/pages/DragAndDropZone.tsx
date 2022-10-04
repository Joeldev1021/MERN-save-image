import { ChangeEvent, Dispatch, DragEvent, SetStateAction } from 'react';
import useDragAndDrop from '../hooks/useDragAndDrop';
import { IPostUpload } from '../interface/post';
import { URL_UPLOAD } from './Upload';

interface Props {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;

	setFormPost: Dispatch<SetStateAction<IPostUpload>>;
	formPost: IPostUpload;
}

const DragAndDropZone = ({ handleChange, setFormPost, formPost }: Props) => {
	const {
		// fileDropError,
		dragOver,
		onDragLeave,
		onDragOver,
		setDragOver,
	} = useDragAndDrop();

	const handleOnDrop = (e: DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		setDragOver(false);
		const file = e.dataTransfer.files[0];
		if (file) {
			setFormPost((prev: IPostUpload) => ({
				...prev,
				image: file,
			}));
		}
	};

	return (
		<div className="flex items-center justify-center w-full">
			<label
				className={`flex flex-col rounded-lg border-4  w-full h-60 p-10 group text-center
                        ${
													dragOver
														? 'border-dashed border-sky-500'
														: 'border-dashed'
												}  
                        `}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={handleOnDrop}
			>
				<div className="h-full w-full text-center flex flex-col items-center justify-center   ">
					<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
						<img
							className="has-mask h-36 object-contain"
							src={
								formPost.image
									? URL.createObjectURL(formPost.image)
									: URL_UPLOAD
							}
							alt="freepik image"
						/>
					</div>
					<p className="pointer-none text-gray-500 ">
						<span className="text-sm">Drag and drop</span> files here <br /> or{' '}
						<span id="" className="text-blue-600 hover:underline">
							select a file
						</span>{' '}
						from your computer
					</p>
				</div>
				<input
					type="file"
					name="image"
					onChange={e => handleChange(e)}
					className="hidden"
				/>
			</label>
		</div>
	);
};

export default DragAndDropZone;
