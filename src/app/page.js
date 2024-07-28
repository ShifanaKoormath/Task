"use client";
import "./styles/global.css"; // Ensure this file is imported if you have global styles

import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }
  }, []);

  const sendNotification = () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Hello, World!");
      });
    }
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        hola!
      </motion.h1>
      <motion.div
        className={styles.bellIcon}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span role="img" aria-label="bell">
          🔔
        </span>
      </motion.div>
      <motion.h2
        className={styles.subHeading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lorem Ipsum
      </motion.h2>
      <motion.p
        className={styles.paragraph}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lorem ipsum dolor sit amet.
      </motion.p>
      <motion.button
        className={styles.customButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={sendNotification}
      >
        Send Notification
      </motion.button>
    </div>
  );
}
