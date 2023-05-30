import React, { useEffect } from 'react';

import Project from '../../components/Project';

import img_banner from '../../assets/banner.jpg';
import img_profile from '../../assets/profile.jpg';

import logo_html from '../../assets/logo/html.png';
import logo_css from '../../assets/logo/css.png';
import logo_js from '../../assets/logo/javascript.png';
import logo_nodejs from '../../assets/logo/nodejs.png';
import logo_react from '../../assets/logo/reactjs.png';
import logo_express from '../../assets/logo/express.png';
import logo_tailwind from '../../assets/logo/tailwind.png';
import logo_vscode from '../../assets/logo/vscode.png';
import logo_github from '../../assets/logo/github.png';
import logo_chatgpt from '../../assets/logo/chatgpt.png';

import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';

const Home = () => {
	return (
		<div>
			{/* Banner */}
			<div
				className="w-full items-center justify-center overflow-hidden"
				style={{
					height: '92vh',
				}}
			>
				<div
					className="absolute z-10 flex w-full flex-col items-center justify-center gap-2"
					style={{
						height: '90vh',
					}}
				>
					<span className="text-4xl font-semibold text-slate-100 sm:text-5xl">
						Ferry Gunawan
					</span>
					<span className="text-md font-normal text-slate-100 sm:text-xl">
						Self-proclaimed Web Developer
					</span>
				</div>

				<div className="absolute bottom-5 z-10 flex w-full flex-col items-center">
					<span className="text-xs font-normal text-gray-100 opacity-60">
						&copy;Unsplash - Ales Nesetril
					</span>
				</div>

				<img
					src={img_banner}
					alt="banner"
					className="w-full scale-105 object-cover blur-sm"
					style={{ height: '92vh' }}
				/>
			</div>

			{/* About Me */}
			<div id="aboutme" className="pt-16">
				<div className=" container mx-auto max-w-screen-lg">
					<div className="flex flex-col items-center gap-4 px-12 md:flex-row md:items-start">
						<img
							src={img_profile}
							alt="Profile"
							className="h-full w-full max-w-sm md:w-72"
						/>
						<p className="mt-6 text-justify text-lg font-normal md:mt-0">
							<span className="text-5xl font-semibold">Hello!</span> My name is{' '}
							<span className="font-semibold">Ferry Gunawan</span>, and I am a{' '}
							<span className="font-semibold italic">
								Informatics Engineering
							</span>{' '}
							student at Bunda Mulia University. I have a strong interest in
							technology and programming, and I am always eager to learn new
							things. I consider myself a responsible and punctual individual
							who values the importance of meeting deadlines. Currently, I am
							focusing on deepening my knowledge in web development, both in
							front-end and back-end areas. I am excited to further explore this
							field and apply my skills to create innovative and user-friendly
							websites.
						</p>
					</div>
				</div>
			</div>

			{/* Tech Stacks */}
			<div className="mt-16 bg-slate-300 py-12 ">
				<div className="container mx-auto max-w-screen-lg px-12">
					<h1 className="mb-4 text-center text-3xl font-semibold">
						TECH STACKS
					</h1>

					<div className="mb-8 flex flex-col items-center">
						<span className="text-center text-lg">
							Here I provide an overview of the technologies and tools I am
							proficient in. This part serves as a comprehensive resource to
							showcase the programming languages, frameworks, and software
							development methodologies that I have experience with.
						</span>
					</div>

					<div className="mx-auto grid max-w-xl grid-cols-3 place-items-center gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5">
						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_html}
									alt="HTML"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">HTML</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_css}
									alt="CSS"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">CSS</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_js}
									alt="Javascript"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">Javascript</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_nodejs}
									alt="NodeJS"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">NodeJS</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_express}
									alt="Express"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">Express</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_react}
									alt="React"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">React</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_tailwind}
									alt="Tailwind"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">Tailwind</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_vscode}
									alt="VSCode"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">VSCode</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_github}
									alt="Github"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">Github</span>
							</div>
						</div>

						<div className="group relative aspect-square">
							<div className="h-full w-full">
								<img
									src={logo_chatgpt}
									alt="ChatGPT"
									className="h-full w-full bg-slate-100 object-contain p-2"
								/>
							</div>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
								<span className="font-semibold text-white">ChatGPT</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* PROJECTS */}
			<div
				id="projects"
				className="container mx-auto mb-16 max-w-screen-lg px-12 pt-16"
			>
				<h1 className="mb-4 text-center text-3xl font-semibold">MY PROJECTS</h1>

				<div className="flex flex-col items-center">
					<span className="text-center text-lg">
						Here you can explore and discover the various projects I have been
						involved in. Here, I will showcase my work, demonstrating the skills
						and knowledge I have acquired throughout my learning journey.
					</span>
				</div>

				{/* Project List */}
				<div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 place-items-center gap-6">
					{/*PROJECT 1 - FYEN PERSONAL WEBSITE  */}
					<Project
						projectImage={project1}
						projectTitle="Personal Website"
						projectStacks="HTML | Tailwind | Javascript | React"
						directLink="https://fyen-personal-website.onrender.com/"
						githubLink="https://github.com/FYEN45/FYEN-Personal-Website"
					/>

					{/* PROJECT 2 - WEBSITE PREDIKSI PENJUALAN */}
					<Project
						projectImage={project2}
						projectTitle="Website Prediksi Penjualan"
						projectStacks="Javascript | React | Material UI | NodeJS | MySQL"
						githubLink="https://github.com/FYEN45/Website-Prediksi-Penjualan"
					/>
				</div>

				<div className="mt-6 flex items-center justify-center">
					<a
						href="/projects"
						className=" text-md bg-red-600 px-4 py-3 text-center font-semibold uppercase text-slate-100 sm:text-xl"
					>
						More Projects Here
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
