import { FC } from 'react';

interface PropsSpinner {
	size?: string;
}

const Spinner: FC<PropsSpinner> = ({ size }) => {
	return (
		<div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
			<div
				className={`border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-${
					size || '24'
				} w-${size || '24'}`}
			></div>
		</div>
	);
};

export default Spinner;
