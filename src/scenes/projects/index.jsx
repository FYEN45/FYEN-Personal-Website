import React from 'react';

// Icon Source : iconmonstr
import Project from '../../components/Project';

import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';
import project5 from '../../assets/projects/project5.png';
import Contacts from '../../components/Contacts';

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
						directLink="https://fyen-personal-website.onrender.com/"
						githubLink="https://github.com/FYEN45/FYEN-Personal-Website"
					/>

					{/* PROJECT 2 - WEBSITE PREDIKSI PENJUALAN */}
					<Project
						projectImage={project2}
						projectTitle="Website Prediksi Penjualan"
						projectStacks="React | Material UI | NodeJS | Express | MySQL"
						directLink=""
						githubLink="https://github.com/FYEN45/Website-Prediksi-Penjualan"
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
				</div>

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
