import React from 'react';

// Icon Source : iconmonstr
import icon_telegram from '../assets/icons/icon-telegram.png';
import icon_mail from '../assets/icons/icon-mail.png';
import icon_whatsapp from '../assets/icons/icon-whatsapp.png';
import icon_linkedin from '../assets/icons/icon-linkedin.png';
import icon_github from '../assets/icons/icon-github.png';
import icon_instagram from '../assets/icons/icon-instagram.png';

const Contacts = () => {
	return (
		<div id="contact" className="bg-slate-300 pt-16">
			<div className="container mx-auto max-w-screen-lg px-12 pb-16">
				<h1 className="mb-4 text-center text-3xl font-semibold">CONTACTS</h1>

				<div className="flex flex-col items-center">
					<span className="text-center text-lg">
						I appreciate your interest in reaching out. This part provides you
						with various means to get in touch with me. Whether you have a
						question, collaboration opportunity, or simply want to connect, I am
						eager to hear from you.
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
	);
};

export default Contacts;
