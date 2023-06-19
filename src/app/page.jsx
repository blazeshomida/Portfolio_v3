"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import Dashboard from "@/components/Dashboard";
import DashboardRow from "@/components/Dashboard/DashboardRow";
import { usePathname } from "next/navigation";
import Widget from "@/components/Widget";
import { heroMemoji } from "../../public/assets/images/memojis";
import Button from "@/components/Button";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
	const page = usePathname();
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	return (
		<Dashboard>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget layoutId="widget1">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h1
							initial={{ opacity: 0, x: "-30%", scale: 1 }}
							animate={{ opacity: 1, x: "0%", scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className={styles["main-heading"]}
						>
							Hello World!<span>I&apos;m Blaze!</span>
						</motion.h1>
					</motion.div>
				</Widget>

				<Widget layoutId="widget2" aspect={!isDesktop && "two"}>
					<motion.div
						initial={{ opacity: 0, x: "30%", scale: 1 }}
						animate={{ opacity: 1, x: "0%", scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className={styles["widget-wrapper"]}
					>
						<Image
							src={heroMemoji}
							fill={true}
							alt="Blaze's memoji character waving"
							sizes="(width < 1024px) 50vw, 33vw"
							priority
						/>
					</motion.div>
				</Widget>
			</DashboardRow>

			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3" order={!isDesktop && "order-2"}>
					<div
						className={`${styles["widget-wrapper"]} ${styles["wrapper-cta"]}`}
					>
						<div className={styles["cta-details"]}>
							<p>Curious to see more?</p>
							<p>
								Explore my projects below or drop me a line to discuss how we
								can collaborate on your next digital venture.
							</p>
						</div>
						<div className={styles["button-wrapper"]}>
							<Button elementType={"link"} href={"/projects"}>
								Projects
							</Button>
							<Button
								elementType={"link"}
								href={"/contact"}
								variation={"tinted"}
							>
								Contact
							</Button>
						</div>
					</div>
				</Widget>

				<Widget layoutId="widget4">
					<div className={styles["widget-wrapper"]}>
						<motion.h2
							initial={{ opacity: 0, y: "30%", scale: 1 }}
							animate={{ opacity: 1, y: "0%", scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							“Crafting digital experiences that combine design and technology
							in exciting ways.”
						</motion.h2>
					</div>
				</Widget>
			</DashboardRow>
		</Dashboard>
	);
}
