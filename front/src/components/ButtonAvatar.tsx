import React, { Dispatch, SetStateAction } from 'react';

const avatarRandom = 'https://randomuser.me/api/portraits/men/46.jpg';

interface Props {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	avatar: string | null;
}

const ButtonAvatar = ({ setShowMenu, avatar }: Props) => {
	return (
		<button
			className="mx-auto w-10 relative block outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:hover:ring-indigo-600"
			// className="w-10 mx-auto h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
			onClick={() => setShowMenu(prev => !prev)}
		>
			<img
				src={avatar || avatarRandom}
				className="w-full h-full rounded-full"
			/>
		</button>
	);
};

export default ButtonAvatar;
