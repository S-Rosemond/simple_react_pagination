import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './../components/Posts';
import Pagination from './../components/Pagination';

const App = () => {
	const [post, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(10);
	const postUrl = 'https://jsonplaceholder.typicode.com/posts';

	useEffect(() => {
		const fetchPost = async () => {
			setLoading(true);
			const res = await axios.get(postUrl);
			setPosts(res.data);
			setLoading(false);
		};

		fetchPost();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

	// Change Page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="container mt-5">
			<h1 className="text-primary mb-3">My App</h1>
			<Posts posts={currentPost} loading={loading} />
			<Pagination postsPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
		</div>
	);
};

export default App;
