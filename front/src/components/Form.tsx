import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../context/user/AuthContext';
import ButtonForm from './ButtonForm';
import Facebook from './Icons/Facebook';
import Twitter from './Icons/Twitter';
import Input from './Input';

interface IFormData {
	email: string;
	password: string;
}

const Form = () => {
	const { login } = useContext(AuthContext);
	const [formData, setFormData] = useState<IFormData>({
		email: '',
		password: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev: IFormData) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		login(formData);
		/* 		const token = await loginApi(formData);
		console.log(token);
	 */
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<Input
				placeholder="email"
				type="email"
				name="email"
				handleChange={handleChange}
				defaultValue={formData.email}
			/>
			<Input
				type="password"
				placeholder="password"
				name="password"
				defaultValue={formData.password}
				handleChange={handleChange}
			/>
			<button
				type="submit"
				className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
			>
				Sign in
			</button>

			<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
				<p className="text-center font-semibold mx-4 mb-0">OR</p>
			</div>

			<ButtonForm bg="#3b5998">
				<Facebook />
				Continue with Facebook
			</ButtonForm>
			<ButtonForm bg="#55acee">
				<Twitter />
				Continue with Twitter
			</ButtonForm>
		</form>
	);
};

export default Form;
