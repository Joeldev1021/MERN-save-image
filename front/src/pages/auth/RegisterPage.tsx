import React, { useContext } from 'react';
import FormRegister from '../../components/FormRegister';
import { AuthContext } from '../../context/auth/AuthContext';

const RegisterPage = () => {
	const { state } = useContext(AuthContext);
	console.log(state);
	return (
		<section className="h-screen mt-20">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
							className="w-full"
							alt="Sample image"
						/>
					</div>
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<FormRegister />
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
