import { IoMdClose } from 'react-icons/io';
import { MdDelete, MdModeEdit } from 'react-icons/md';

interface ListGroupCmtProps {
	handleListGroup: (title: string) => void;
}

const listGroupItem = [
	{ title: 'Edite', component: <MdModeEdit /> },
	{ title: 'Delete', component: <MdDelete /> },
	{ title: 'Close', component: <IoMdClose /> },
];

const ListGroupCmt = ({ handleListGroup }: ListGroupCmtProps) => {
	return (
		<div className="z-10 w-44 bg-white rounded divide-y shadow-md  divide-gray-100 dark:bg-gray-700 absolute right-[40px] top-3">
			<ul
				className="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdownDefault"
			>
				{listGroupItem.map(item => {
					return (
						<li
							className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							key={item.title}
							onClick={() => handleListGroup(item.title)}
						>
							{item.title} {item.component}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ListGroupCmt;
