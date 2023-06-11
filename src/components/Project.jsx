import React from 'react';

import icon_github from '../assets/icons/icon-github.png';
import icon_plane from '../assets/icons/icon-plane.png';

const Project = ({
	isContain,
	projectImage,
	projectTitle,
	projectStacks,
	directLink,
	githubLink,
}) => {
	let objectStyle;
	if (isContain) {
		objectStyle = 'object-contain';
	} else {
		objectStyle = 'object-cover';
	}

	return (
		<div>
			<div className={`group relative aspect-video bg-slate-600 p-0.5`}>
				<img
					src={projectImage}
					alt={projectTitle}
					className={`h-full w-full ${objectStyle}`}
				/>

				<div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-slate-800 bg-opacity-80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
					<span className="text-md sm:text-1xl text-center font-semibold text-white  md:sm:text-2xl">
						{projectTitle}
					</span>

					<span className="mt-1 text-center text-xs font-normal text-white md:text-sm">
						{projectStacks}
					</span>

					<div className="mt-3 flex gap-1 sm:gap-2">
						{directLink && (
							<a
								href={directLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex aspect-square h-8 w-8 items-center justify-center bg-slate-100 p-2 sm:h-10 sm:w-10"
							>
								<img src={icon_plane} alt="Direct Link" />
							</a>
						)}

						{githubLink && (
							<a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex aspect-square h-8 w-8 items-center justify-center bg-slate-100 p-2 sm:h-10 sm:w-10"
							>
								<img src={icon_github} alt="Github" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
