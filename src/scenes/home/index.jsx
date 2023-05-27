import React from 'react';
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

// Icon Source : iconmonstr
import icon_telegram from '../../assets/icons/icon-telegram.png';
import icon_mail from '../../assets/icons/icon-mail.png';
import icon_whatsapp from '../../assets/icons/icon-whatsapp.png';
import icon_linkedin from '../../assets/icons/icon-linkedin.png';
import icon_github from '../../assets/icons/icon-github.png';
import icon_instagram from '../../assets/icons/icon-instagram.png';
import icon_plane from '../../assets/icons/icon-plane.png';

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
							<span className="font-semibold italic">Computer Engineering</span>{' '}
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
			<div className="mt-16 bg-slate-300 py-12">
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
					{/* 
					Kuliah
					- Skripsi Website Prediksi Penjualan
					- PWFP Sewa Kamar Hotel
					- PWFP Perpus Gramedia
					- PWFP Daftar Mahasiswa
					- PM JenshinWiki
					- PM Katalog Mobil
					- Unity KeruvinSchool
					- Unity Shooter (lupa namanya)
					- AR Genshin Impact AR
					
					FCC - Responsive Website (Bagusin dikit smuanya)
					- Survey Form
					- Tribute Page
					- Technical Documentation
					- Product Landing Page
					- Personal Portofolio

					FCC - Javascript (Bikin ulang semua)
					- Palindrome Checker
					- Roman Numeral Converter
					- Caesars Cipher
					- Telephone Number Validator
					- Cash Register

					MERN (Desain ulang warna / fontnya?)
					- Analytics Landing Page
					- Social Media App
					- Admin Dashboard
					 */}

					{/*PROJECT 1 - FYEN PERSONAL WEBSITE  */}
					<div className="group relative aspect-video bg-slate-800 p-0.5">
						<img
							src={project1}
							alt="Personal Website"
							className="h-full w-full object-cover"
						/>

						<div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-slate-800 bg-opacity-80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
							<span className="text-1xl font-semibold text-white sm:text-2xl">
								Personal Website
							</span>

							<span className="mt-1 text-xs font-normal text-white sm:text-sm">
								HTML | Tailwind | Javascript | React
							</span>

							<div className="mt-3 flex gap-2">
								<a
									href="https://fyen-personal-website.onrender.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex aspect-square h-10 w-10 items-center justify-center bg-slate-100 p-2"
								>
									<img src={icon_plane} alt="FYEN Personal Website" />
								</a>

								<a
									href="https://github.com/FYEN45/FYEN-Personal-Website"
									target="_blank"
									rel="noopener noreferrer"
									className="flex aspect-square h-10 w-10 items-center justify-center bg-slate-100 p-2"
								>
									<img src={icon_github} alt="Github" />
								</a>
							</div>
						</div>
					</div>

					{/* PROJECT 2 - WEBSITE PREDIKSI PENJUALAN */}
					<div className="group relative aspect-video bg-slate-800 p-0.5">
						<img
							src={project2}
							alt="Personal Website"
							className="h-full w-full object-cover"
						/>

						<div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-slate-800 bg-opacity-80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
							<span className="text-1xl font-semibold text-white sm:text-2xl">
								Website Prediksi Penjualan
							</span>

							<span className="mt-1 text-xs font-normal text-white sm:text-sm">
								Javascript | React | Material UI | NodeJS | MySQL
							</span>

							<div className="mt-3 flex gap-2">
								<a
									href="https://github.com/FYEN45/Website-Prediksi-Penjualan"
									target="_blank"
									rel="noopener noreferrer"
									className="flex aspect-square h-10 w-10 items-center justify-center bg-slate-100 p-2"
								>
									<img src={icon_github} alt="Github" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 flex items-center justify-center">
					<span className="text-center text-2xl font-semibold">
						More Projects Cooming Soon!
					</span>
				</div>
			</div>

			{/* CONTACTS */}
			<div id="contact" className="bg-slate-300 pt-16">
				<div className="container mx-auto max-w-screen-lg px-12 pb-16">
					<h1 className="mb-4 text-center text-3xl font-semibold">CONTACTS</h1>

					<div className="flex flex-col items-center">
						<span className="text-center text-lg">
							I appreciate your interest in reaching out. This part provides you
							with various means to get in touch with me. Whether you have a
							question, collaboration opportunity, or simply want to connect, I
							am eager to hear from you.
						</span>
					</div>

					<div className="mx-auto mt-8 flex w-auto max-w-md justify-center gap-2 ">
						<a
							href="mailto:ferrygun45@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 px-2"
						>
							<img src={icon_mail} alt="Email" />
						</a>

						<a
							href="https://api.whatsapp.com/send?phone=6281297507252"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 p-2"
						>
							<img src={icon_whatsapp} alt="Whatsapp" />
						</a>

						<a
							href="https://t.me/FerryGun45"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 p-2"
						>
							<img src={icon_telegram} alt="Telegram" />
						</a>

						<a
							href="https://www.linkedin.com/in/ferry-gunawan45/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 p-2"
						>
							<img src={icon_linkedin} alt="LinkedIn" />
						</a>

						<a
							href="https://github.com/FYEN45"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 p-2"
						>
							<img src={icon_github} alt="Github" />
						</a>

						<a
							href="https://www.instagram.com/ferrygun45/"
							target="_blank"
							rel="noopener noreferrer"
							className="flex aspect-square w-full items-center justify-center bg-slate-100 p-2"
						>
							<img src={icon_instagram} alt="Instagram" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
