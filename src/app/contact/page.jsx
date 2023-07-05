"use client";

import { useState } from "react";
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
	const isDesktop = useMediaQuery("(width >= 1024px)");
	const [errors, setErrors] = useState({});
	const [formInfo, setFormInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	function handleFormInput(e) {
		const inputValue = e.target.value;
		const inputName = e.target.name;

		setFormInfo((prev) => ({
			...prev,
			[inputName]: inputValue,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newErrors = {};

		// Fields are required
		for (const [key, value] of Object.entries(formInfo)) {
			if (!value.trim()) {
				// split camelCase into words
				let formattedKey = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
				// capitalize the first letter of each word
				formattedKey = formattedKey
					.split(" ")
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(" ");
				newErrors[key] = `${formattedKey} is required`;
			}
		}

		// Email format validation
		const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (formInfo.email && !emailRegEx.test(formInfo.email)) {
			newErrors.email = "Email address is invalid";
		}

		// If there are validation errors, stop form submission and set errors state
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);

			// Clear error messages after 7 seconds
			setTimeout(() => {
				setErrors({});
			}, 7000);

			return;
		}

		// Otherwise, proceed with form submission...
	}

	return (
		<>
			<DashboardRow order={"top"} page={page.slice(1)}>
				<Widget layoutId="widget1" order={!isDesktop && "order-2"}>
					<motion.div className={styles["widget-wrapper"]}>
						<motion.h1 className={styles["main-heading"]}>
							Would love to chat! Feel free to shoot me a message!
							<span>
								<TypingBubble />
							</span>
						</motion.h1>
					</motion.div>
				</Widget>
				<Widget layoutId="widget2" aspect={!isDesktop && "two"}>
					<div className={styles["widget-wrapper"]}>
						<Image
							src={contactMemoji}
							fill={true}
							sizes="(width < 1024px) 100vw, 33vw"
							alt="Blaze's memoji character calling pose"
						/>
					</div>
				</Widget>
			</DashboardRow>
			<DashboardRow order={"bottom"} page={page.slice(1)}>
				<Widget layoutId="widget3">
					<motion.div className={styles["widget-wrapper"]}>
						<motion.p className={styles["details"]}>
							Whether you have a potential project in mind, or just want to talk
							about web development, don&apos;t hesitate to reach out. I&apos;m
							always open to new opportunities and connections in this exciting
							field.&quot;
						</motion.p>
						<div className={styles["button-wrapper"]}>
							<Button elementType={"link"} href=''>
								Github
							</Button>
							<Button
								elementType={"link"}
								href=''
								variation={"tinted"}
							>
								LinkedIn
							</Button>
						</div>
					</motion.div>
				</Widget>
				{/* <Widget layoutId="widget4">
					<div className={styles["widget-wrapper"]}>
						<Form handleSubmit={handleSubmit}>
							<InputGroup
								name="firstName"
								handleFormInput={handleFormInput}
								label="First Name"
								placeholder="Tim"
								type="text"
								errors={errors}
							/>
							<InputGroup
								name="lastName"
								handleFormInput={handleFormInput}
								label="Last Name"
								placeholder="Cook"
								type="text"
								errors={errors}
							/>
							<InputGroup
								name="email"
								handleFormInput={handleFormInput}
								label="Email"
								placeholder="thecook@gmail.com"
								type="email"
								errors={errors}
							/>
							<InputGroup
								name="message"
								handleFormInput={handleFormInput}
								label="Message"
								placeholder="Typing..."
								type="textarea"
								errors={errors}
							/>
							<Button className={styles["submit"]} type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</Widget> */}
			</DashboardRow>
		</>
	);
};

export default Contact;
