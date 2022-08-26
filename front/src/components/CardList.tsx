/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { IPostImage } from '../interface';
import Card from './Card';
interface IPost {
	title: string;
	desc: string;
	img: string;
	authorLogo: string;
	authorName: string;
	date: string;
	href: string;
}

const CardList = () => {
	const [postsImages, setPostsImages] = useState<IPostImage[]>([]);

	useEffect(() => {
		fetch('http://localhost:5000/img/all')
			.then(res => res.json())
			.then(res => setPostsImages(res))
			.catch(err => console.log(err));
	}, []);

	return (
		<section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
			<div className="text-center">
				<h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
				<p className="mt-3 text-gray-500">
					Blogs that are loved by the community. Updated every hour.
				</p>
			</div>
			<div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
				{postsImages.map((post: IPostImage) => {
					return (
						<Card
							key={post._id}
							username={post.userId.username}
							comments={post.comments.length}
							likes={post.likes.length}
							createdAt={post.created_at}
							img={post.imgUrl}
							title={post.title}
							desc={post.description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default CardList;

/* const posts: IPost[] = [
		{
			title: 'What is SaaS? Software as a Service Explained',
			desc: 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some',
			img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			authorLogo: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
			authorName: 'Sidi dev',
			date: 'Jan 4 2022',
			href: 'javascript:void(0)',
		},
		{
			title: 'A Quick Guide to WordPress Hosting',
			desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
			img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			authorLogo: 'https://api.uifaces.co/our-content/donated/FJkauyEa.jpg',
			authorName: 'Micheal',
			date: 'Jan 4 2022',
			href: 'javascript:void(0)',
		},
		{
			title: '7 Promising VS Code Extensions Introduced in 2022',
			desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
			img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			authorLogo: 'https://randomuser.me/api/portraits/men/46.jpg',
			authorName: 'Luis',
			date: 'Jan 4 2022',
			href: 'javascript:void(0)',
		},
		{
			title: 'How to Use Root C++ Interpreter Shell to Write C++ Programs',
			desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
			img: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			authorLogo: 'https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg',
			authorName: 'Lourin',
			date: 'Jan 4 2022',
			href: 'javascript:void(0)',
		},
	]; */
