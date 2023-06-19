"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Dashboard from "@/components/Dashboard";
import { usePathname } from "next/navigation";
import DashboardRow from "@/components/Dashboard/DashboardRow";
import Widget from "@/components/Widget";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import data from "@/data/data";
import { techLogos } from "../../../public/assets/svgs";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import useMediaQuery from "@/hooks/useMediaQuery";

const Projects = () => {
	const page = usePathname();
	const [activeProject, setActiveProject] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const isDesktop = useMediaQuery("(width >= 1024px)");

	const projects = data.projects;
	const project = projects[activeProject];
	// NEW: Refactored into useEffect.
	useEffect(() => {
		if (isOpen || isHovered) return; // NEW: Don't initiate a timer if card is open or being hovered over.

		const timer = setTimeout(() => {
			setActiveProject((prevIndex) => (prevIndex + 1) % projects.length);
		}, 20000); // delay in milliseconds

		// This will clear the timer when the component unmounts, or when any of the dependencies change.
		return () => clearTimeout(timer);
	}, [activeProject, isOpen, isHovered, isDragging]); // activeProject, isOpen, and isHovered are dependencies

	function handleCardFlip(event) {
		if (isDragging) {
			// if the user was dragging, don't flip the card
			setIsDragging(false); // reset the dragging state
			return;
		} else {
			setIsOpen((prev) => !prev);
		}
	}

	function handlePagination(index) {
		setActiveProject(index);
	}

	function handleMouseEnter() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}

	function handleSliderDrag(event, info) {
		const offset = info.offset.x;
		const absOffset = Math.abs(offset);

		if (absOffset > 1) {
			setIsDragging(true); // if dragging distance is more than 1, consider it as dragging
		}

		const direction = offset > 50 ? "decrease" : offset < -50 && "increase";

		switch (direction) {
			case "increase":
				activeProject === projects.length - 1
					? setActiveProject(0)
					: setActiveProject((prevSlide) => prevSlide + 1);
				break;
			case "decrease":
				activeProject === 0
					? setActiveProject(projects.length - 1)
					: setActiveProject((prevSlide) => prevSlide - 1);
				break;
			default:
				break;
		}
	}

	const buttonWidget = (
		<div className={styles["button-wrapper"]}>
			<Button elementType={"link"} href={project.liveSite}>
				View Live
			</Button>
			<Button elementType={"link"} href={project.repoSite} variation={"tinted"}>
				View Repo
			</Button>
		</div>
	);

	const detailsWidget = (
		<motion.p
			initial={{ opacity: 0, x: "-30%", scale: 1 }}
			animate={{ opacity: 1, x: "0%", scale: 1 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className={styles["details"]}
		>
			A variety of projects that have allowed me to apply and expand my skills.
			From multi-page websites to single component projects, each one presented
			unique challenges and learning opportunities. These projects represent not
			just my technical abilities, but also my problem-solving skills and my
			commitment to continuous learning.
		</motion.p>
	);

	return (
		<Dashboard>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget layoutId="widget1">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h2 className={styles["main-heading"]}>
							Some of my past works include...
						</motion.h2>
					</motion.div>
				</Widget>
				<Widget layoutId="widget2">
					<motion.div className={styles["widget-wrapper"]}>
						{isDesktop ? buttonWidget : detailsWidget}
					</motion.div>
				</Widget>
			</DashboardRow>
			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3" order={!isDesktop && "order-2"}>
					<motion.div className={`${styles["widget-wrapper"]}`}>
						{!isDesktop ? buttonWidget : detailsWidget}
					</motion.div>
				</Widget>

				<AnimatePresence>
					<motion.div
						initial={{ borderRadius: 16 }}
						animate={{}}
						layout="size"
						layoutId="widget4"
						className={`${styles["card"]}`}
					>
						<div
							className={`${styles["card-content"]} ${isOpen && styles["open"]}
							`}
						>
							<div className={styles["card-front"]}>
								<motion.div
									key={project.image}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										opacity: {
											duration: 0.8,
											ease: easeInOut,
										},
										// x: {
										// 	duration: .4,
										// 	ease: easeInOut,
										// }
									}}
									className={styles["card-image-wrapper"]}
								>
									<Image
										alt={project.title}
										className={styles["project-image"]}
										src={project.image}
										width={1200}
										height={800}
									/>
								</motion.div>

								<button
									onClick={(event) => handleCardFlip(event)}
									className={styles["more-info-button"]}
								>
									&#43;
								</button>
								<div className={styles["pagination-wrapper"]}>
									{projects.map((project, index) => (
										<button
											onClick={() => handlePagination(index)}
											className={`${
												activeProject === index && styles["active"]
											} ${styles["pagination-indicator"]}`}
										></button>
									))}
								</div>
								<motion.div
									drag
									onDragEnd={(event, info) => handleSliderDrag(event, info)}
									dragConstraints={{ left: 1, right: 1 }}
									dragElastic={0}
									className={styles["card-flip-overlay"]}
									onClick={(event) => handleCardFlip(event)}
									onMouseEnter={() => handleMouseEnter()}
									onMouseLeave={() => handleMouseLeave()}
								></motion.div>
							</div>
							<div className={styles["card-back"]}>
								<div
									key={project.name}
									className={`${styles["project-wrapper"]}`}
								>
									<div className={styles["details-wrapper"]}>
										<h3>{project.title}</h3>
										<p>{project.summary}</p>
									</div>
									<div className={styles["logo-wrapper"]}>
										{project.tech.map((tech) =>
											techLogos.map(
												(logo) => logo.name === tech && <logo.component />
											)
										)}
									</div>
								</div>
								<button
									onClick={(event) => handleCardFlip(event)}
									className={styles["more-info-button"]}
								>
									&#8722;
								</button>
								{/* <div
									className={styles["card-flip-overlay"]}
									onClick={(event) => handleCardFlip(event)}
								></div> */}
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</DashboardRow>
		</Dashboard>
	);
};

export default Projects;
