import React from "react";
import Image from "./image-qr-code.png";
const Card = () => {
	return (
		<div className='max-w-[300px] bg-white flex flex-col items-center justify-center p-3 rounded-2xl'>
			<div className='w-[17rem] h-[17rem] '>
				<img className='w-full h-full rounded-xl' src={Image} alt='' />
			</div>
			<div className='text-center text-xl font-bold px-2 py-4 text-slate-900'>
				Improve your front-end skills by building projects
			</div>
			<div className='text-center text-sm px-4 pb-6 text-slate-500'>
				Scan the QR code to visit Frontend Mentor and take your coding skills to
				the next level
			</div>
		</div>
	);
};

export default Card;
