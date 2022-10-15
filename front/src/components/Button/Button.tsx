import { ReactNode } from 'react';
import ButtonSpinner from '../ButtonSpinner';
interface BtnFormProps {
	disabled: boolean;
	loading: boolean;
	children: ReactNode;
}

const Button = ({ disabled, loading, children }: BtnFormProps) => {
	return (
		<button
			disabled={disabled}
			type="submit"
			className="flex justify-center px-7 py-3 disabled:opacity-75  bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
		>
			{children} {loading && <ButtonSpinner />}
		</button>
	);
};

export default Button;
