import React from 'react';

const Pagination = ({ postsPerPage, totalPost, paginate }) => {
	const pageNumbers = [];
	let limit = Math.ceil(totalPost / postsPerPage);
	for (let i = 1; i <= limit; i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination pad-space">
				{pageNumbers.map(number => {
					return (
						<li key={number} className="page-item page-spacing ">
							<a href="!#" className="page-link" onClick={() => paginate(number)}>
								{number}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
