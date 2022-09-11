import React, { useContext } from 'react';
import { MdDelete, MdModeEdit, MdOutlineCopyAll } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/post-image/PostContext';
interface Props {
	id: string;
}

const listGroupPostItem = [
	{ title: 'Edite', component: <MdModeEdit /> },
	{ title: 'Delete', component: <MdDelete /> },
	{ title: 'Copy Link', component: <MdOutlineCopyAll /> },
	{ title: 'Close', component: <IoMdClose /> },
];

const ListGroup = ({ id }: Props) => {
	const { deletePost } = useContext(PostContext);
	const handleClick = (title: string) => {
		if (title === 'Delete') {
			deletePost(id);
		}
	};
	return (
		<div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute right-[40px] top-9">
			<ul
				className="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdownDefault"
			>
				{listGroupPostItem.map(item => {
					return (
						<>
							{item.title === 'Edite' ? (
								<li
									key={item.title}
									className="flex items-center cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<Link className="flex items-center" to={`/post/edite/${id}`}>
										Edite <MdModeEdit />
									</Link>
								</li>
							) : (
								<li
									onClick={() => handleClick(item.title)}
									key={item.title}
									className="flex items-center cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									{item.title} {item.component}
								</li>
							)}
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default ListGroup;
