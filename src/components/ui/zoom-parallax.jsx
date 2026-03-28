'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function ZoomParallax({ images }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// Reduced scale values to lower GPU paint load
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<>
			{/* Desktop: full parallax experience */}
			<div ref={container} className="relative h-[300vh] hidden md:block">
				<div className="sticky top-0 h-screen overflow-hidden">
					{images.map(({ src, alt }, index) => {
						const scale = scales[index % scales.length];
						return (
							<motion.div
								key={index}
								style={{ scale, willChange: 'transform' }}
								className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
							>
								<div className="relative h-[30vh] w-[30vw] md:h-[35vh] md:w-[35vw]">
									<img
										src={src || '/placeholder.svg'}
										alt={alt || `Parallax image ${index + 1}`}
										className="h-full w-full object-cover rounded-3xl border border-primary/20 shadow-2xl saturate-50"
									/>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* Mobile: static masonry-style grid, zero parallax overhead */}
			<div className="block md:hidden px-4 py-8 grid grid-cols-2 gap-3">
				{images.slice(0, 6).map(({ src, alt }, index, array) => (
					<div
						key={index}
						className={`overflow-hidden rounded-2xl ${index === 0 || index === array.length - 1 ? 'col-span-2 h-52' : 'h-36'}`}
					>
						<img
							src={src}
							alt={alt}
							className="w-full h-full object-cover saturate-50"
							loading="lazy"
						/>
					</div>
				))}
			</div>
		</>
	);
}
