import React from 'react';

function PostComments() {
	return (
		<section className="place-items-center  h-screen py-4 sm:py-8">
			<div className="px-2 py-4 bg-white rounded-xl border shadow-xl mx-auto w-4/5 sm:max-w-md sm:px-5 hover:border-blue-200">
				<form action="#" className="mt-4">
					<label htmlFor="comment" className="block">
						<textarea
							id="comment"
							cols={30}
							rows={3}
							placeholder="Type your comment..."
							className="px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full block placeholder:text-gray-400 placeholder-gray-500
          focus:outline-none focus:ring-1 bg-gray-50 focus:ring-blue-600 focus:border-blue-600 text-sm"
						></textarea>
					</label>
					<button
						type="button"
						className="mt-2  inline-flex items-center justify-center text-gray-100 font-medium leading-none
             bg-blue-600 rounded-md py-2 px-3 border border-transparent transform-gpu hover:-translate-y-0.5 
             transition-all ease-in duration-300 hover:text-gray-200 hover:bg-blue-700 text-sm"
					>
						Post comment
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-2 rotate-90"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
						</svg>
					</button>
				</form>
				<div className="my-4">
					<small className="text-base font-bold text-gray-700 ml-1">
						4 comments
					</small>
					<div className="flex flex-col mt-4">
						<div className="flex flex-row mx-auto justify-between px-1 py-1">
							<div className="flex mr-2">
								<div className="items-center justify-center w-12 h-12 mx-auto">
									<img
										alt="profil"
										src="https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
										className="object-cover w-12 h-12 mx-auto rounded-full"
									/>
								</div>
							</div>
							<div className="flex-1 pl-1">
								<div className="text-base font-semibold text-gray-600">
									Timothy R. Arrieta
									<span className="text-sm font-normal text-gray-500">
										- Feb 11, 2022
									</span>
								</div>
								<div className="text-sm text-gray-600">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat voluptate optio voluptatibus fuga pariatur ipsam
									excepturi tenetur quia nam deleniti.
								</div>
								<div className="flex items-center text-sm mt-1 space-x-3">
									<a
										href="#"
										className="flex items-center text-blue-500 hover:text-blue-600"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="font-semibold">2 Reply</span>
									</a>
									<a
										href="#"
										className="flex items-center text-red-500 hover:text-red-600 group"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 group-hover:text-red-600 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="font-semibold ">11</span>
									</a>
									<a
										href="#"
										className="flex items-center text-blue-500 hover:text-blue-600"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
										</svg>
										<span className="font-semibold">Share</span>
									</a>
								</div>
								<div className="flex flex-row mx-auto justify-between mt-4">
									<div className="flex mr-2">
										<div className="items-center justify-center w-10 h-10 mx-auto">
											<img
												alt="profil"
												src="https://images.unsplash.com/photo-1604238473951-bf1492b379f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwYXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
												className="object-cover w-10 h-10 mx-auto rounded-full"
											/>
										</div>
									</div>
									<div className="flex-1">
										<div className="text-base font-semibold text-gray-600">
											Amanda J. Rich{' '}
											<span className="text-sm font-normal text-gray-500">
												- Feb 11, 2022
											</span>
										</div>
										<div className="text-sm text-gray-600">
											Lorem ipsum dolor sit amet.
										</div>
									</div>
								</div>
								<div className="flex flex-row mx-auto justify-between mt-4">
									<div className="flex mr-2">
										<div className="items-center justify-center w-10 h-10 mx-auto">
											<img
												alt="profil"
												src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
												className="object-cover w-10 h-10 mx-auto rounded-full"
											/>
										</div>
									</div>
									<div className="flex-1">
										<div className="text-base font-semibold text-gray-600">
											Jonathan Paul{' '}
											<span className="text-sm font-normal text-gray-500">
												- Feb 12, 2022
											</span>
										</div>
										<div className="text-sm text-gray-600">
											Lorem, ipsum dolor.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-row mx-auto justify-between px-1 py-4">
							<div className="flex mr-2">
								<div className="items-center justify-center w-12 h-12 mx-auto">
									<img
										alt="profil"
										src="https://images.unsplash.com/photo-1520745716611-5f02a256ac09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx3b21lbiUyMGFzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
										className="object-cover w-12 h-12 mx-auto rounded-full"
									/>
								</div>
							</div>
							<div className="flex-1 pl-1">
								<div className="text-base font-semibold text-gray-600">
									Manako Uchiyama{' '}
									<span className="text-sm font-normal text-gray-500">
										- Feb 10, 2022
									</span>
								</div>
								<div className="text-sm text-gray-600">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
									laborum corrupti dolor!
								</div>
								<div className="flex items-center text-sm mt-1 space-x-3">
									<a
										href="#"
										className="flex items-center text-blue-500 hover:text-blue-600"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="font-semibold">Reply</span>
									</a>
									<a
										href="#"
										className="flex items-center text-blue-500 hover:text-red-600 group"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 group-hover:text-red-600 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="font-semibold ">0</span>
									</a>
									<a
										href="#"
										className="flex items-center text-blue-500 hover:text-blue-600"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
										</svg>
										<span className="font-semibold">Share</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PostComments;
