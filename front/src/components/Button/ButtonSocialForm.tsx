import React from 'react';

interface ButtonProps {
	bg: string;
	children: React.ReactNode;
}

const ButtonSocialForm = ({ bg, children }: ButtonProps) => {
	return (
		<a
			className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
			style={{ background: bg }}
			href="#!"
			role="button"
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children}
		</a>
	);
};

export default ButtonSocialForm;
