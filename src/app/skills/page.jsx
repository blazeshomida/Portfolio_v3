"use client";

import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import DashboardRow from "@/components/Dashboard/DashboardRow";
import { usePathname } from "next/navigation";
import Widget from "@/components/Widget";
import styles from "./page.module.scss";
import { skillsMemoji } from "@/../public/assets/images/memojis";
import Image from "next/image";
import { motion } from "framer-motion";
import { techLogos } from "@/../public/assets/svgs";
import { ReactLogo } from "@/../public/assets/svgs/TechLogos";
import useMediaQuery from "@/hooks/useMediaQuery";

const Skills = () => {
	const page = usePathname();
	const [firstWidgetSlideIndex, setFirstWidgetSlideIndex] = useState(0);
	const [secondWidgetSlideIndex, setSecondWidgetSlideIndex] = useState(0);
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const widgetSlides = [
		techLogos.slice(0, 3),
		techLogos.slice(3, 6),
		techLogos.slice(6, 9),
		techLogos.slice(9),
	];

	const firstWidgetSlides = widgetSlides.slice(0, 2);
	const secondWidgetSlides = widgetSlides.slice(2);

	const firstWidgetActiveSlideArray = firstWidgetSlides[firstWidgetSlideIndex];
	const secondWidgetActiveSlideArray =
		secondWidgetSlides[secondWidgetSlideIndex];

	function handleFirstSliderDrag(event, info) {
		const offset = info.offset.y;

		const direction = offset > 0 ? "decrease" : "increase";

		switch (direction) {
			case "increase":
				firstWidgetSlideIndex === firstWidgetSlides.length - 1
					? setFirstWidgetSlideIndex(0)
					: setFirstWidgetSlideIndex((prevSlide) => prevSlide + 1);
				break;
			case "decrease":
				firstWidgetSlideIndex === 0
					? setFirstWidgetSlideIndex(firstWidgetSlides.length - 1)
					: setFirstWidgetSlideIndex((prevSlide) => prevSlide - 1);
				break;
			default:
				break;
		}
	}

	function handleSecondSliderDrag(event, info) {
		const offset = info.offset.y;

		const direction = offset > 0 ? "decrease" : "increase";

		switch (direction) {
			case "increase":
				secondWidgetSlideIndex === secondWidgetSlides.length - 1
					? setSecondWidgetSlideIndex(0)
					: setSecondWidgetSlideIndex((prevSlide) => prevSlide + 1);
				break;
			case "decrease":
				secondWidgetSlideIndex === 0
					? setSecondWidgetSlideIndex(secondWidgetSlides.length - 1)
					: setSecondWidgetSlideIndex((prevSlide) => prevSlide - 1);
				break;
			default:
				break;
		}
	}

	return (
		<Dashboard>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget aspect={!isDesktop && "two"} layoutId="widget1">
					<motion.div className={styles["widget-wrapper"]}>
						<Image
							alt="Memoji character on computer"
							sizes="(width < 1024px) 100vw, 33vw"
							src={skillsMemoji}
							fill={true}
						/>
					</motion.div>
				</Widget>
				<Widget layoutId="widget2">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h2
							initial={{ opacity: 0, x: "30%", scale: 1 }}
							animate={{ opacity: 1, x: "0%", scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className={styles["main-heading"]}
						>
							“A Frontend Developer with skills in...
						</motion.h2>
					</motion.div>
				</Widget>
			</DashboardRow>
			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.ul
							drag="y"
							onDragEnd={(event, info) => handleFirstSliderDrag(event, info)}
							dragConstraints={{ top: -5, bottom: -5 }}
							dragSnapToOrigin={true}
							dragElastic={0.2}
							className={styles["slides-wrapper"]}
						>
							{firstWidgetActiveSlideArray.map((logo) => (
								<motion.li key={logo.name} className={styles["logo-wrapper"]}>
									<logo.component />
									<p>{logo.name}</p>
								</motion.li>
							))}
						</motion.ul>

						<div className={styles["pagination-wrapper"]}>
							{firstWidgetSlides.map((slide, index) => (
								<button
									key={index}
									onClick={() => setFirstWidgetSlideIndex(index)}
									className={`${
										firstWidgetSlideIndex === index && styles["active"]
									} ${styles["pagination-indicator"]}`}
								></button>
							))}
						</div>
					</motion.div>
				</Widget>
				<Widget layoutId="widget4">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.p
							initial={{ opacity: 0, y: "30%", scale: 1 }}
							animate={{ opacity: 1, y: "0%", scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className={styles["details"]}
						>
							HTML, CSS, JavaScript, React, Next.js, and more. This journey
							began with a spark of curiosity about the inner workings of
							websites and has since grown into a full-fledged passion.
							I&apos;ve dedicated myself to mastering these technologies and
							using them to create interactive, user-friendly websites.&quot;
						</motion.p>
					</motion.div>
				</Widget>
				<Widget layoutId="widget5" name={"widget5"}>
					<motion.div className={styles["widget-wrapper"]}>
						<motion.ul
							drag="y"
							onDragEnd={(event, info) => handleSecondSliderDrag(event, info)}
							dragConstraints={{ top: -5, bottom: -5 }}
							dragSnapToOrigin={true}
							dragElastic={0.2}
							className={styles["slides-wrapper"]}
						>
							{secondWidgetActiveSlideArray.map((logo) => (
								<motion.li key={logo.name} className={styles["logo-wrapper"]}>
									<logo.component />
									<p>{logo.name}</p>
								</motion.li>
							))}
						</motion.ul>
						<div className={styles["pagination-wrapper"]}>
							{secondWidgetSlides.map((slide, index) => (
								<button
									key={index}
									onClick={() => setSecondWidgetSlideIndex(index)}
									className={`${
										secondWidgetSlideIndex === index && styles["active"]
									} ${styles["pagination-indicator"]}`}
								></button>
							))}
						</div>
					</motion.div>
				</Widget>
			</DashboardRow>
		</Dashboard>
	);
};

export default Skills;
