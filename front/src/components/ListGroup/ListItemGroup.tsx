import { Link } from 'react-router-dom';
import { IListGroupItem } from '../../interface';

interface PropsListItem {
	id: string;
	item: IListGroupItem;
	handleClick: (title: string) => void;
}

const ListItemGroup = ({ id, item, handleClick }: PropsListItem) => {
	return (
		<>
			{item.title === 'Edite' ? (
				<li
					key={item.title}
					className="flex items-center cursor-pointer py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<Link className="flex items-center" to={`/post/edite/${id}`}>
						Edite {item.component}
					</Link>
				</li>
			) : (
				<li
					onClick={() => handleClick(item.title)}
					key={item.title}
					className="flex items-center cursor-pointer py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					{item.title} {item.component}
				</li>
			)}
		</>
	);
};

export default ListItemGroup;
