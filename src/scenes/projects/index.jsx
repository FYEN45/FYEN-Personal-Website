import React from 'react';

// Icon Source : iconmonstr
import Project from '../../components/Project';

import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';
import project5 from '../../assets/projects/project5.png';
import project6 from '../../assets/projects/project6.png';
import project7 from '../../assets/projects/project7.png';
import project8 from '../../assets/projects/project8.png';
import project9 from '../../assets/projects/project9.png';
import project10 from '../../assets/projects/project10.png';
import project11 from '../../assets/projects/project11.png';

const Projects = () => {
	return (
		<div>
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
				<div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2">
					{/*PROJECT 1 - FYEN PERSONAL WEBSITE  */}
					<Project
						projectImage={project1}
						projectTitle="Personal Website"
						projectStacks="React | Tailwind | Javascript"
						githubLink="https://github.com/FYEN45/FYEN-Personal-Website"
						directLink="https://fyen-personal-website.onrender.com/"
					/>

					{/* PROJECT 2 - WEBSITE PREDIKSI PENJUALAN */}
					<Project
						projectImage={project2}
						projectTitle="Website Prediksi Penjualan"
						projectStacks="React | Material UI | NodeJS | Express | MySQL"
						githubLink="https://github.com/FYEN45/Website-Prediksi-Penjualan"
						directLink=""
					/>

					{/* PROJECT 11 - Omnifood */}
					<Project
						projectImage={project10}
						projectTitle="Omnifood"
						projectStacks="HTML | CSS | Javascript"
						githubLink="https://github.com/FYEN45/Omnifood"
						directLink="https://fyen45.github.io/Omnifood/"
					/>

					{/* PROJECT 10 - Spring Restfull API */}
					<Project
						projectImage={project10}
						projectTitle="Spring RESTfull API"
						projectStacks="Spring | Java"
						githubLink="https://github.com/FYEN45/spring-restfull-api"
						directLink=""
					/>

					{/* PROJECT 3 - Analytics Landing Page */}
					<Project
						projectImage={project3}
						projectTitle="Analytics Landing Page"
						projectStacks="React | Tailwind"
						githubLink="https://github.com/FYEN45/Analytics-Landing-Page"
						directLink="https://analytics-landing-page-ui.onrender.com/"
					/>

					{/* PROJECT 4 - Social Media App */}
					<Project
						projectImage={project4}
						projectTitle="Social Media App"
						projectStacks="React | Material UI | NodeJS | Express | MongoDB"
						githubLink="https://github.com/FYEN45/Social-Media-App"
						directLink="https://social-media-app-p95v.onrender.com/"
					/>

					{/* PROJECT 5 - Admin Dashboard */}
					<Project
						projectImage={project5}
						projectTitle="Admin Dashboard"
						projectStacks="React | Material UI | NodeJS | Express | MongoDB"
						githubLink="https://github.com/FYEN45/Admin-Dashboard"
						directLink="https://fe-admin-dashboard.onrender.com/"
					/>

					{/* PROJECT 6 - Sewa Kamar Hotel */}
					<Project
						projectImage={project6}
						projectTitle="Sewa Kamar Hotel"
						projectStacks="HTML | CSS | Bootstrap | Python | Flask | MySQL"
						githubLink="https://github.com/FYEN45/UAS-PWFP-SewaKamarHotel"
						directLink=""
					/>

					{/* PROJECT 7 - Perpustakaan Gramedia */}
					<Project
						projectImage={project7}
						projectTitle="Perpustakaan Gramedia"
						projectStacks="HTML | CSS | Bootstrap | Python | Flask | MySQL"
						githubLink="https://github.com/FYEN45/UTS-PWFP-PerpustakaanGramedia"
						directLink=""
					/>

					{/* PROJECT 8 - Katalog Mobil */}
					<Project
						projectImage={project9}
						projectTitle="Katalog Mobil"
						projectStacks="Android | Java | PHP | MySQL"
						githubLink="https://github.com/FYEN45/UTS-PM-KatalogMobil"
						directLink=""
					/>

					{/* PROJECT 9 - Genshin Impact Wiki */}
					<Project
						projectImage={project8}
						projectTitle="Genshin Impact Wiki"
						projectStacks="Android | Java | PHP | MySQL"
						githubLink="https://github.com/FYEN45/UAS-PM-JenshinWiki"
						directLink=""
					/>
				</div>

				{/* 
						// Kuliah
						// - Unity KeruvinSchool
						// - Unity Shooter (lupa namanya)
						// - AR Genshin Impact AR

						// FCC - Responsive Website (Bagusin dikit smuanya)
						// - Survey Form
						// - Tribute Page
						// - Technical Documentation
						// - Product Landing Page
						// - Personal Portofolio
				*/}

				<div className="mt-12 flex items-center justify-center">
					<span className="text-center text-2xl font-semibold">
						More Projects Cooming Soon!
					</span>
				</div>
			</div>
		</div>
	);
};

export default Projects;
