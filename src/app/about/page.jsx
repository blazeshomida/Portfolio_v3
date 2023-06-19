"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import DashboardRow from "@/components/Dashboard/DashboardRow";
import { usePathname } from "next/navigation";
import Widget from "@/components/Widget";
import { motion } from "framer-motion";
import styles from "./page.module.scss";
import { aboutMemoji } from "../../../public/assets/images/memojis";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

const About = () => {
	const page = usePathname();
	const isDesktop = useMediaQuery('(width >= 1024px)')

	return (
		<Dashboard>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget layoutId="widget1" aspect={!isDesktop ? 'two' : 'square'}>
					<div className={styles["widget-wrapper"]}>
						<Image src={aboutMemoji} fill={true} alt="Blaze's memoji character"/>
					</div>
				</Widget>
				<Widget layoutId="widget2">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h2 className={styles["main-heading"]}>
							“A bit about me...
						</motion.h2>
					</motion.div>
				</Widget>
			</DashboardRow>
			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.p className={styles["details"]}>
						&quot;Beyond the code, there&apos;s a bit more to my story. I started my
							professional journey with a successful career in sales, honing my
							communication and problem-solving skills. This experience has
							proved invaluable in my transition to web development, a shift
							inspired by a blend of personal interests and innate curiosity.
						</motion.p>
						<motion.p className={styles["details"]}>
							My journey into development started when I created a website for
							my photography business using Shopify. Though initially simple,
							the process piqued my curiosity and led me to explore platforms
							like Webflow, furthering my interest in building custom sites.
							Another significant influence has been my love for movies and
							smart home tech. In particular, designing a customized home
							dashboard with Home Assistant, adding my personal touch to
							pre-built components, really fueled my drive to delve into
							coding.
						</motion.p>
						<motion.p className={styles["details"]}>
							As I continue my journey in web development, I am amazed by its
							limitless possibilities. I want to make a real impact,
							contributing to creative and innovative projects. My ultimate goal
							is to use my unique combination of skills, both from sales and
							from my personal interests, to make a real, positive difference in
							the world of web development.&quot;
						</motion.p>
					</motion.div>
				</Widget>
		
			</DashboardRow>
		</Dashboard>
	);
};

export default About;
