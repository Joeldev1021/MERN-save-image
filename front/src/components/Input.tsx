import React, { ChangeEvent } from 'react';

interface PropsInput {
	placeholder: string;
	type: string;
	name: string;
	defaultValue: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	placeholder,
	type,
	name,
	defaultValue,
	handleChange,
}: PropsInput) => {
	return (
		<div className="mb-6">
			<input
				type={type}
				className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				placeholder={placeholder}
				name={name}
				onChange={e => handleChange(e)}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default Input;
