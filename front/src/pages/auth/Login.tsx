import React from 'react';
import BannerForm from '../../components/BannerForm';
import Form from '../../components/Form';

const Login = () => {
	return (
		<section className="h-screen">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<BannerForm />
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
