import { IListGroupItem } from '../../interface';
import ListItemGroup from './ListItemGroup';
import { usePost } from '../../hooks/usePost';

interface Props {
	id?: string;
	listGroupItem: IListGroupItem[];
	setShowListGroup?: (value: boolean) => void;
	handleListGroup?: (value: string) => void;
}

const ListGroup = ({
	id,
	listGroupItem,
	setShowListGroup,
	handleListGroup,
}: Props) => {
	const { deletePost } = usePost();

	const handleClick = (title: string) => {
		if (title === 'Delete') {
			deletePost(id!);
		}
		if (title === 'Close') {
			setShowListGroup!(false);
		}
	};

	return (
		<div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute right-[40px] top-9">
			<ul
				className="py-1 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdownDefault"
			>
				{listGroupItem.map(item => {
					if (handleListGroup) {
						return (
							<li
								className="flex items-center cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								key={item.title}
								onClick={() => handleListGroup(item.title)}
							>
								{item.title} {item.component}
							</li>
						);
					} else {
						return (
							<ListItemGroup
								key={item.title}
								handleClick={handleClick}
								id={id!}
								item={item}
							/>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default ListGroup;
