"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import { usePathname } from "next/navigation";
import Widget from "@/components/Widget";
import DashboardRow from "@/components/Dashboard/DashboardRow";
import { motion } from "framer-motion";
import styles from "./page.module.scss";
import { TypingBubble } from "../../../public/assets/svgs";
import { contactMemoji } from "../../../public/assets/images/memojis";
import Image from "next/image";
import Form from "@/components/Form";
import InputGroup from "@/components/Form/InputGroup";
import Button from "@/components/Button";
import useMediaQuery from "@/hooks/useMediaQuery";

const Contact = () => {
	const page = usePathname();
	const isDesktop = useMediaQuery('(width >= 1024px)')

	return (
		<Dashboard>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget layoutId="widget1" order={!isDesktop && 'order-2'}>
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h2 className={styles["main-heading"]}>
							Would love to chat! Feel free to shoot me a message!
							<span>
								<TypingBubble />
							</span>
						</motion.h2>
					</motion.div>
				</Widget>
				<Widget layoutId="widget2" aspect={!isDesktop && 'two'} >
					<div className={styles["widget-wrapper"]}>
						<Image src={contactMemoji} fill={true} />
					</div>
				</Widget>
			</DashboardRow>
			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.p className={styles["details"]}>
							Whether you have a potential project in mind, or just want to talk
							about web development, don't hesitate to reach out. I'm always
							open to new opportunities and connections in this exciting field."
						</motion.p>
					</motion.div>
				</Widget>
				<Widget layoutId="widget4">
					<div className={styles['widget-wrapper']}>
						<Form>
							<InputGroup label="First Name" placeholder="Tim" type="text" />
							<InputGroup label="Last Name" placeholder="Cook" type="text" />
							<InputGroup
								label="Email"
								placeholder="thecook@gmail.com"
								type="email"
							/>
							<InputGroup
								label="Message"
								placeholder="Typing..."
								type="textarea"
							/>
							<Button className={styles["submit"]} type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</Widget>

			</DashboardRow>
		</Dashboard>
	);
};

export default Contact;
