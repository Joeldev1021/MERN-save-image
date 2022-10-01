import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import ButtonAvatar from '../ButtonAvatar';

const ProfileDropDown = (props: any) => {
	const [stateHidden, setStateHidden] = useState<boolean>(false);
	const { logout, state } = useContext(AuthContext);

	return (
		<div className={`relative ${props.class}`}>
			<div className="flex items-center space-x-4">
				<ButtonAvatar
					setShowMenu={setStateHidden}
					avatar={state.user?.avatar || ''}
				/>
			</div>
			<ul
				className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
					stateHidden ? '' : 'lg:hidden'
				}`}
			>
				<li>
					<Link
						className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
						to="dashboard"
					>
						Dashboard
					</Link>
				</li>
				<li>
					<Link
						className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
						to="settings"
					>
						Settings
					</Link>
				</li>
				<li>
					<p
						className="block cursor-pointer text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
						onClick={() => logout()}
					>
						Logout
					</p>
				</li>
			</ul>
		</div>
	);
};
export default ProfileDropDown;
