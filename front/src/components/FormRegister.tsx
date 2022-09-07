import React, { ChangeEvent, useState } from 'react';
import Button from './Button/Button';
import Input from './Input';

interface IRegisterUser {
	username: string;
	email: string;
	password: string;
}

const FormRegister = () => {
	const [registerUser, setRegisterUser] = useState<IRegisterUser>(
		{} as IRegisterUser
	);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRegisterUser((prev: IRegisterUser) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<form action="">
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
				<a className="text-blue-600" href="">
					Login here
				</a>{' '}
			</p>
		</form>
	);
};

export default FormRegister;
/*     {
	"username": "sebastian",
	"email": "sebastian.gmail.com",
	"password": "1234"
} */
