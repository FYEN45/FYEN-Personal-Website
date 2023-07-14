import React from 'react';

const NotFound = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<span className="mb-4 text-center text-3xl font-semibold">
				Page not Found!
			</span>
			<span className="text-sm">are you sure this is the correct link?</span>
		</div>
	);
};

export default NotFound;
