import React from 'react';
import { MdDelete, MdModeEdit, MdOutlineCopyAll } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
interface Props {
	id: string;
}

const ListGroup = ({ id }: Props) => {
	return (
		<div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute right-[40px] top-9">
			<ul
				className="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdownDefault"
			>
				<li className=" py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
					<Link className="flex items-center" to={`/post/edite/${id}`}>
						Edite <MdModeEdit />
					</Link>
				</li>
				<li className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
					Delete <MdDelete />
				</li>
				<li className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
					Copy link <MdOutlineCopyAll />
				</li>
				<li className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
					Close <IoMdClose />
				</li>
			</ul>
		</div>
	);
};

export default ListGroup;
