import AlertForm from './AlertForm';
import Button from './Button/Button';
import ButtonSocialForm from './Button/ButtonSocialForm';
import Facebook from './Icons/Facebook';
import Twitter from './Icons/Twitter';
import Input from './Input';
import toast, { Toaster } from 'react-hot-toast';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IUserLogin } from '../interface/auth';
import { useAuth } from '../hooks/useAuth';

const FormLogin = () => {
	const { login, state } = useAuth();
	const [formData, setFormData] = useState<IUserLogin>({} as IUserLogin);
	const navigateRoutes = useNavigate();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev: IUserLogin) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const userResponse = await login(formData);
		if (userResponse) {
			navigateRoutes('/');
		}
		if (state.errorMessage)
			toast.error(state.errorMessage, {
				position: 'top-center',
				duration: 3000,
			});
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<Toaster />
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
			<Button
				disabled={!formData.email || !formData.password}
				loading={state.loading}
			>
				Sign in
			</Button>

			<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
				<p className="text-center font-semibold mx-4 mb-0">OR</p>
			</div>

			<ButtonSocialForm bg="#3b5998">
				<Facebook />
				Continue with Facebook
			</ButtonSocialForm>
			<ButtonSocialForm bg="#55acee">
				<Twitter />
				Continue with Twitter
			</ButtonSocialForm>
			<p className="text-center">
				Don’t have an account yet?{' '}
				<Link to="/register" className="text-blue-600">
					Sign up
				</Link>
			</p>
		</form>
	);
};

export default FormLogin;
