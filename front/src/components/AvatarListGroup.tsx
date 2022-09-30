import {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { AuthContext } from '../context/auth/AuthContext';

const listGroupProfile = [
	{ title: 'Upload Image', component: <MdModeEdit /> },
	{ title: 'Remove', component: <MdDelete /> },
];

interface Props {
	setAvatarFile: (value: string) => void;
}

interface IfileAvatar {
	avatar: File;
}

const AvatarListGroup = (props: Props) => {
	const { setAvatarFile } = props;
	const { updateAvatar } = useContext(AuthContext);
	const inputReft = useRef<HTMLInputElement>(null);
	const [fileAvatar, setFileAvatar] = useState<IfileAvatar>({} as IfileAvatar);

	const handleClick = (action: string) => {
		if (action !== 'Remove') inputReft.current?.click();
		else setAvatarFile('');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setAvatarFile(URL.createObjectURL(e.target.files[0]));
			setFileAvatar({ avatar: e.target.files[0] });
		}
	};

	useEffect(() => {
		if (fileAvatar) {
			updateAvatar(fileAvatar);
		}
	}, [fileAvatar]);

	return (
		<div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute left-[40px] top-16">
			<ul
				className="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdownDefault"
			>
				<form>
					<input
						type="file"
						hidden
						name="image"
						ref={inputReft}
						onChange={handleChange}
					/>
				</form>
				{listGroupProfile.map(item => {
					return (
						<li
							className="flex items-center cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => handleClick(item.title)}
							key={item.title}
						>
							{item.title} {item.component}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AvatarListGroup;
