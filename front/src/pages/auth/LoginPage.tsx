import React, { useContext } from 'react';
import BannerForm from '../../components/BannerForm';
import FormLogin from '../../components/FormLogin';
import { AuthContext } from '../../context/user/AuthContext';

const LoginPage = () => {
	const { login, state } = useContext(AuthContext);
	return (
		<section className="h-screen">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<BannerForm />
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<FormLogin
							login={login}
							errorMessage={state.errorMessage}
							loading={state.loading}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
