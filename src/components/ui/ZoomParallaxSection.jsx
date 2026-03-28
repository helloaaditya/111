'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from "./zoom-parallax";

export default function ZoomParallaxSection() {

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smooth: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	const images = [
		{ src: '/images/2024-10-22.jpg', alt: 'Authentic Spa Interior' },
		{ src: '/images/2024-07-30.jpg', alt: 'Reception Area' },
		{ src: '/images/2024-07-30 (5).jpg', alt: 'Treatment Setup' },
		{ src: '/images/2024-10-22 (2).jpg', alt: 'Premium Massage Bed' },
		{ src: '/images/2024-09-26 (1).jpg', alt: 'Couples Massage Suite' },
		{ src: '/images/2024-07-30 (8).jpg', alt: 'Quietude Suite' },
		{ src: '/images/2024-07-30 (3).jpg', alt: 'Relaxing environment' },
	];

	return (
		<section className="w-full relative">
			<div className="flex min-h-[25vh] md:min-h-[30vh] py-6 flex-col items-center justify-center px-10 bg-gradient-to-b from-background to-surface-variant">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(233,193,118,0.05),transparent_50%)] blur-[30px]"
				/>
                <span className="label-md uppercase tracking-[0.2em] text-primary mb-6 block text-center">THE ETHEREAL JOURNEY</span>
				<h2 className="text-center font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface">
					Step Into <span className="italic">Serenity</span>
				</h2>
			</div>
			<ZoomParallax images={images} />
		</section>
	);
}

