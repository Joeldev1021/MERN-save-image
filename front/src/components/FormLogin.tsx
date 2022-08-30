import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IUserLogin } from '../interface';
import AlertForm from './AlertForm';
import Button from './Button/Button';
import ButtonSocialForm from './Button/ButtonSocialForm';
import Facebook from './Icons/Facebook';
import Twitter from './Icons/Twitter';
import Input from './Input';

interface LoginProps {
	loading: boolean;
	errorMessage: string | undefined;
	login: (userLogin: IUserLogin) => void;
}

const FormLogin = ({ login, errorMessage, loading }: LoginProps) => {
	const [errorMsg, setErrorMsg] = useState<string | undefined>(errorMessage);
	const [formData, setFormData] = useState<IUserLogin>({
		email: '',
		password: '',
	});
	console.log(errorMessage);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev: IUserLogin) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		login(formData);
	};

	useEffect(() => {
		setTimeout(() => {
			setErrorMsg(undefined);
		}, 5000);
	}, [errorMessage]);

	useEffect(() => {
		if (errorMessage) {
			setErrorMsg(errorMessage);
		}
	}, [errorMessage]);

	return (
		<form onSubmit={e => handleSubmit(e)}>
			{errorMsg && <AlertForm errorMsg={errorMsg} />}
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
				loading={loading}
				text="sign in"
			/>

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
				Don’t have an account yet? <a className="text-blue-600">Sign up</a>{' '}
			</p>
		</form>
	);
};

export default FormLogin;
