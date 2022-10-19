import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { IUserRegister } from '../interface/auth';
import AlertForm from './AlertForm';
import Button from './Button/Button';
import Input from './Input';

const FormRegister = () => {
	const { state, register } = useAuth();
	const [errorMsg, setErrorMsg] = useState<string | undefined>(
		state.errorMessage
	);
	const navigateRoute = useNavigate();

	const [registerUser, setRegisterUser] = useState<IUserRegister>(
		{} as IUserRegister
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRegisterUser((prev: IUserRegister) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const user = await register(registerUser);
		if (user) {
			navigateRoute('/');
		}
	};

	useEffect(() => {
		if (state.errorMessage) {
			setErrorMsg(state.errorMessage);
		}
		setTimeout(() => {
			setErrorMsg(undefined);
		}, 3000);
	}, [state.errorMessage]);

	return (
		<form onSubmit={handleSubmit}>
			{errorMsg && <AlertForm errorMsg={errorMsg} />}
			<Input
				handleChange={handleChange}
				defaultValue={registerUser.username}
				name="username"
				placeholder="username"
				type="text"
			/>
			<Input
				defaultValue={registerUser.email}
				handleChange={handleChange}
				name="email"
				placeholder="email"
				type="email"
			/>
			<Input
				defaultValue={registerUser.password}
				handleChange={handleChange}
				name="password"
				placeholder="password"
				type="password"
			/>
			<Button
				disabled={
					!registerUser.email || !registerUser.password || !registerUser.email
				}
				loading={false}
			>
				Register
			</Button>
			<p className="text-center">
				Already have an account?
				<Link className="text-blue-600 pl-2" to="/login">
					Login here
				</Link>{' '}
			</p>
		</form>
	);
};

export default FormRegister;
