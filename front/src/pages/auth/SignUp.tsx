import React from 'react';
import BannerForm from '../../components/BannerForm';
import ButtonForm from '../../components/ButtonForm';
import Facebook from '../../components/Icons/Facebook';
import Twitter from '../../components/Icons/Twitter';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
	return (
		<section className="h-screen">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<BannerForm />
						<form>
							<Input placeholder="email or username" type="text" />
							<Input placeholder="password" type="password" />

							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="exampleCheck3"
										checked
									/>
									<label
										className="form-check-label inline-block text-gray-800"
										htmlFor="exampleCheck2"
									>
										Remember me
									</label>
								</div>
								<a
									href="#!"
									className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
								>
									Forgot password?
								</a>
							</div>

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
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
