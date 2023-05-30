import React, { useState, useEffect } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const scrollToElement = (targetId) => {
		const targetElement = document.getElementById(targetId);
		targetElement.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		const scrollToTopBtn = document.getElementById('scrollToTopButton');
		const navbar = document.getElementById('navbar');

		const handleScroll = () => {
			const navbarHeight = navbar.offsetHeight;
			const scrollY = window.scrollY;

			if (scrollY > navbarHeight) {
				scrollToTopBtn.classList.remove('hidden');
			} else {
				scrollToTopBtn.classList.add('hidden');
			}
		};

		const scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		};

		scrollToTopBtn.addEventListener('click', scrollToTop);
		window.addEventListener('scroll', handleScroll);

		return () => {
			scrollToTopBtn.removeEventListener('click', scrollToTop);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id="navbar" className="bg-slate-800">
			{/* BACK TO TOP */}
			<div id="scrollToTop" className="fixed bottom-14 w-full">
				<div className="mx-auto flex w-full max-w-6xl justify-end align-middle">
					<button className="hidden" id="scrollToTopButton">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-10  w-10 bg-slate-900 text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* NAVBAR */}
			<div className="container mx-auto flex h-20 max-w-screen-lg flex-row items-center justify-between px-8">
				<a
					href="/"
					className="text-2xl font-medium uppercase text-gray-100 sm:text-3xl"
				>
					Ferry Gunawan
				</a>

				{/* NAVBAR DESKTOP */}
				<div className=" hidden items-center md:flex">
					<button
						onClick={() => {
							if (document.getElementById('aboutme')) {
								scrollToElement('aboutme');
							} else {
								window.location.href = '/#aboutme';
							}
						}}
						className="text-xl text-gray-100 hover:border-b hover:border-b-gray-100"
					>
						ABOUT ME
					</button>

					<button
						onClick={() => scrollToElement('projects')}
						className="ml-4 text-xl text-gray-100 hover:border-b hover:border-b-gray-100"
					>
						PROJECTS
					</button>

					<button
						onClick={() => scrollToElement('contact')}
						className="ml-4 text-xl text-gray-100 hover:border-b hover:border-b-gray-100"
					>
						CONTACTS
					</button>
				</div>

				{/* NAVBAR MOBILE - HAMBURGER */}
				{!isMenuOpen && (
					<div className="block h-8 md:hidden">
						<button type="button" className="md:hidden" onClick={toggleMenu}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1}
								stroke="currentColor"
								className="h-8 w-8 text-gray-100"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				)}

				{/* NAVBAR MOBILE - MENU */}
				{isMenuOpen && (
					<div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-90 md:hidden">
						<div className="flex flex-col items-center justify-center gap-2">
							<div className=" border-b-2 border-b-gray-100 p-4">
								<button
									onClick={() => {
										if (document.getElementById('aboutme')) {
											toggleMenu();
											scrollToElement('aboutme');
										} else {
											window.location.href = '/#aboutme';
										}
									}}
									className="text-2xl text-gray-100"
								>
									ABOUT ME
								</button>
							</div>

							<div className="border-b-2 border-b-gray-100 p-4">
								<button
									onClick={() => {
										toggleMenu();
										scrollToElement('projects');
									}}
									className="text-2xl text-gray-100"
								>
									PROJECTS
								</button>
							</div>

							<div className="border-b-2 border-b-gray-100 p-4">
								<button
									onClick={() => {
										toggleMenu();
										scrollToElement('contact');
									}}
									className="text-2xl text-gray-100"
								>
									CONTACT
								</button>
							</div>

							<div className="p-4">
								<button
									type="button"
									className="text-xl text-gray-100 focus:outline-none md:hidden"
									onClick={toggleMenu}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={0.8}
										stroke="currentColor"
										className="h-10 w-10"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
